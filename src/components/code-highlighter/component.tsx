import * as React from "react";

import { highlightBlock } from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

export interface ICodeHighlighterProps {
  isInline?: boolean;
  language: "js" | "bash";
  source: string;
}

export class CodeHighlighter extends React.Component<ICodeHighlighterProps> {
  private ref: null | HTMLElement;

  componentDidMount() {
    if (this.ref != null) {
      highlightBlock(this.ref);
    }
  }

  render() {
    let { isInline, source, language } = this.props;
    if (isInline) {
      return (
        <code
          className={language}
          ref={ref => {
            this.ref = ref;
          }}
          style={{
            display: "inline"
          }}
        >
          {source.trim()}
        </code>
      );
    }
    return (
      <pre
        className={language}
        ref={ref => {
          this.ref = ref;
        }}
      >
        <code>{source.trim()}</code>
      </pre>
    );
  }
}
