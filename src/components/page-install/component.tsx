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
        <h2>Pre-commit hook</h2>
        <p>
          We went with a system similar to{" "}
          <a href="https://prettier.io/docs/en/precommit.html" target="_blank">
            Prettier
          </a>{" "}
          so hopefully you have already picked a solution and can keep going
          with it. If not, this repository uses{" "}
          <CodeHighlighter
            isInline={true}
            source={"lint-staged"}
            language="bash"
          />{" "}
          and{" "}
          <CodeHighlighter isInline={true} source={"husky"} language="bash" />.
        </p>
        <ol>
          <li>
            <p>
              Run{" "}
              <CodeHighlighter
                isInline={true}
                source={"npm install --save-dev lint-staged husky"}
                language="bash"
              />
            </p>
          </li>
          <li>
            <p>
              Create a{" "}
              <CodeHighlighter
                isInline={true}
                source={".huskyrc.json"}
                language="bash"
              />{" "}
              file with the contents
            </p>
            <CodeHighlighter
              source={`
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
`}
              language="ts"
            />
          </li>
          <li>
            <p>
              Create a{" "}
              <CodeHighlighter
                isInline={true}
                source={".lintstagedrc.json"}
                language="bash"
              />{" "}
              file with the contents
            </p>
            <CodeHighlighter
              source={`
{
  "linters": {
    "**/*.{ts,tsx,js,jsx,json,html}": [
      "prettier --write", // Remove if you don't have prettier installed
      "sortier",
      "git add"
    ]
  },
  "ignore": ["**/package-lock.json"]
}
`}
              language="ts"
            />
          </li>
        </ol>
      </div>
    );
  }
}
