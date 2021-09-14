import React from 'react';
import { Pie, defaults, Line } from 'react-chartjs-2'




function Charts(props) {
    return (
        <div>
            <Line
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                    datasets: [
                        {
                            label: 'Design',
                            data: ["4.51", "10.41", "5.78", "14.85", "10.28", "10.28", "10.20"],
                            backgroundColor: '#00BA34',
                            borderColor: '#00BA34',
                        },
                        {
                            label: 'Marketing',
                            data: ["10.11", "12.11", "8.12", "11.12", "14.12", "6.12", "12.12"],
                            backgroundColor: '#F98600',
                            borderColor: '#F98600',
                        },
                        {
                            label: 'Uncategorized',
                            data: ["12.51", "12.41", "15.78", "14.85", "8.28", "10.28", "7.20"],
                            backgroundColor: '#0085FF',
                            borderColor: '#0085FF',
                        },
                    ],
                }}
                height={400}
                width={800}
                options=
                {{
                    maintainAspectRatio: false,
                    plugins: {
                    },
                    scales: {
                        yAxes: {
                            display:true,
                            min:0,
                            max:20,
                            weight:5,                            
                            grid:{
                                display:true
                            },
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function(value, index, values) {
                                    if(value !=0 ){
                                        return '$' + value;
                                    }
                                    else{
                                        return value;
                                    }
                                    
                                }
                            },
                            labels: {
                            }
                        },
                        xAxes:{
                            grid:{
                                display:false
                            }
                        },
                    },
                    legend: {
                        display:false,
                        labels: {
                            fontSize: 100,
                        },
                        onclick(){
                            // alert(Chart.data.datasets[0].data)
                        }
                    },
                }}
            />
        </div>
    );
}

export default Charts;