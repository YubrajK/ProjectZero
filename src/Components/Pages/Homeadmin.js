import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {Card, Col, Row, icon, Typography, Icon, Menu} from 'antd'
import Chart from '../Items/Chart'
import Studentspiechart from '../Items/Students/studentspiechart';
import Cards from '../Items/Cards'
import BreadcrumbNav from '../Items/BreadcumbNav';

const {Title}= Typography;





class Homeadmin extends Component  {

  
    
    render() {

   


    return (
        <div className="App" id="container" style={{marginTop: '2%',}}>

           
          <Cards />

           <BreadcrumbNav />  

         



           {/* Chart Bars  */}

           {/* <Row className="row" style={{marginTop: "3%"}}>
           <Col className="column" span={10}><Card title="Fees Collection and Expenses" style={{height: 450, marginRight: 30, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
               <Chart />
           </Card>
           </Col>
    
           <Col className="column" span={5}><Card title="Students" style={{height: 450, marginRight: 30, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
           
            <Studentspiechart />

           </Card>
           </Col>
           </Row> */}

      


        </div>
    )
}

}

export default Homeadmin;