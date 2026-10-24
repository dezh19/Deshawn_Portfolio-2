import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

// Small Markdown renderer for README files (no extra dependency).
// Handles headings, paragraphs, lists, code blocks, blockquotes, tables,
// horizontal rules, links, images, bold, italic and inline code.
const escapeHtml = (str) =>
  str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const safeUrl = (url) => (/^\s*javascript:/i.test(url) ? "#" : url);

const inline = (text) => {
  const codes = [];
  let out = escapeHtml(text).replace(/`([^`]+)`/g, (_, c) => {
    codes.push(c);
    return `\u0000${codes.length - 1}\u0000`;
  });
  out = out
    .replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g, (_, alt, src) =>
      /^https?:\/\//.test(src)
        ? `<img src="${safeUrl(src)}" alt="${alt}" class="readme-img" />`
        : ""
    )
    .replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, (_, label, href) =>
      `<a href="${safeUrl(href)}" target="_blank" rel="noopener noreferrer">${label}</a>`
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
    .replace(/~~([^~]+)~~/g, "<del>$1</del>");
  return out.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
};

const isTableSep = (line) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line);
const splitRow = (line) =>
  line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

export const markdownToHtml = (md = "") => {
  const lines = md.replace(/\r\n?/g, "\n").split("\n");
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (/^\s*```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      html.push(`<pre><code>${escapeHtml(buf.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^\s*$/.test(line)) { i++; continue; }

    // Heading
    const h = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (h) {
      html.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) { html.push("<hr />"); i++; continue; }

    // Table
    if (line.includes("|") && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) rows.push(splitRow(lines[i++]));
      html.push(
        `<div class="readme-table"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${rows
          .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`
      );
      continue;
    }

    // Blockquote
    if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ""));
      html.push(`<blockquote>${markdownToHtml(buf.join("\n"))}</blockquote>`);
      continue;
    }

    // Lists (one level of nesting via indentation)
    if (/^\s*([-*+]|\d+[.)])\s+/.test(line)) {
      const ordered = /^\s*\d+[.)]/.test(line);
      const tag = ordered ? "ol" : "ul";
      const items = [];
      while (i < lines.length && (/^\s*([-*+]|\d+[.)])\s+/.test(lines[i]) || /^\s{2,}\S/.test(lines[i]))) {
        const m = lines[i].match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
        if (m && m[1].length < 2) {
          items.push({ text: m[3], children: [] });
        } else if (items.length) {
          items[items.length - 1].children.push(lines[i].replace(/^\s{2,4}/, ""));
        }
        i++;
      }
      const renderItem = ({ text, children }) => {
        const task = text.match(/^\[( |x|X)\]\s+(.*)$/);
        const body = task
          ? `<input type="checkbox" disabled ${task[1] !== " " ? "checked" : ""} /> ${inline(task[2])}`
          : inline(text);
        return `<li>${body}${children.length ? markdownToHtml(children.join("\n")) : ""}</li>`;
      };
      html.push(`<${tag}>${items.map(renderItem).join("")}</${tag}>`);
      continue;
    }

    // Raw HTML lines (e.g. <p align="center">) are skipped rather than injected
    if (/^\s*<\/?[a-zA-Z][^>]*>\s*$/.test(line)) { i++; continue; }

    // Paragraph
    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,6}\s|\s*```|\s*>|\s*([-*+]|\d+[.)])\s+)/.test(lines[i]) &&
      !/^\s*([-*_])(\s*\1){2,}\s*$/.test(lines[i])
    ) buf.push(lines[i++].trim());
    if (!buf.length) { i++; continue; }
    html.push(`<p>${inline(buf.join(" "))}</p>`);
  }

  return html.join("\n");
};

const ReadmeModal = ({ open, onClose, title, readme }) => {
  const html = useMemo(() => markdownToHtml(readme), [readme]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} README`}
    >
      <div
        className="bg-tertiary rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10">
          <div className="min-w-0">
            <p className="text-secondary text-[12px] uppercase tracking-wider">README · Private repository</p>
            <h3 className="text-white font-bold text-[20px] truncate">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 shrink-0 rounded-full black-gradient flex items-center justify-center text-white text-[20px] leading-none"
            aria-label="Close README"
          >
            ×
          </button>
        </div>
        <div className="readme-body overflow-y-auto px-6 py-5" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>,
    document.body
  );
};

export default ReadmeModal;
