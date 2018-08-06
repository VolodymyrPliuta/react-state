import React, { Component } from 'react';
import Title from './Title';
import PropTypes from 'prop-types';

class Header extends Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
