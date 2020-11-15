import React from "react";

import { HashRouter, Link, Route, Switch } from "react-router-dom";

import { About } from "../page-about";
import { Configuration } from "../page-configuration";
import { Home } from "../page-home";
import { Ignore } from "../page-ignore";
import { Install } from "../page-install";
import { OptionsCss } from "../page-options-css";
import { OptionsGeneral } from "../page-options-general";
import { OptionsHtml } from "../page-options-html";
import { OptionsJs } from "../page-options-js";
import { OptionsJson } from "../page-options-json";
import { Philosophy } from "../page-philosophy";
import { Playground } from "../page-playground";
import { Running } from "../page-running";

export interface IAppProps {}

export interface IAppState {}

type LinkNode = LinkConfig | LinkFolder;

interface LinkFolder {
  children: LinkNode[];
  name: string;
}

interface LinkConfig {
  component: React.ComponentType<any> | React.ComponentType<any>;
  name: string;
  url: string;
}

export class App extends React.Component<IAppProps, IAppState> {
  render() {
    let links: LinkNode[] = [
      {
        component: Home,
        name: "Home",
        url: "/",
      },
      {
        children: [
          {
            component: About,
            name: "About",
            url: "/about",
          },
          {
            component: Philosophy,
            name: "Philosophy",
            url: "/philosophy",
          },
        ],
        name: "Background",
      },
      {
        children: [
          {
            component: Install,
            name: "Install",
            url: "/install",
          },
          {
            component: Running,
            name: "Running",
            url: "/running",
          },
          {
            component: Configuration,
            name: "Configuration",
            url: "/configuration",
          },
          {
            component: Ignore,
            name: "Ignoring nodes",
            url: "/ignore",
          },
        ],
        name: "Usage",
      },
      {
        children: [
          {
            component: OptionsGeneral,
            name: "General",
            url: "/options-general",
          },
          {
            component: OptionsCss,
            name: "Css",
            url: "/options-css",
          },
          {
            component: OptionsHtml,
            name: "Html",
            url: "/options-html",
          },
          {
            component: OptionsJs,
            name: "Javascript",
            url: "/options-js",
          },
          {
            component: OptionsJson,
            name: "Json",
            url: "/options-json",
          },
        ],
        name: "Options",
      },
    ];

    return (
      <HashRouter>
        <div className="sci-sortier-documentation-app">
          <div className="header">
            <div className="app-title">
              <Link to="/">Sortier</Link>
            </div>
            <div className="links">
              {/* TODO uncomment when playground is enabled */}
              {/*<Link to="/play">Play</Link>*/}
              <a href="https://github.com/snowcoders/sortier" target="_blank">
                <svg
                  aria-hidden="true"
                  height="32"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 8 0 C 3.58 0 0 3.58 0 8 c 0 3.54 2.29 6.53 5.47 7.59 c 0.4 0.07 0.55 -0.17 0.55 -0.38 c 0 -0.19 -0.01 -0.82 -0.01 -1.49 c -2.01 0.37 -2.53 -0.49 -2.69 -0.94 c -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 c -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 c 0.63 -0.01 1.08 0.58 1.23 0.82 c 0.72 1.21 1.87 0.87 2.33 0.66 c 0.07 -0.52 0.28 -0.87 0.51 -1.07 c -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 c 0 -0.87 0.31 -1.59 0.82 -2.15 c -0.08 -0.2 -0.36 -1.02 0.08 -2.12 c 0 0 0.67 -0.21 2.2 0.82 c 0.64 -0.18 1.32 -0.27 2 -0.27 c 0.68 0 1.36 0.09 2 0.27 c 1.53 -1.04 2.2 -0.82 2.2 -0.82 c 0.44 1.1 0.16 1.92 0.08 2.12 c 0.51 0.56 0.82 1.27 0.82 2.15 c 0 3.07 -1.87 3.75 -3.65 3.95 c 0.29 0.25 0.54 0.73 0.54 1.48 c 0 1.07 -0.01 1.93 -0.01 2.2 c 0 0.21 0.15 0.46 0.55 0.38 A 8.013 8.013 0 0 0 16 8 c 0 -4.42 -3.58 -8 -8 -8 Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="page">
            <Switch>
              <Route path="/play" render={() => null} />
              <Route
                path="*"
                render={() => (
                  <div className="navigation">{this.renderNavTree(links)}</div>
                )}
              />
            </Switch>
            <div className="content">
              <Switch>
                {this.renderRouteSwitch(links)}
                <Route component={Playground} path="/play" />
                <Route component={Home} path="*" />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  private renderNavTree(nodes: LinkNode[]) {
    return (
      <ul>
        {nodes.map((value) => {
          let link = value as LinkConfig;
          let folder = value as LinkFolder;
          if (link.component != null) {
            return (
              <li key={link.name}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          } else if (folder.children != null) {
            return (
              <li key={folder.name}>
                <span>{folder.name}</span>
                {this.renderNavTree(folder.children)}
              </li>
            );
          } else {
            console.error("Invalid link definition");
          }

          return null;
        })}
      </ul>
    );
  }

  private renderRouteSwitch(nodes: LinkNode[]) {
    let routes: React.ReactNode[] = [];

    for (let value of nodes) {
      let link = value as LinkConfig;
      let folder = value as LinkFolder;
      if (link.component) {
        routes.push(
          <Route
            component={link.component}
            exact
            key={link.name}
            path={link.url}
          />
        );
      } else if (folder.children) {
        routes.push(...this.renderRouteSwitch(folder.children));
      } else {
        console.error("Invalid link definition");
      }
    }

    return routes;
  }
}
