
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Box, Button, HStack, Select, Text,Form,Input } from "@chakra-ui/react";
import { Height } from "@material-ui/icons";

const ChartForSpecificProduct = () => {
  const [chartData, setChartData] = useState({});


  const chart = () => {
    
       /* axios
        .post("http://localhost:5000/orders",{
          "order_id":`${value}`,"year"`:${value}`
        })
        .then((response) => {
          let data = response.data.soldcounts;
          setChartData(data);
        });*/
        setChartData({
          labels:['January','February','March','April','May','June','July','August','September','October','November','December'],
          datasets:[{
                label:'Chart of a Specific Product with Total Sold Quantity in year',
                data:[10,20,8,15,17,18,19,17,20,10,14,14],
                fillColor: "rgba(0,10,220,0.5)",
        // _hover:({fillColor: "rgba(200,10,256,0.5)"}),
                backgroundColor: "rgba(0,10,220,0.5)",
                borderWidth:4

            }]
        });
    
  };

  useEffect(() => {
    chart();
  }, []);

const sendandgetchartdata=()=>{}

  return (
    
      <Box  pt="110px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}>
    
      <Box ml="280px"> 
        <HStack>
      <Box>
      <Box><Text textAlign="center">Annual Sales of</Text></Box>
      <Box><Select name="year" >
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>

      </Select>
      </Box>
      </Box>
      <Box>
      <Box><Text textAlign="center">For Item </Text></Box>
      <Box><Input name="item_id" placeholder="Enter Item ID"/></Box>
      </Box>
      <Box>
      <Box><Button mt="15px" onClick={sendandgetchartdata}>Generate</Button></Box>
      </Box>
      </HStack>
      </Box>


      <div className="App">
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