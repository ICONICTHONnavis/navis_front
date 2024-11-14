import { styled } from 'styled-components';

export const MarkdownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const ListItem = styled.li`
  width: 90%;
`;

export const CodeBlockContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  background-color: var(--color-gray2);
  border-radius: 10px;
  padding: 1rem;
  padding-right: 4rem;
`;

export const LanguageLabel = styled.div`
  position: relative;
  color: var(--color-gray8);
  font-size: 0.75rem;
  display: inline-block;
  z-index: 1;
`;

export const CodeBlock = styled.code`
  background-color: var(--color-gray2) !important;
  width: fit-content !important;
  box-sizing: border-box !important;
  overflow-x: auto !important;
  position: relative !important;
  margin: 0 !important;
`;

export const BlockQuoteContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
`;

export const BlockQuote = styled.blockquote`
  background-color: var(--color-gray2);
  border-left: 5px solid var(--block-main-color);
  padding: 0 2rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
`;

// .markdownContainer > * {
//   margin: 0;
//   width: 100%;
// }
