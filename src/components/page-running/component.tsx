import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class Running extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-running">
        <h1>Running</h1>
        <p>Sortier can be run through either the API or a CLI</p>
        <h2>CLI</h2>
        <p>Sortier by default will write all files in place. To do so run:</p>
        <CodeHighlighter source={'sortier "[glob syntax]"'} language="bash" />
        <p>
          Don't forget the quotes around the globs! The quotes make sure that
          Prettier expands the globs rather than your shell, for cross-platform
          usage. The{" "}
          <a
            href="https://github.com/isaacs/node-glob/blob/master/README.md#glob-primer"
            target="_blank"
          >
            glob syntax from the glob module
          </a>{" "}
          is used.
        </p>
        <p>
          When the CLI is executed, it will use{" "}
          <a
            href="https://github.com/davidtheclark/cosmiconfig#readme"
            target="_blank"
          >
            cosmiconfig
          </a>{" "}
          to load a configuration file for sortier or, if one is not found, run
          with the default settings.
        </p>
        <h2>API</h2>
        <p>Sortier also has an API you can run via code:</p>
        <CodeHighlighter
          source={`
import { format } from "@snowcoders/sortier";

format("./package.json", {
  isHelpMode: true,
  isTestRun: true,
});
`}
          language="js"
        />
      </div>
    );
  }
}
