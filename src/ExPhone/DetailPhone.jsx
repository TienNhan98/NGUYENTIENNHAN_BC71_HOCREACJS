import React, { Component } from "react";

export default class DetailPhone extends Component {
  render() {
    return (
      <h2>
        <pre>{JSON.stringify(this.props.detailData, null, 2)}</pre>
      </h2>
    );
  }
}
