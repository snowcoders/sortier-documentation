import * as React from "react";

interface PlaygroundProps {}

interface PlaygroundState {
  original: string;
  rewritten: string;
}

export class Playground extends React.Component<
  PlaygroundProps,
  PlaygroundState
> {
  constructor(props: PlaygroundProps) {
    super(props);

    this.state = {
      original: "",
      rewritten: ""
    };
  }
  render() {
    let { original, rewritten } = this.state;

    return (
      <div className="sci-sortier-documentation-page-playground">
        <div className="actions">
          <button onClick={this.runSortier}>Run</button>
        </div>
        <div className="code">
          <textarea
            className="original"
            onChange={this.onOriginalChange}
            value={original}
          />
          <div className="rewritten">{rewritten}</div>
        </div>
      </div>
    );
  }

  onOriginalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      original: event.currentTarget.value
    });
  };

  runSortier = () => {
    let { original } = this.state;
    this.setState({
      rewritten: original
    });
  };
}
