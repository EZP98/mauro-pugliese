import type { CSSProperties, ElementType } from 'react';

interface Props {
  text: string;
  tag?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  highlightWords?: Record<string, CSSProperties>;
}

export default function TextReveal({ text, tag: Tag = 'div', className = '', style, highlightWords }: Props) {
  if (!highlightWords) {
    return (
      <Tag className={className} style={style}>
        {text}
      </Tag>
    );
  }
  const pattern = new RegExp(`(${Object.keys(highlightWords).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  const parts = text.split(pattern);
  return (
    <Tag className={className} style={style}>
      {parts.map((part, i) => {
        const hl = highlightWords[part];
        return hl ? <span key={i} style={hl}>{part}</span> : <span key={i}>{part}</span>;
      })}
    </Tag>
  );
}
