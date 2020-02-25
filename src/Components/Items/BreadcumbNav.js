import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import {Card, Col, Row, icon, Typography, Icon, Menu} from 'antd'
import Chart from './Chart'
import Studentspiechart from './Students/studentspiechart'
import Notifications from './Notifications'
import Birthday from './Birthday'
import TODO from './ToDo/Todo'
import { Tabs } from 'antd';

const { TabPane } = Tabs;



  
  const tabListNoTitle = [
    {
      key: 'reports',
      tab: 'Reports',
    },
    {
      key: 'students',
      tab: 'Students',
    },
  ];
  
  const contentListNoTitle = {
    reports: <Chart />,
    students: <Studentspiechart />,
  
  };

class BreadcrumbNav extends Component {

    state = {
        key: 'reports',
        noTitleKey: 'reports',
      };
    
      onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
      };


    render(){

    return(
    <div style={{marginTop: '3%'}}>

      <Row gutter={24} className="row" >
         <Col className="column" span={11}>  
       
        <Card
          style={{ width: '', boxShadow: '2px 2px 9px #dbdbdb'}}

        
          
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
        //   tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card> 
        </Col> 


        <Col className="column" span={7}>

        <Notifications />

        </Col>    

        <Col className="column" span={6}>

        <TODO />

        </Col>   

        
        <Col style={{marginTop:'2%'}} className="column" span={6}>

        <Birthday/>

        </Col> 
         

        
           
        </Row>

       

      

      

              

            </div>
        )
    }
}

export default BreadcrumbNav;