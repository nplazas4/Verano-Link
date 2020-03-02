import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BussinessFlowContainer from "../components/BusinessFlowContainer";
import M from "materialize-css";

class Businessflow extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      list: {
        results: [
          {
            id: "1",
            name: "GET EPS",
            tool: "P6 EPPM",
            description: "- - - - -",
            lineColor: "card-color1"
          },
          {
            id: "2",
            name: "GET ACTIVITY",
            tool: "P6 EPPM",
            description: "- - - - -",
            lineColor: "card-color2"
          },
          {
            id: "3",
            name: "GET PROJECT",
            tool: "P6 EPPM",
            description: "- - - - -",
            lineColor: "card-color3"
          },
          {
            id: "4",
            name: "GET CBS",
            tool: "P6 EPPM",
            description: "- - - - -",
            lineColor: "card-color4"
          }
        ]
      }
    };
  }
  componentDidMount() {
    M.AutoInit();
    this.fetchBusiness();
  }
  fetchBusiness = async () => {
    this.setState({
      loading: true,
      error: null
    });
    try {
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters"
      );
      const data = await response.json();
      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };
  render() {
    return (
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
            {this.state.loading === true ? (
              <BussinessFlowContainer
                businessflows={this.state}
                skeleton="true"
              />
            ) : (
              <BussinessFlowContainer businessflows={this.state} />
            )}
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default Businessflow;
