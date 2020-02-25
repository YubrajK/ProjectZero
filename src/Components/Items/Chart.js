import React, {Component} from 'react'
import {Bar, Line, Pie, defaults, HorizontalBar} from  'react-chartjs-2';
import {Card, Col, Row, icon, Typography, Icon, Menu} from 'antd'


defaults.global.maintainAspectRatio = false




class Chart extends Component {

  state = {
    chartData: {
      labels: ['Collection', 'Fees', 'Expenses'],
      datasets: [
        {
          label: '',
          data: [
            10000,
            8000,
            5000,
            3000

          ],
          backgroundColor: [
            // '#36abb5',
            '#595959',
            '#595959',
            '#595959'
        
            // '#f6db5f',
            // '#fe5e51'
            
          ],
     
        
       

        }
      ]
    }

  }

  
  render(){

 

    return(
      <div>
        
        
        <Col className="column" id="FeeChart"><Card  title="Fees Collection & Expenses" style={{height: 400, width:400,}}>
        
        <div className="chart">    
        <Bar
         
         data={this.state.chartData}
         options={{
           title : {
             display: true,
             // text: 'Fees Collection and Expenses',
             fontSize :15,
             fontFamily: 'Lato',
             
           },
           legend: {
             display: false
           },
           maintainAspectRatio: false,
           responsive : true
         }}
         />
           
           
        
 
         
       
        </div>
        </Card>
        </Col>
      
      </div>
    )
  }
}

export default Chart;