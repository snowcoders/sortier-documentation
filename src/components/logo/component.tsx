import * as React from "react";

export interface LogoProps {
  isAnimated: boolean;
}

interface Segment {
  className: "back" | "clear" | "fore";
  length: number;
}

interface Line {
  index: number;
  segments: Segment[];
}

export interface LogoState {
  isSorted: boolean;
  lines: Line[];
}

export class Logo extends React.Component<LogoProps, LogoState> {
  private static HEIGHT_PER_LINE: number = 3.5;

  constructor(props: LogoProps) {
    super(props);

    let beginningHalfLineLengths: Segment[][] = [
      [
        {
          className: "clear",
          length: 14
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "fore",
          length: 13
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 14
        }
      ],
      [
        {
          className: "clear",
          length: 6
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "fore",
          length: 28
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 6
        }
      ],
      [
        {
          className: "clear",
          length: 3
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "fore",
          length: 12
        },
        {
          className: "clear",
          length: 13
        },
        {
          className: "fore",
          length: 8
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 3
        }
      ],
      [
        {
          className: "clear",
          length: 1
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "fore",
          length: 10
        },
        {
          className: "clear",
          length: 27
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 1
        }
      ],
      [
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 1
        },
        {
          className: "fore",
          length: 10
        },
        {
          className: "clear",
          length: 27
        },
        {
          className: "back",
          length: 25
        }
      ],
      [
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 3
        },
        {
          className: "fore",
          length: 11
        },
        {
          className: "clear",
          length: 24
        },
        {
          className: "back",
          length: 25
        }
      ],
      [
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 7
        },
        {
          className: "fore",
          length: 15
        },
        {
          className: "clear",
          length: 16
        },
        {
          className: "back",
          length: 25
        }
      ]
    ];

    let middleLineLengths: Segment[][] = [
      [
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 11
        },
        {
          className: "fore",
          length: 16
        },
        {
          className: "clear",
          length: 11
        },
        {
          className: "back",
          length: 25
        }
      ]
    ];
    let endHalfLineLengths: Segment[][] = [];
    for (let startLineLength of beginningHalfLineLengths) {
      let endLineLength = startLineLength.slice();
      endLineLength.reverse();
      endHalfLineLengths.unshift(endLineLength);
    }

    let lines = [
      ...beginningHalfLineLengths,
      ...middleLineLengths,
      ...endHalfLineLengths
    ].map((value, index) => {
      return {
        index: index,
        segments: value
      };
    });

    if (props.isAnimated) {
      lines.sort((a, b) => {
        let aFore = a.segments.find(segment => {
          return segment.className.localeCompare("fore") === 0;
        }) || { length: 0 };
        let bFore = b.segments.find(segment => {
          return segment.className.localeCompare("fore") === 0;
        }) || { length: 0 };
        return bFore.length - aFore.length;
      });
    }

    this.state = {
      isSorted: !props.isAnimated,
      lines: lines
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isSorted: true
      });
    }, 3000);
  }

  render() {
    let { lines } = this.state;
    let totalHeight = Logo.HEIGHT_PER_LINE * lines.length - 1;

    return (
      <svg
        className="sci-sortier-documentation-logo"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        viewBox={`0 0 90 ${totalHeight}`}
      >
        {lines.map((value, index) => {
          return this.renderSegments(value, index);
        })}
      </svg>
    );
  }

  mouseEnter = () => {
    this.setState({
      isSorted: false
    });
  };

  mouseLeave = () => {
    this.setState({
      isSorted: true
    });
  };

  renderSegments(value: Line, unsortedIndex: number) {
    let { isSorted } = this.state;

    let start = 0;
    let paths = value.segments.map((segment, index) => {
      if (segment.length == 0) {
        return null;
      }
      let newStart = start + segment.length;
      let path = (
        <path
          className={segment.className}
          d={`M${start + 4} 0 l${segment.length - 4} 0`}
          key={index}
        />
      );
      start = newStart;
      return path;
    });

    if (start !== 130) {
      paths.push(
        <path
          className={"clear"}
          d={`M${start + 4} 0 l${126} 0`}
          key={value.segments.length}
        />
      );
    }

    let currentIndex = unsortedIndex;
    if (isSorted) {
      currentIndex = value.index;
    }

    let y = currentIndex * Logo.HEIGHT_PER_LINE + 1;
    let transform = `translate(0, ${y}px)`;

    return (
      <g
        data-number={value.index}
        key={value.index}
        style={{ transform: transform }}
      >
        {paths}
      </g>
    );
  }
}
