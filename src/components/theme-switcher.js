/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { PureComponent } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import "../components/theme-switcher.css"

export default class ThemeSwitcher extends PureComponent {

  constructor(props) {
    super(props);
    
    this.state = {
      checked: false,
    };
  }

  handleClick = (e) => {
    const { checked, toggleTheme } = this.state
    const newState = !checked;

    this.setState({
      checked: newState,
    })

    toggleTheme(newState ? 'dark' : 'light')
  }

  render = () => {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {

          this.setState({
            checked: theme === 'dark',
            toggleTheme: toggleTheme,
          })

          const classNames =
          'theme-switcher-toggler' +
          (this.state.checked ? ' theme-switcher-toggler--checked' : '');

          return (
            <div 
              className={classNames}
              onClick={this.handleClick}
            >
                <div className="theme-switcher-track"></div>
                <div className="theme-switcher-thumb"></div>
                
                <input
                className="theme-switcher-input"
                type="checkbox"
                checked={theme === 'dark'}
                aria-label="Switch between Dark and Light mode"
                />
            </div>
          )
        }}
      </ThemeToggler>
    )
  }
}