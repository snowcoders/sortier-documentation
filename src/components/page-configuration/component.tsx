import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";
import { Link } from "react-router-dom";

export class Configuration extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-configuration">
        <h1>Configuration</h1>
        <h2>Configuration file</h2>
        <p>
          Sortier uses
          <a
            href="https://github.com/davidtheclark/cosmiconfig"
            target="_blank"
          >
            cosmiconfig
          </a>
          for configuration file support. This means you can configure sortier
          via:
        </p>
        <ul>
          <li>
            A
            <CodeHighlighter
              isInline={true}
              source=".sortierrc"
              language="bash"
            />
            file, written in YAML or JSON, with optional extensions:
            <CodeHighlighter
              isInline={true}
              source=".yaml/.yml/.json."
              language="bash"
            />
          </li>
          <li>
            A
            <CodeHighlighter
              isInline={true}
              source="sortier.config.js"
              language="bash"
            />
            or
            <CodeHighlighter
              isInline={true}
              source=".sortierrc.js"
              language="bash"
            />
            file that exports an object.
          </li>
          <li>
            A
            <CodeHighlighter isInline={true} source="sortier" language="bash" />
            key in your package.json file.
          </li>
        </ul>
        <p>
          The configuration file will be resolved starting from the location of
          the file being formatted, and searching up the file tree until a
          config file is (or isn't) found.
        </p>
        <h2>Configuration Options</h2>
      </div>
    );
  }
}
