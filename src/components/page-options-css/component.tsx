import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class OptionsCss extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-page-options-css">
        <h1>Css options</h1>
        <h2>parser (Default: undefined)</h2>
        <p>The default parser to use of which there are three options</p>
        <ul>
          <li>
            undefined - Sortier will determine the parser to use based on the
            file extension
          </li>
          <li>"less" - Force sortier to use the less parser</li>
          <li>"scss" - Force sortier to use the scss parser</li>
        </ul>
        <h4>Example json configuration</h4>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
{
  "css": {
    "parser": undefined
  }
}`}
          />
        </p>
        <h2>overrides (Default: undefined)</h2>
        <p>Overrides for sorting groups of css properties</p>
        <ul>
          <li>undefined - Sortier will sort alphabetically</li>
          <li>
            string[] - List of property names in the order they should be
            ordered. Use "*" to match anything that isn't in the list
          </li>
        </ul>
        <h4>Example json configuration</h4>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
{
  "css": {
    "sortDeclarations": {
      overrides: ["display", "*"]
    }
  }
}`}
          />
        </p>
      </div>
    );
  }
}
