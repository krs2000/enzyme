import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListItem extends Component {
  render() {
    const { title, desc } = this.props;

    if (!title) {
      return null;
    }
    return (
      <div data-test="listItemComponent">
        <h2 data-test="componetTitle">{title}</h2>
        <div data-test="componetDesc">{desc}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
