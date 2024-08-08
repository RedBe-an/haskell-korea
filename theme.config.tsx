import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/RedBe-an/Haskell-Korea/tree/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Haskell Korea",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ko" />
      <meta name="description" content="한국인을 위한 하스켈" />
      <meta name="og:description" content="한국인을 위한 하스켈" />
      <meta name="apple-mobile-web-app-title" content="Haskell Korea" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </>
  ),
  banner: {
    key: "We-need-your-help",
    text: (
      <a href="https://github.com/RedBe-an/Haskell-Korea" target="_blank">
        Haskell Korea는 여러분들의 도움이 필요합니다. 번역에 힘을 보태 주세요! →
      </a>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/RedBe-an/Haskell-Korea" target="_blank">
          Haskell Korea
        </a>
        .
      </span>
    ),
  },
  logo: (
    <>
      <span>
        <strong>Haskell Korea</strong>
      </span>
    </>
  ),
  project: {
    link: "https://github.com/RedBe-an/Haskell-Korea",
  },
  editLink: {
    text: "이 페이지 편집하기 →",
  },
  feedback: {
    content: "피드백 주기 →",
    labels: "피드백",
  },
};

export default config;
