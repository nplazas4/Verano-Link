import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import M from "materialize-css";

am4core.useTheme(am4themes_animated);

class TransInterfaz extends Component {
  componentDidMount() {
    M.AutoInit();
    this.buldCharts();
  }

  buldCharts = () => {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Create chart instance 1
    var chartBar = am4core.create(
      "chartdiv-" + this.props.id,
      am4charts.XYChart
    );

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
  };

  componentWillUnmount() {
    if (this.chartBar) {
      this.chartBar.dispose();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div
          id={"chartdiv-" + this.props.id}
          style={{ width: 100 + "%", height: 270 + "px" }}
        ></div>
      </React.Fragment>
    );
  }
}

export default TransInterfaz;
