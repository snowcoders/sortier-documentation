import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class About extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-about">
        <h1>About</h1>
        <h2>What is Sortier?</h2>
        <p>Sortier is a code sorting tool with support for:</p>
        <ul>
          <li>Javascript ES6+</li>
          <li>JSX</li>
          <li>Typescript</li>
          <li>Flow</li>
          <li>HTML</li>
          <li>JSON</li>
          <li>More being added!</li>
        </ul>
        <p>
          It reads the source code and reorders the contents and ensures that
          all source code has the consistent ordering.
        </p>
        <h2>Example</h2>
        <p>Take the following tsconfig file from our own repository:</p>
        <CodeHighlighter
          language="js"
          source={`let tsconfig = {
  "compilerOptions": {
      "outDir": "./dist/",
      "sourceMap": true,
      "module": "es6",
      "target": "es2015",
      "moduleResolution": "node",
      "jsx": "react",
      "noImplicitReturns": true,
      "noImplicitThis": true,
      "noImplicitAny": true,
      "experimentalDecorators": true,
      "noUnusedLocals": true,
      "forceConsistentCasingInFileNames": true,
      "strictNullChecks": true,
      "preserveConstEnums": true,
  },
  "include": [
      "./src/**/*.ts",
      "./src/**/*.tsx"
  ],
  "exclude": [
      "./src/**/*.test.ts",
      "./src/**/*.test.tsx"
  ]
}`}
        />
        <p>After running Sortier, it will be rewritten like this:</p>
        <CodeHighlighter
          language="js"
          source={`let tsconfig = {
  "compilerOptions": {
      "experimentalDecorators": true,
      "forceConsistentCasingInFileNames": true,
      "jsx": "react",
      "module": "es6",
      "moduleResolution": "node",
      "noImplicitAny": true,
      "noImplicitReturns": true,
      "noImplicitThis": true,
      "noUnusedLocals": true,
      "outDir": "./dist/",
      "preserveConstEnums": true,
      "sourceMap": true,
      "strictNullChecks": true,
      "target": "es2015",
  },
  "exclude": [
      "./src/**/*.test.ts",
      "./src/**/*.test.tsx"
  ],
  "include": [
      "./src/**/*.ts",
      "./src/**/*.tsx"
  ]
}`}
        />
        <h2>So how is this useful?</h2>
        <p>
          Well if two developers add the same property you will often get a
          merge conflict or worse no conflict at all! Since sortier sorts and
          orders the properties, it makes it easier for git to find merge issues
          along with visually to find duplicates when debugging issues.
        </p>
        <p>
          Further, because the values are now sorted, it's faster for developers
          to read and get to the piece of information they intended to find
        </p>
        <h2>So what exactly gets sorted?</h2>
        <p>
          This varies language to language and as more features get added on,
          I'm sure more things will be sorted over time. Some examples of what
          will be sorted are:
        </p>
        <ul>
          <li>
            <span>HTML</span>
            <ul>
              <li>Attributes</li>
            </ul>
          </li>
          <li>
            <span>Javascript/Flow/Typescript</span>
            <ul>
              <li>Properties within interfaces</li>
              <li>Properties within objects</li>
              <li>Properties within types</li>
              <li>Import statements and specifiers</li>
              <li>Export statements and specifiers</li>
              <li>Case statements within a switch</li>
              <li>Union definitions</li>
              <li>Some binary expressions</li>
            </ul>
          </li>
          <li>
            <span>JSX</span>
            <ul>
              <li>Properties within an element</li>
            </ul>
          </li>
          <li>
            <span>JSON files</span>
            <ul>
              <li>Properties</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
