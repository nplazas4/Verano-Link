import React, { Component } from "react";

class BussinessFlowContainer extends Component {
  render() {
    return (
      <div className="col l3 m6 s6 item-card">
        <div className={"card-module user-no-sel " + this.props.color}>
          <div className="cont-icon"></div>
          <div className="cont-base-info">
            <div className="title2">{this.props.name}</div>
            <div className="relative">
              <div className="divisor-line"></div>
            </div>
            <div
              className="tc mt-3 p8"
              style={{
                color: "rgba(0,0,0,0.6)",
                letterSpacing: 1 + "pt"
              }}
            >
              HERRAMIENTA
            </div>
            <div className="tc mb-3">{this.props.tool}</div>
            <hr></hr>
            <div
              className="tc mt-3 p8"
              style={{
                color: "rgba(0,0,0,0.6)",
                letterSpacing: 1 + "pt"
              }}
            >
              DESCRIPCIÓN
            </div>
            <div className="tc mb-3">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BussinessFlowContainer;
