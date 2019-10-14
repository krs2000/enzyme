import React, { Component } from "react";

export default class HeadLine extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div data-test="HeadLineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}
