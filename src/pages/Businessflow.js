import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BussinessFlowContainer from "../components/BusinessFlowContainer";

class Businessflow extends Component {
  render() {
    const flowList = [
      {
        name: "GET EPS",
        tool: "P6 EPPM",
        description: "- - - - -",
        lineColor: "card-color1"
      },
      {
        name: "GET ACTIVITY",
        tool: "P6 EPPM",
        description: "- - - - -",
        lineColor: "card-color2"
      },
      {
        name: "GET PROJECT",
        tool: "P6 EPPM",
        description: "- - - - -",
        lineColor: "card-color3"
      },
      {
        name: "GET CBS",
        tool: "P6 EPPM",
        description: "- - - - -",
        lineColor: "card-color4"
      }
    ];
    const flowLoop = flowList.map((businessflow, index) => {
      return (
        <BussinessFlowContainer
          name={businessflow.name}
          tool={businessflow.tool}
          description={businessflow.description}
          color={businessflow.lineColor}
        />
      );
    });
    return (
      <div>
        <section className="col l10 m12 s12 offset-l2 relative">
          <Header title="Flujo de negocio" urlContext="flujos-negocio" />
          {/* contenedor */}
          <div className="container-page">
            <div className="row">
              <div className="col l12 m12 s12">
                <div className="row">
                  <div className="col l9">Lista de flujos de Negocio</div>
                </div>
              </div>
              {/* Contenedor de flujos de negocio */}
              {flowLoop}
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Businessflow;
