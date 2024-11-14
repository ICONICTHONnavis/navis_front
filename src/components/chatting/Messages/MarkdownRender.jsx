import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as S from './MarkdownRender.styles';

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
function CodeBlock({ node, inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'plaintext';
  return !inline && match ? (
    <S.CodeBlockContainer>
      <S.LanguageLabel>{language}</S.LanguageLabel>
      <SyntaxHighlighter
        style={solarizedlight}
        language={language}
        PreTag="div"
        className={S.CodeBlock}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </S.CodeBlockContainer>
  ) : (
    <code className={S.CodeBlock} {...props}>
      {children}
    </code>
  );
}

function BlockQuote({ children }) {
  return (
    <S.BlockQuoteContainer>
      <S.BlockQuote>{children}</S.BlockQuote>
    </S.BlockQuoteContainer>
  );
}

function LiStyle({ children, ...props }) {
  // LiStyle 컴포넌트 추가
  return <S.ListItem {...props}>{children}</S.ListItem>;
}

function MarkdownRenderer({ text }) {
  return (
    <S.MarkdownContainer>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
          blockquote: BlockQuote,
          li: LiStyle,
        }}
      >
        {text}
      </ReactMarkdown>
    </S.MarkdownContainer>
  );
}

export default MarkdownRenderer;
