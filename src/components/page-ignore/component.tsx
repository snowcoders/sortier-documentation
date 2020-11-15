import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class Ignore extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-page-ignore">
        <h1>Ignoring Nodes</h1>
        <p>Note: This feature is in beta testing, use with caution</p>
        <p>
          As of 3.2.0 we've added the ability to have sortier skip over and not
          search certain lines of code. There are two options provided as
          described below.
        </p>
        <h2>sortier-ignore-next-line</h2>
        <p>
          By adding a comment that starts with the text{" "}
          <strong>sortier-ignore-next-line</strong> sortier will ignore all
          nodes of which start and end on the next line. Nodes that start on the
          next line but end on a different line will still be sorted.
        </p>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
/* sortier-ignore-next-line - All on one line, doesn't sort */
const secondsInWeek = 60 * 60 * 24 * 7;

// sortier-ignore-next-line - The expression on the right of the equals operator
// starts on the next line but ends on a different line so it will be sorted
const secondsInWeek = 7 
  * 24 
  * 60 
  * 60; `}
          />
        </p>
        <h2>sortier-ignore-nodes</h2>
        <p>
          By adding a comment that starts with the text{" "}
          <strong>sortier-ignore-nodes</strong> sortier will ignore the entire
          node tree of any nodes which start on the next line.
        </p>
        <p>
          <CodeHighlighter
            language={"js"}
            source={`
// sortier-ignore-nodes - Prevents sorting the switch statement along with all descendant nodes (e.g. see "a3, a1")
switch ("a") {
      case "c":
      case "d":
            // The ignore statement stops sorting for the whole tree, not just the node above it
            let {a3, a1} = d;
            console.log("c");
            break;
      case "b":
      case "a":
            console.log("a");
            break;
      default:
            break;
}`}
          />
        </p>
      </div>
    );
  }
}
