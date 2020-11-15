import React from "react";

export class Configuration extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-page-configuration">
        <h1>Configuration</h1>
        <p>
          <span>Sortier uses </span>
          <a
            href="https://github.com/davidtheclark/cosmiconfig"
            target="_blank"
          >
            cosmiconfig
          </a>
          <span>
            {" "}
            for configuration file support. Cosmiconfig supports multiple
            different extension types we highly recommend you look at
            cosmiconfig's documentation and determine which option is the best
            for yourself. For the rest of the documentation we will be using a
            json format.
          </span>
        </p>
        <p>
          The configuration file will be resolved starting from the location of
          the file being formatted, and searching up the file tree until a
          config file is (or isn't) found.
        </p>
      </div>
    );
  }
}
