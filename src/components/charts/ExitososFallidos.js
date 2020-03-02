import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import M from "materialize-css";

am4core.useTheme(am4themes_animated);

class ExitososFallidos extends Component {
  componentDidMount() {
    M.AutoInit();
    this.buldCharts();
  }

  buldCharts = () => {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end
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
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div
          id="chartDonut"
          style={{
            width: 90 + "%",
            height: 370 + "px",
            marginLeft: 5 + "%"
          }}
        ></div>
      </React.Fragment>
    );
  }
}

export default ExitososFallidos;
