import React, { Component } from "react";
import Chart from "react-apexcharts";
import { HeadingGroup } from "../basic/basic";

class GraphicChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt']
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app-chart container">
		  <HeadingGroup title={'Grafik Kunjungan Pasien'} size={'size-36'} />
        <div className="">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
			  height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GraphicChart;