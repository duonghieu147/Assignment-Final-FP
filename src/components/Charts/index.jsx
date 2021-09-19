import React from 'react';
import { Line } from 'react-chartjs-2'
import { Icon } from '../../assets/svgs/Icon';

function Charts(props) {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                type: "line",
                label: "Design",
                borderColor: "#00BA34",
                backgroundColor: "#00BA34",
                // lineTension: 0.5,
                borderWidth: 2,
                fill: false,
                data: ["4.51", "10.41", "5.78", "14.85", "10.28", "10.28", "10.20"],
                // pointStyle: 'rect',
            },
            {
                type: "line",
                label: "Marketing",
                borderColor: "#F98600",
                backgroundColor: "#F98600",
                borderWidth: 2,
                fill: false,
                data: ["10.11", "12.11", "8.12", "11.12", "14.12", "6.12", "12.12"],
            },
            {
                type: "line",
                label: "Uncategorized",
                borderColor: "#0085FF",
                backgroundColor: "#0085FF",
                borderWidth: 2,
                fill: false,
                data: ["12.51", "12.41", "15.78", "14.85", "8.28", "10.28", "7.20"],
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: { right: 32 },
        },
        scales: {
            x: {
                grace: 10,
                grid: {
                    display: false,
                    borderColor: "#E8E8E8",
                    tickLength: 16,
                },
                // ticks: {
                //   padding: 0,
                // },
            },

            y: {
                min: 0,
                grid: {
                    display: true,
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: true,
                    borderDash: [4, 4],
                    tickBorderDash: [4, 4],
                    borderColor: "#E8E8E8",
                    tickLength: 16,
                    z: -1,
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value) {
                        if (value == 0) {
                            return value;
                        }
                        return "$" + value;
                    },
                    crossAlign: "far",
                    padding: 16,
                },
            },
        },

        plugins: {
            legend: {
                // onClick: (e) => e.stopPropagation(),
                // labels: {
                //     usePointStyle: true , //<-- set this
                //      pointSyle: 'line',
                //  },
                display: false,
                // position: "bottom",
                // align: "start",
            },
            tooltip: {
                callbacks: {
                  footer: function(items) {
                    localStorage.setItem('sum',items.reduce((a, b) => a + b.parsed.y, 0))
                    return 'Total: ' + items.reduce((a, b) => a + b.parsed.y, 0)
                  }
                }
              },
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: "legend-container",
            },
            
        },
        interaction: {
            mode: "index",
            intersect: false,
        },
        elements: {
            line: {
                borderWidth: 3,
            },
            point: {
                backgroundColor: "#fff",
                hoverBackgroundColor: "#fff",
                borderWidth: 2,
                hoverRadius: 6,
                hoverBorderWidth: 2,
            },
        },
    };
    const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer.querySelector("ul");

        if (!listContainer) {
            listContainer = document.createElement("ul");
            listContainer.style.display = "flex";
            listContainer.style.flexDirection = "row";
            listContainer.style.margin = '56px 0 25px 38px';
            listContainer.style.padding = 0;

            legendContainer.appendChild(listContainer);
        }

        return listContainer;
    };

    const plugins = [
        {
            id: "htmlLegend",
            afterUpdate(chart, args, options) {
                const ul = getOrCreateLegendList(chart, options.containerID);

                // Remove old legend items
                while (ul.firstChild) {
                    ul.firstChild.remove();
                }

                // Reuse the built-in legendItems generator
                const items = chart.options.plugins.legend.labels.generateLabels(chart);

                items.forEach((item) => {
                    const li = document.createElement("li");
                    li.style.alignItems = "center";
                    li.style.cursor = "pointer";
                    li.style.display = "flex";
                    li.style.flexDirection = "row";
                    li.style.marginLeft = "24px";

                    li.onclick = () => {
                        const { type } = chart.config;
                        if (type === "pie" || type === "doughnut") {
                            // Pie and doughnut charts only have a single dataset and visibility is per item
                            chart.toggleDataVisibility(item.index);
                        } else {
                            chart.setDatasetVisibility(
                                item.datasetIndex,
                                !chart.isDatasetVisible(item.datasetIndex)
                            );
                        }
                        chart.update();
                    };

                    // CSS box of charts
                    const boxSpan = document.createElement("span");
                    boxSpan.style.background =  item.fillStyle;
                    boxSpan.style.borderColor = item.strokeStyle;
                    boxSpan.style.borderWidth = item.lineWidth + "px";
                    boxSpan.style.display = "inline-block";
                    boxSpan.style.height = "20px";
                    boxSpan.style.marginRight = "10px";
                    boxSpan.style.width = "20px";

                    // CSS Text of box
                    const textContainer = document.createElement("p");
                    textContainer.style.color = item.fontColor;
                    textContainer.style.margin = 0;
                    textContainer.style.padding = 0;
                    textContainer.style.textDecoration = item.hidden
                        ? "line-through"
                        : "";

                    const text = document.createTextNode(item.text);
                    textContainer.appendChild(text);

                    li.appendChild(boxSpan);
                    li.appendChild(textContainer);
                    ul.appendChild(li);
                });
            },
        },
    ];

    return (
        <>
            <div className='content' id='content'>
                <div className="content__chart" style={{ height: "320px", width: "810px" }}>
                    <Line data={data} options={options} plugins={plugins} />
                </div>
                <div id="legend-container"></div>
            </div>
        </>
    );

}

export default Charts;