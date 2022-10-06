import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Main />
        <NextScript />

        <div id="react-modal" />
      </body>
    </Html>
  );
}
