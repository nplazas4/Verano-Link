import React, { Component } from "react";
import logoP6 from "../images/oracleP6.png";
import logoUnifier from "../images/oracle1.png";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProviderContainer from "../components/ProviderContainer";
import M from "materialize-css";

class Providers extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      list: {
        results: [
          {
            id: "1",
            name: "P6 EPPM",
            logo: logoP6,
            interface: "10"
          },
          {
            id: "2",
            name: "UNIFIER",
            logo: logoUnifier,
            interface: "11"
          },
          {
            id: "3",
            name: "SAP",
            logo: "",
            interface: "12"
          },
          {
            id: "4",
            name: "EBS",
            logo: "",
            interface: "13"
          }
        ]
      }
    };
  }
  componentDidMount() {
    M.AutoInit();
    this.fetchProvider();
  }
  fetchProvider = async () => {
    this.setState({ loading: true, error: null });
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
      <React.Fragment>
        <Navbar />
        <section className="col l10 m12 s12  offset-l2 relative">
          <Header title="Proveedores" urlContext="proveedores" />
          <div className="container-page">
            <div className="row">
              <div className="col l12 m12 s12">
                <div className="row">
                  <div className="col l9">
                    Selecciona alguna de los siguientes proveedores para
                    configurar una nueva conexión.
                  </div>
                </div>
              </div>
              {this.state.loading === true ? (
                <ProviderContainer
                  providers={this.state.list.results}
                  skeleton="true"
                />
              ) : (
                <ProviderContainer providers={this.state.list.results} />
              )}
            </div>
          </div>
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}

export default Providers;
