
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { Height } from "@material-ui/icons";

const ChartForSpecificProduct = () => {
  const [chartData, setChartData] = useState({});


  const chart = () => {
    
    
        setChartData({
          labels:['January','February','March','April','May','June','July','August','September','October','November','December'],
          datasets:[{
                label:'Chart of a Specific Product with Total Sold Quantity in year',
                data:[10,20,8,15,17,18,19,17,20,10,14,14],
                fillColor: "rgba(0,10,220,0.5)",
                backgroundColor: "rgba(0,10,220,0.5)",
                borderWidth:4

            }]
        });
    
  };

  useEffect(() => {
    chart();
  }, []);
  return (
      <Box  pt="150px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}
     >
    <div className="App">
      <h3>Annual Sales of</h3>
      <div  style={{width:"980px", marginLeft:"70px"}}>
        <Bar 
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 20,
                    beginAtZero: true
                    
                  },
                  gridLines: {
                    display: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
    </Box>
  );
};

export default ChartForSpecificProduct;