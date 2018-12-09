import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";
/*

  // Configuration for javascript and javascript like languages
  js: {
    // Default undefined. The parser to use. If undefined, sortier will determine the parser to use based on the file extension
    parser?: "flow" | "typescript";

    // Default "source". The order you wish to sort import statements. Source is the path the import comes from. First specifier is the first item imported.
    sortImportDeclarations?: "first-specifier" | "source";

    // Default ["undefined", "null", "*", "object", "function"]. The order to sort object types when encountered.
    sortTypeAnnotations?: ("null" | "undefined" | "*" | "function" | "object")[];
  }
*/
export class OptionsJs extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-options-js">
        <h1>Javascript options</h1>
        <h2>parser (Default: undefined)</h2>
        <p>The default parser to use of which there are three options</p>
        <ul>
          <li>
            undefined - Sortier will determine the parser to use based on the
            file extension
          </li>
          <li>"flow" - Force sortier to always use the flow parser</li>
          <li>
            "typescript" - Force sortier to always use the typescript parser
          </li>
        </ul>
        <h4>Example json configuration</h4>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
{
  "js": {
    "parser": undefined
  }
}`}
          />
        </p>
        <h2>sortImportDeclarations (Default: "source")</h2>
        <p>The order to sort import declarations</p>
        <ul>
          <li>
            undefined - Sortier will determine the parser to use based on the
            file extension
          </li>
          <li>"source" - Uses the import path to order the imports</li>
          <li>
            "first-specifier" - Uses the first imported specifier to order the
            imports
          </li>
        </ul>
        <h4>Example json configuration</h4>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
{
  "js": {
    "sortImportDeclarations": "source"
  }
}`}
          />
        </p>
        <h2>
          sortTypeAnnotations (Default: ["undefined", "null", "*", "function"])
        </h2>
        <p>
          The order of properties within types and objects. This affects an
          array of types such as unions, binary expressions, objects and more.
        </p>
        <ul>
          <li>"undefined" - Matches the actual value of undefined</li>
          <li>"null" - Matches the actual value of null</li>
          <li>"function" - Matches all function types (arrow and method)</li>
          <li>"object" - Matches all inline object definitions</li>
          <li>
            "*" - Matches anything else that is not defined in the array. If not
            supplied, this value will be appended to the end of the arary
          </li>
        </ul>
        <h4>Union example</h4>
        <p>
          A simple example of how this works with union types is as follows:
        </p>
        <CodeHighlighter
          language={"ts"}
          source={`
type PageOption = "Home" | null | undefined | "Options"`}
        />
        <p>Is rewritten to:</p>
        <CodeHighlighter
          language={"ts"}
          source={`
type PageOption = undefined | null | "Home" | "Options"`}
        />
        <h4>Object and type example</h4>
        <p>As for objects and types:</p>
        <CodeHighlighter
          language={"ts"}
          source={`
interface CustomReactProps {
  preventUpdates?: boolean;
  onNameChange: (newName: string) => void;
  onDescriptionChange(newDescription: string): void;
  name?: string;
  description?: string | null;
}"`}
        />
        <p>Is rewritten to:</p>
        <CodeHighlighter
          language={"ts"}
          source={`
interface CustomReactProps {
  description?: null | string;
  name?: string;
  preventUpdates?: boolean;
  onDescriptionChange(newDescription: string): void;
  onNameChange: (newName: string) => void;
}`}
        />
        <h4>Example json configuration</h4>
        <CodeHighlighter
          language={"js"}
          source={`
{
  "js": {
    "sortTypeAnnotations": ["undefined", "null", "*", "object", "function"]
  }
}`}
        />
        <h2>sortClassContents (Default: undefined)</h2>
        <p>
          By default this feature is turned off because when beta testing we
          found that everyone has their own customizations of which they wish to
          apply. Since this reorganization can be quite jarring depending on
          your code style, we decided to turn it off for now.
        </p>
        <h4>Example json configuration</h4>
        <CodeHighlighter
          language={"js"}
          source={`
{
  "js": {
    "isAscending": true,
    "order": "usage",
    "overrides": [
      // Overrides for react components
      "getDerivedStateFromProps", 
      "componentWillMount", 
      "componentDidMount", 
      "shouldComponentUpdate", 
      "componentWillUnmount", 
      "componentDidUnmount", 
      "render"]
  }
}`}
        />
      </div>
    );
  }
}
