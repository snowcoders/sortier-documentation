import * as React from "react";
import { CodeHighlighter } from "../code-highlighter";

export class Philosophy extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-page-philosophy">
        <h1>Philosophy</h1>
        <h2>Empty lines</h2>
        <p>
          Empty lines generally signify separations of logical code blocks.
          Maybe it's that you want to put all your variables at the top of the
          file and separate from the logic. Maybe it's that you have 4 for loops
          and separate them by spaces. Whatever the reason, empty lines are an
          important separation tool.
        </p>
        <p>
          It's this particular reason that all of our default settings will not
          sort across an empty blank line. For example without a blank line:
        </p>
        <CodeHighlighter
          language="js"
          source={`
type Props = {
  source: "NYC",
  airplane: "Boeing",
  destination: "Seattle",
  passengerCount: 50,
  cargo: false,
}
`}
        />
        <p>Is rewritten to:</p>
        <CodeHighlighter
          language="js"
          source={`
type Props = {
  airplane: "Boeing",
  cargo: false,
  destination: "Seattle",
  passengerCount: 50,
  source: "NYC",
}
`}
        />
        <p>
          Now instead, let's put a blank line between the details about the type
          of plane along with it's path and the contents of the plane:
        </p>
        <CodeHighlighter
          language="js"
          source={`
type Props = {
  source: "NYC",
  airplane: "Boeing",
  destination: "Seattle",

  passengerCount: 50,
  cargo: false,
}
`}
        />
        <p>Is rewritten to:</p>
        <CodeHighlighter
          language="js"
          source={`
type Props = {
  airplane: "Boeing",
  destination: "Seattle",
  source: "NYC",

  cargo: false,
  passengerCount: 50,
}
`}
        />
        <h2>Comments</h2>
        <p>
          Making sure we move comments and documentation for properties is
          extremely important as we don't want documentation to be incorrect.
          Using our existing example, let's add some comments for each property
        </p>
        <CodeHighlighter
          language="js"
          source={`type Props = {
  /*
   * Where the plane came from
   */
  source: "NYC",
  // The airplane type
  airplane: "Boeing",
  /**
   * Where the plane is going to
   */
  destination: "Seattle",

  // The number of passengers on the plane
  passengerCount: 50,
  // If the plane has any cargo
  cargo: false,
}`}
        />
        <p>
          When the code is rewritten, the comments will move with the property
          they reference:
        </p>
        <CodeHighlighter
          language="js"
          source={`type Props = {
  // The airplane type
  airplane: "Boeing",
  /***
   * Where the plane is going to
   */
  destination: "Seattle",
  /*
   * Where the plane came from
   */
  source: "NYC",

  // If the plane has any cargo
  cargo: false,
  // The number of passengers on the plane
  passengerCount: 50,
}`}
        />
        <p>
          Let's say instead of having comments per property, you commented the
          groups instead:
        </p>
        <CodeHighlighter
          language="js"
          source={`type Props = {
  // Flight details
  source: "NYC",
  airplane: "Boeing",
  destination: "Seattle",

  // Plane content information
  passengerCount: 50,
  cargo: false,
}`}
        />
        <p>
          Sortier is smart enough to notice this and will leave the comment for
          the overall group:
        </p>
        <CodeHighlighter
          language="js"
          source={`type Props = {
  // Flight details
  airplane: "Boeing",
  destination: "Seattle",
  source: "NYC",

  // Plane content information
  cargo: false,
  passengerCount: 50,
}`}
        />
      </div>
    );
  }
}
