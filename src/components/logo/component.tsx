import React from "react";

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
  private static SPACE_BETWEEN_SEGMENTS: number = 4;

  constructor(props: LogoProps) {
    super(props);
    let beginningHalfLineLengths: Segment[][] = [
      [
        ...this.generateBackgroundColors(38, true),
        {
          className: "fore",
          length: 14,
        },
        ...this.generateBackgroundColors(38, false),
      ],
      [
        ...this.generateBackgroundColors(31, true),
        {
          className: "fore",
          length: 28,
        },
        ...this.generateBackgroundColors(31, false),
      ],
      [
        ...this.generateBackgroundColors(28, true),
        {
          className: "fore",
          length: 12,
        },
        ...this.generateBackgroundColors(14, null),
        {
          className: "fore",
          length: 8,
        },
        ...this.generateBackgroundColors(28, false),
      ],
      [
        ...this.generateBackgroundColors(26, true),
        {
          className: "fore",
          length: 10,
        },
        ...this.generateBackgroundColors(54, false),
      ],
      [
        ...this.generateBackgroundColors(26, true),
        {
          className: "fore",
          length: 10,
        },
        ...this.generateBackgroundColors(54, false),
      ],
      [
        ...this.generateBackgroundColors(28, true),
        {
          className: "fore",
          length: 11,
        },
        ...this.generateBackgroundColors(51, false),
      ],
      [
        ...this.generateBackgroundColors(32, true),
        {
          className: "fore",
          length: 15,
        },
        ...this.generateBackgroundColors(43, false),
      ],
    ];

    let middleLineLengths: Segment[][] = [
      [
        ...this.generateBackgroundColors(37, true),
        {
          className: "fore",
          length: 16,
        },
        ...this.generateBackgroundColors(37, false),
      ],
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
      ...endHalfLineLengths,
    ].map((value, index) => {
      return {
        index: index,
        segments: value,
      };
    });

    if (props.isAnimated) {
      lines.sort((a, b) => {
        let aFore = a.segments.find((segment) => {
          return segment.className.localeCompare("fore") === 0;
        }) || { length: 0 };
        let bFore = b.segments.find((segment) => {
          return segment.className.localeCompare("fore") === 0;
        }) || { length: 0 };
        return bFore.length - aFore.length;
      });
    }

    this.state = {
      isSorted: !props.isAnimated,
      lines: lines,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isSorted: true,
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

  private generateBackgroundColors(
    length: number,
    isStart: boolean | null
  ): Segment[] {
    let colors: Segment[] = [];
    let nextLength = this.getNextLength(length);
    let lastColor: undefined | SegmentClassNameOption = undefined;
    if (isStart != null) {
      colors.push({
        className: "clear",
        length: nextLength,
      });
      length = length - nextLength;
    }

    while (0 < length) {
      nextLength = this.getNextLength(length);
      lastColor = this.getNextBackColor(lastColor);

      colors.push({
        className: lastColor,
        length: nextLength,
      });

      length = length - nextLength;
    }

    if (!isStart) {
      colors.reverse();
    }
    return colors;
  }

  private getNextLength(length: number) {
    let generatedLength =
      Math.round(Math.random() * 8) + Logo.SPACE_BETWEEN_SEGMENTS * 2;
    return Math.min(length, generatedLength);
  }

  private getNextBackColor(
    lastColor?: SegmentClassNameOption
  ): SegmentClassNameOption {
    let number = 0;
    let color = lastColor;
    do {
      number = 3 * Math.random();
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
      isSorted: false,
    });
  };

  private mouseLeave = () => {
    this.setState({
      isSorted: true,
    });
  };

  private renderSegments(value: Line, unsortedIndex: number) {
    let { isSorted } = this.state;

    let start = 0;
    let path = null;
    let paths = value.segments.map((segment, index) => {
      let newStart = start + segment.length;
      path = null;
      // If the segment is long enough to render
      if (segment.length >= Logo.SPACE_BETWEEN_SEGMENTS) {
        path = (
          <path
            className={segment.className}
            d={`M${start + Logo.SPACE_BETWEEN_SEGMENTS} 0 l${
              segment.length - Logo.SPACE_BETWEEN_SEGMENTS
            } 0`}
            key={index}
          />
        );
      }
      start = newStart;
      return path;
    });

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
