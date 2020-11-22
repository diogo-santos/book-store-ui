import React, { Component } from "react";
import { withTranslation } from 'react-i18next';

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light mb-2">
        <span className="navbar-brand mb-0 h1">{t(this.props.title)}</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default withTranslation()(Header);