import React from 'react';

const globalCSS = `
h2 {
  margin: 2rem 0;
}

.main {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
`;

export const HTMLShell: React.FC<{ title: string }> = ({ title, children }) => (
  <html lang='ja'>
    <head>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <style>{globalCSS}</style>
    </head>
    <body>{children}</body>
  </html>
);
