import React, {Component} from 'react'
import {Bar, Line, Pie, defaults, HorizontalBar} from  'react-chartjs-2';
import {Card, Col, Row, icon, Typography, Icon, Menu} from 'antd'

defaults.global.maintainAspectRatio = false




class studentspiechart extends Component {

  state = {
    chartData: {
      labels: ['Male Students', 'Female Students'],
      datasets: [
        {
          label: '',
          data: [
            400,
            200,
            
            

          ],
          backgroundColor: [
            '#36abb5',
        
            '#f6db5f',
            '#fe5e51'
            
          ],
     
        
       

        }
      ]
    }

  }

  
  render(){

 

    return(
      <div>

        <Col className="column"><Card title="Students Reports" style={{height: 400}}>
        <div className="chart">

       
 
          <Pie
         
          data={this.state.chartData}
          options={{
            title : {
              display: true,
              // text: 'Fees Collection and Expenses',
              fontSize :15,
              fontFamily: 'Lato',
              
            },
            legend: {
              display: true,
              position: 'bottom',
             
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

export default studentspiechart;