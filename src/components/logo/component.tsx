import * as React from "react";

export interface LogoProps {
  isAnimated: boolean;
}

interface Segment {
  className: "clear" | "back" | "fore";
  length: number;
}

interface Line {
  index: number;
  segments: Segment[];
}

export interface LogoState {
  lines: Line[];
}

export class Logo extends React.Component<LogoProps, LogoState> {
  constructor(props: LogoProps) {
    super(props);

    let lineLengths: Segment[][] = [
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
          length: 25
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
          length: 1
        },
        {
          className: "fore",
          length: 10
        },
        {
          className: "clear",
          length: 25
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
          length: 22
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
          length: 19
        },
        {
          className: "clear",
          length: 10
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
          length: 13
        },
        {
          className: "fore",
          length: 19
        },
        {
          className: "clear",
          length: 4
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
          length: 22
        },
        {
          className: "fore",
          length: 14
        },
        {
          className: "clear",
          length: 0
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
          length: 27
        },
        {
          className: "fore",
          length: 11
        },
        {
          className: "clear",
          length: 0
        },
        {
          className: "back",
          length: 23
        }
      ],
      [
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 29
        },
        {
          className: "fore",
          length: 11
        },
        {
          className: "clear",
          length: 0
        },
        {
          className: "back",
          length: 21
        }
      ],
      [
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 29
        },
        {
          className: "fore",
          length: 11
        },
        {
          className: "clear",
          length: 0
        },
        {
          className: "back",
          length: 21
        }
      ],
      [
        {
          className: "clear",
          length: 1
        },
        {
          className: "back",
          length: 24
        },
        {
          className: "clear",
          length: 0
        },
        {
          className: "fore",
          length: 6
        },
        {
          className: "clear",
          length: 21
        },
        {
          className: "fore",
          length: 10
        },
        {
          className: "back",
          length: 24
        },
        {
          className: "clear",
          length: 1
        }
      ],
      [
        {
          className: "clear",
          length: 4
        },
        {
          className: "back",
          length: 21
        },
        {
          className: "clear",
          length: 0
        },
        {
          className: "fore",
          length: 34
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 4
        }
      ],
      [
        {
          className: "clear",
          length: 9
        },
        {
          className: "back",
          length: 21
        },
        {
          className: "clear",
          length: 0
        },
        {
          className: "fore",
          length: 25
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 9
        }
      ],
      [
        {
          className: "clear",
          length: 11
        },
        {
          className: "back",
          length: 25
        },
        {
          className: "clear",
          length: 0
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
      ]
    ];

    let lines = lineLengths.map((value, index) => {
      return {
        index: index,
        segments: value
      };
    });

    // lines.sort((a, b) => {
    //   let aFore = a.segments.find(segment => {
    //     return segment.className.localeCompare("fore") === 0;
    //   }) || { length: 0 };
    //   let bFore = b.segments.find(segment => {
    //     return segment.className.localeCompare("fore") === 0;
    //   }) || { length: 0 };

    //   return bFore.length - aFore.length;
    // });

    this.state = {
      lines: lines
    };
  }

  render() {
    let { lines } = this.state;

    return (
      <svg className="sci-sortier-documentation-logo" viewBox="0 0 88 65">
        {lines.map((value, index) => {
          let y = index * 4 + 1;
          return this.renderSegments(value, y);
        })}
      </svg>
    );
  }

  renderSegments(value: Line, y: number) {
    let start = 0;
    let paths = value.segments.map((segment, index) => {
      if (segment.length == 0) {
        return null;
      }
      let newStart = start + segment.length;
      let path = (
        <path
          key={index}
          className={segment.className}
          d={`M${start + 4} ${y} l${segment.length - 4} 0`}
        />
      );
      start = newStart;
      return path;
    });

    if (start !== 130) {
      paths.push(
        <path
          key={value.segments.length}
          className={"clear"}
          d={`M${start + 4} ${y} l${126} 0`}
        />
      );
    }

    return <g key={value.index}>{paths}</g>;
  }
}
