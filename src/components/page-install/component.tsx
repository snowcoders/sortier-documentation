import React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class Install extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-page-install">
        <h1>Install</h1>
        <p>
          We recommend pinning an exact version of Sortier in your package.json
          so that all developers are running the exact same version in case
          there are unexpected differences between patch versions.
        </p>
        <p>
          With{" "}
          <CodeHighlighter isInline={true} language="bash" source={"npm"} />:
        </p>
        <CodeHighlighter
          language="bash"
          source={"npm install --save-dev --save-exact @snowcoders/sortier"}
        />
        <p>
          Or <CodeHighlighter isInline={true} language="bash" source={"yarn"} />
          :
        </p>
        <CodeHighlighter
          language="bash"
          source={"yarn add @snowcoders/sortier --dev --exact"}
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
            language="bash"
            source={"lint-staged"}
          />{" "}
          and{" "}
          <CodeHighlighter isInline={true} language="bash" source={"husky"} />.
        </p>
        <ol>
          <li>
            <p>
              Run{" "}
              <CodeHighlighter
                isInline={true}
                language="bash"
                source={"npm install --save-dev lint-staged husky"}
              />
            </p>
          </li>
          <li>
            <p>
              Create a{" "}
              <CodeHighlighter
                isInline={true}
                language="bash"
                source={".huskyrc.json"}
              />{" "}
              file with the contents
            </p>
            <CodeHighlighter
              language="ts"
              source={`
{
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
`}
            />
          </li>
          <li>
            <p>
              Create a{" "}
              <CodeHighlighter
                isInline={true}
                language="bash"
                source={".lintstagedrc.json"}
              />{" "}
              file with the contents
            </p>
            <CodeHighlighter
              language="ts"
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
            />
          </li>
        </ol>
      </div>
    );
  }
}
