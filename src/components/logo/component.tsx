import * as React from "react";

export interface LogoProps {
  isAnimated: boolean;
}

type SegmentClassNameOption = "back-1" | "back-2" | "back-3" | "clear" | "fore";

interface Segment {
  className: SegmentClassNameOption;
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
        ...this.generateBackgroundColors(39, true),
        {
          className: "fore",
          length: 13
        },
        ...this.generateBackgroundColors(39, false)
      ],
      [
        ...this.generateBackgroundColors(31, true),
        {
          className: "fore",
          length: 28
        },
        ...this.generateBackgroundColors(31, false)
      ],
      [
        ...this.generateBackgroundColors(28, true),
        {
          className: "fore",
          length: 12
        },
        ...this.generateBackgroundColors(19, null),
        {
          className: "fore",
          length: 8
        },
        ...this.generateBackgroundColors(28, false)
      ],
      [
        {
          className: "clear",
          length: 1
        },
        {
          className: "back-1",
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
          className: "back-1",
          length: 25
        },
        {
          className: "clear",
          length: 1
        }
      ],
      [
        {
          className: "back-1",
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
          className: "back-1",
          length: 25
        }
      ],
      [
        {
          className: "back-1",
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
          className: "back-1",
          length: 25
        }
      ],
      [
        {
          className: "back-1",
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
          className: "back-1",
          length: 25
        }
      ]
    ];

    let middleLineLengths: Segment[][] = [
      [
        {
          className: "back-1",
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
          className: "back-1",
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
        onMouseLeave={this.mouseLeave}
        onMouseEnter={this.mouseEnter}
        viewBox={`0 0 90 ${totalHeight}`}
      >
        {lines.map((value, index) => {
          return this.renderSegments(value, index);
        })}
      </svg>
    );
  }

  private generateBackgroundColors(
    length: number,
    isStart: boolean | null
  ): Segment[] {
    let colors: Segment[] = [];
    let nextLength = this.getNextLength(length);
    let lastColor: SegmentClassNameOption | undefined = undefined;
    if (isStart != null) {
      colors.push({
        className: "clear",
        length: nextLength
      });
      length = length - nextLength;
    }

    while (2 < length) {
      nextLength = this.getNextLength(length);
      lastColor = this.getNextBackColor(lastColor);

      colors.push({
        className: lastColor,
        length: nextLength
      });

      length = length - nextLength;
    }

    colors[colors.length - 1].length + length;

    console.log(JSON.stringify(colors));

    if (!isStart) {
      colors.reverse();
    }
    return colors;
  }

  private getNextLength(length: number) {
    return Math.round(Math.random() * 6) + 8;
  }

  private getNextBackColor(
    lastColor?: SegmentClassNameOption
  ): SegmentClassNameOption {
    let number = 0;
    let color = lastColor;
    do {
      number = Math.random() * 3;
      if (number < 1) {
        color = "back-1";
      } else if (number < 2) {
        color = "back-2";
      } else {
        color = "back-3";
      }
    } while (lastColor === color);
    return color || "back-1";
  }

  private mouseEnter = () => {
    this.setState({
      isSorted: false
    });
  };

  private mouseLeave = () => {
    this.setState({
      isSorted: true
    });
  };

  private renderSegments(value: Line, unsortedIndex: number) {
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
