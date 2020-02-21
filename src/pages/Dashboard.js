import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_animated);

class Dashboard extends Component {
  componentDidMount() {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // ------------------------------------------------------------------------------------

    // Create chart instance
    var chartDonut = am4core.create("chartDonut", am4charts.PieChart);

    // Add and configure Series
    var pieSeries = chartDonut.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chartDonut.innerRadius = am4core.percent(0);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    // change the cursor on hover to make it apparent the object can be interacted with
    pieSeries.slices.template.cursorOverStyle = [
      {
        property: "cursor",
        value: "pointer"
      }
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    var shadow = pieSeries.slices.template.filters.push(
      new am4core.DropShadowFilter()
    );
    shadow.opacity = 0;

    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter());
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chartDonut.legend = new am4charts.Legend();

    chartDonut.data = [
      {
        country: "Exitosos",
        litres: 501.9
      },
      {
        country: "Fallidos",
        litres: 65.8
      }
    ];

    // ------------------------------------------------------------------------------------

    // Create chart instance 1
    var chartBar = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chartBar.data = [
      {
        month: "Ene",
        visits: 2025
      },
      {
        month: "Feb",
        visits: 1809
      },
      {
        month: "Mar",
        visits: 1322
      },
      {
        month: "Abr",
        visits: 1122
      },
      {
        month: "May",
        visits: 1114
      },
      {
        month: "Jun",
        visits: 984
      },
      {
        month: "Jul",
        visits: 1711
      },
      {
        month: "Ago",
        visits: 1122
      },
      {
        month: "Sep",
        visits: 1114
      },
      {
        month: "Oct",
        visits: 984
      },
      {
        month: "Nov",
        visits: 984
      },
      {
        month: "Dic",
        visits: 1122
      }
    ];

    // Create axes

    var categoryAxis = chartBar.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(
      dy,
      target
    ) {
      if (target.dataItem && target.dataItem.index & (2 == 2)) {
        return dy + 25;
      }
      return dy;
    });

    var valueAxis = chartBar.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chartBar.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "month";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    // ------------------------------------------------------------------------------------

    // Create chart instance
    var chartBarL = am4core.create("chartdiv2", am4charts.XYChart);

    // Add data
    chartBarL.data = [
      {
        month: "Ene",
        transactions: 2025
      },
      {
        month: "Feb",
        transactions: 1809
      },
      {
        month: "Mar",
        transactions: 1322
      },
      {
        month: "Abr",
        transactions: 1122
      },
      {
        month: "May",
        transactions: 1114
      },
      {
        month: "Jun",
        transactions: 2000
      },
      {
        month: "Jul",
        transactions: 3711
      },
      {
        month: "Ago",
        transactions: 2122
      },
      {
        month: "Sep",
        transactions: 1114
      },
      {
        month: "Oct",
        transactions: 984
      },
      {
        month: "Nov",
        transactions: 984
      },
      {
        month: "Dic",
        transactions: 1122
      }
    ];

    // Create axes

    var categoryAxis = chartBarL.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(
      dy,
      target
    ) {
      if (target.dataItem && target.dataItem.index & (2 == 2)) {
        return dy + 25;
      }
      return dy;
    });

    var valueAxis = chartBarL.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chartBarL.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "transactions";
    series.dataFields.categoryX = "month";
    series.name = "transactions";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    // ------------------------------------------------------------------------------------

    // Create chart instance
    var chartBarR = am4core.create("chartdiv3", am4charts.XYChart);

    // Add data
    chartBarR.data = [
      {
        month: "Ene",
        transactions: 2025
      },
      {
        month: "Feb",
        transactions: 1809
      },
      {
        month: "Mar",
        transactions: 1322
      },
      {
        month: "Abr",
        transactions: 1122
      },
      {
        month: "May",
        transactions: 1114
      },
      {
        month: "Jun",
        transactions: 2000
      },
      {
        month: "Jul",
        transactions: 3711
      },
      {
        month: "Ago",
        transactions: 2122
      },
      {
        month: "Sep",
        transactions: 1114
      },
      {
        month: "Oct",
        transactions: 984
      },
      {
        month: "Nov",
        transactions: 984
      },
      {
        month: "Dic",
        transactions: 1122
      }
    ];

    // Create axes

    var categoryAxis = chartBarR.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function(
      dy,
      target
    ) {
      if (target.dataItem && target.dataItem.index & (2 == 2)) {
        return dy + 25;
      }
      return dy;
    });

    var valueAxis = chartBarR.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chartBarR.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "transactions";
    series.dataFields.categoryX = "month";
    series.name = "transactions";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <div>
        <section className="col l10 m12 s12 offset-l2 relative">
          <Header title="Monitoreo" urlContext="monitoreo" />
          <div className="row container-page">
            <div className="col l12 m12 s12 mt-1">
              <div className="row">
                <div className="col l3 m4 s6 item-card">
                  <a className="not-link-style" href="#!">
                    <div className="kpi-card">
                      <div className="value-kpi t-light">34</div>
                      <div className="cont-title-kpi">
                        <div className="title-kpi t-semibold">
                          Proveedores Activos
                        </div>
                        <div>
                          <i className="p9 fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col l3 m4 s6 item-card">
                  <a href="#!" className="not-link-style">
                    <div className="kpi-card">
                      <div className="value-kpi t-light">102</div>
                      <div className="cont-title-kpi">
                        <div className="title-kpi t-semibold">
                          Proyectos Publicados
                        </div>
                        <div>
                          <i className="p9 fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col l3 m4 s6 item-card">
                  <a href="#!" className="not-link-style">
                    <div className="kpi-card">
                      <div className="value-kpi t-light">54</div>
                      <div className="cont-title-kpi">
                        <div className="title-kpi t-semibold">
                          Trabajo Programados
                        </div>
                        <div>
                          <i className="p9 fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col l3 m4 s6 item-card">
                  <a href="#!" className="not-link-style">
                    <div className="kpi-card">
                      <div className="value-kpi t-light">9</div>
                      <div className="cont-title-kpi">
                        <div className="title-kpi t-semibold">Interfaces</div>
                        <div>
                          <i className="p9 fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col xl9 l6 m12 s12">
                  <div className="graph-card" style={{ minHeight: 400 + "px" }}>
                    <div className="head-dropdown-filter">
                      <div className="cont-title">
                        <div className="title-graph t-semibold p15">
                          Transacciones x Interfaz
                        </div>
                      </div>
                      <div className="cont-filterdrop">
                        <select style={{ zIndex: 0 }}>
                          <option>Migración P6</option>
                          <option>Creación EPS</option>
                          <option>Creación Actividades</option>
                        </select>
                      </div>
                    </div>
                    <div
                      id="chartdiv"
                      style={{ width: 100 + "%", height: 270 + "px" }}
                    ></div>
                  </div>
                </div>
                <div className="col xl3 l6 m6 s12">
                  <div className="graph-card" style={{ minHeight: 400 + "px" }}>
                    <div className="title-graph t-semibold p12 tc">
                      Casos Exitosos / Fallidos
                    </div>
                    <div
                      id="chartDonut"
                      style={{
                        width: 90 + "%",
                        height: 370 + "px",
                        marginLeft: 5 + "%"
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col l6 m6 s12">
                  <div className="graph-card">
                    <div className="head-dropdown-filter">
                      <div className="cont-title">
                        <div className="title-graph t-semibold p13">
                          Transacciones x Proveedor
                        </div>
                      </div>
                      <div className="cont-filterdrop">
                        <select style={{ zIndex: 0 }}>
                          <option>P6 EPPM</option>
                          <option>UNIFIER</option>
                          <option>SAP</option>
                          <option>EBS</option>
                        </select>
                      </div>
                    </div>
                    <div
                      id="chartdiv2"
                      style={{ width: 100 + "%", height: 270 + "px" }}
                    ></div>
                  </div>
                </div>
                <div className="col l6 m12 s12">
                  <div className="graph-card">
                    <div className="head-dropdown-filter">
                      <div className="cont-title">
                        <div className="title-graph t-semibold p13">
                          Transacciones x Flujo de Negocio
                        </div>
                      </div>
                      <div className="cont-filterdrop">
                        <select style={{ zIndex: 0 }}>
                          <option>Get EPS</option>
                          <option>Get Activity</option>
                          <option>Get Project</option>
                          <option>Get CBS</option>
                        </select>
                      </div>
                    </div>
                    <div
                      id="chartdiv3"
                      style={{ width: 100 + "%", height: 270 + "px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
}

export default Dashboard;
