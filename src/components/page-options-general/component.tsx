import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class OptionsGeneral extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-page-options-general">
        <h1>General options</h1>
        <h2>logLevel (Default: "normal")</h2>
        <p>
          Determines the amount of logging that is outputted to the console.
          There are three options:
        </p>
        <ul>
          <li>"quiet" - Log nothing to the console</li>
          <li>
            "normal" - General information (e.g. if sortier was unable to parse
            a file)
          </li>
          <li>
            "diagnostic" - Log detailed information regarding scenarios sortier
            was unable to handle
          </li>
        </ul>
        <h4>Example json configuration</h4>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
{
  "logLevel": "diagnostic" 
}`}
          />
        </p>
        <h2>isTestMode (Default: false)</h2>
        <p>
          When false, sortier will rewrite existing files in place. When true,
          the files will not be rewritten but sortier will run.
        </p>
        <h4>Example json configuration</h4>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
{
  "isTestMode": false 
}`}
          />
        </p>
      </div>
    );
  }
}
