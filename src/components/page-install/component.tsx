import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class Install extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-install">
        <h1>Install</h1>
        <p>
          We recommend pinning an exact version of Sortier in your package.json
          so that all developers are running the exact same version in case
          there are unexpected differences between patch versions.
        </p>
        <p>
          With{" "}
          <CodeHighlighter isInline={true} source={"npm"} language="bash" />:
        </p>
        <CodeHighlighter
          source={"npm install --save-dev --save-exact @snowcoders/sortier"}
          language="bash"
        />
        <p>
          Or <CodeHighlighter isInline={true} source={"yarn"} language="bash" />
          :
        </p>
        <CodeHighlighter
          source={"yarn add prettier --dev --exact"}
          language="bash"
        />
      </div>
    );
  }
}
