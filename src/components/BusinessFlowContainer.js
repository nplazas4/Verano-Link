import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class BussinessFlowContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SkeletonTheme color="#d6d6d6" highlightColor="#ffff">
          {this.props.businessflows.list.results.map(businessflow => {
            return (
              <div key={businessflow.id} className="col l3 m6 s6 item-card">
                <div
                  className={
                    "card-module user-no-sel " + businessflow.lineColor
                  }
                >
                  <div className="cont-icon"></div>
                  <div className="cont-base-info">
                    <div className="title2">
                      {this.props.skeleton ? (
                        <Skeleton width={50 + "%"} />
                      ) : (
                        businessflow.name
                      )}
                    </div>
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
                      {this.props.skeleton ? (
                        <Skeleton width={35 + "%"} />
                      ) : (
                        "HERRAMIENTA"
                      )}
                    </div>
                    <div className="tc mb-3">
                      {this.props.skeleton ? (
                        <Skeleton width={35 + "%"} />
                      ) : (
                        businessflow.tool
                      )}
                    </div>
                    <hr></hr>
                    <div
                      className="tc mt-3 p8"
                      style={{
                        color: "rgba(0,0,0,0.6)",
                        letterSpacing: 1 + "pt"
                      }}
                    >
                      {this.props.skeleton ? (
                        <Skeleton width={35 + "%"} />
                      ) : (
                        "DESCRIPCIÓN"
                      )}
                    </div>
                    <div className="tc mb-3">
                      {this.props.skeleton ? (
                        <Skeleton width={35 + "%"} />
                      ) : (
                        businessflow.description
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </SkeletonTheme>
      </React.Fragment>
    );
  }
}

export default BussinessFlowContainer;
