import * as React from "react";
import { Logo } from "../logo";

export class Home extends React.Component {
  render() {
    return (
      <div className="sci-sortier-documentation-home">
        <div className="logo">
          <Logo isAnimated={true} />
          <p className="tag-line">Keep your code sorted</p>
        </div>
        <div className="introduction">
          <p>
            Sortier is a code sorter that reorders code so you don't have to.
            The idea here is if everyone is checking in code that is organized
            in a similar way, then there will be less conflicts, everyone can
            expect things to be in the same place in every file and there is
            less arguments regarding code styling.
          </p>
          <p>
            Why not use sort packages from eslint? Searching `eslint sort`,
            `eslint order`, `tslint sort` or `tslint order` you'll find 30+
            packages dealing with sorting or ordering. To be able to get sorting
            to work over your whole program without these rules interfering with
            one another would require a lot of trial and error. Instead, we
            reprint the whole file all at once, with as many sort features as we
            can think of. It's not only faster but much less of a headache and
            setup for you!
          </p>
        </div>
        <div className="reasons">
          <h2>Why use sortier?</h2>
          <ul>
            <li>
              Reduce merge conflicts - Two people adding the same import or
              properties? No longer an issue!
            </li>
            <li>
              Read code faster - Since everything is either grouped or sorted
              alphabetically, scanning code is faster than ever
            </li>
            <li>
              Less conversations about ordering - It's automated, conversation
              done!
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
