import React, {Component} from 'react';

import {Card, Col, Row, icon, Typography, Icon, Menu} from 'antd'
import Chart from '../Items/Chart'
import BreadcrumbNav from './BreadcumbNav';

const {Title}= Typography;

class Cards extends Component {
    render(){
        return(
            <div>


            <Row className="row" gutter={24}>

            <Col className="column" span={6}>
            <Card className="myCard myCard1" bordered={false} style={{ width: 225, height: 110, marginTop: '0%', borderRadius:'5px',

            // borderLeft: '5px solid #36abb5',
            borderLeft:'2px solid #595959',
            boxShadow: '2px 2px 9px #dbdbdb',

            fontSize: '15px'
                
            }}>
            <h5 style={{color:'white', fontWeight:600, fontSize:'21px'}}>Students</h5><h5 style={{color:'white'}}>9</h5>
            <i class="fa fa-graduation-cap" style={{backgroundColor: '#595959',  float :'right', 
            position: 'absolute', 
            top: '30%',
            left: '70%',
            fontSize: "23px",

            padding: '10px', 
            borderRadius: "50%",
            color: '#fff' }}></i>
            </Card>
            </Col>

            <Col className="column" span={6} >
            <Card className="myCard myCard2" bordered={false} style={{ width: 225, height: 110, marginTop: '0%', borderRadius:'5px',

            // borderLeft: '5px solid #fe5e51',
            borderLeft:'2px solid #595959',
            boxShadow: '2px 2px 9px #dbdbdb',
            fontSize: '23px'
                
            }}>
            <h5 style={{color:'white', fontWeight:600, fontSize:'21px'}}>Teachers</h5><h5 style={{color:"white"}}>12</h5>

            <i class="fa fa-users" style={{backgroundColor:  '#595959', color:'white',  float :'right', 
            position: 'absolute', 
            top: '30%',
            left: '70%',
            fontSize: "23px",

            padding: '10px', 
            borderRadius: "50%",
            color:'#fff'}}></i>
            </Card>
            </Col>

            <Col className="column" span={6}>
            <Card className="myCard myCard3" bordered={false} style={{ width: 225, height: 110, marginTop: '0%', borderRadius:'5px',

            // borderLeft: '5px solid #4ba63d',
            borderLeft:'2px solid #595959',
            boxShadow: '2px 2px 9px #dbdbdb',
            fontSize: '23px'
                
            }}>
            <h5 style={{color:'white', fontWeight:600, fontSize:'21px'}}>Subjects</h5><h5 style={{color:'white'}}>8</h5>
            <i class="fa fa-book" style={{backgroundColor: '#595959', float :'right', 
            position: 'absolute', 
            top: '30%',
            left: '70%',
            fontSize: "23px",

            padding: '10px', 
            borderRadius: "50%",
            color:'#fff'}}></i>
            </Card>
            </Col>

            
            <Col className="column" span={6}>
            <Card className="myCard myCard4" bordered={false} style={{ width: 225, height: 110, marginTop: '0%', borderRadius:'5px',

            // borderLeft: '5px solid #fe5e51',
            borderLeft:'2px solid #595959',
            boxShadow: '2px 2px 9px #dbdbdb',
            fontSize: '15px'
                
            }}>
            <h5 style={{color:'white', fontWeight:600, fontSize:'21px'}}>Parents</h5><h5 style={{color:'white'}}>8</h5>
            <i class="fa fa-users" style={{backgroundColor: '#595959', color:'white',  float :'right', 
            position: 'absolute', 
            top: '30%',
            left: '70%',
            fontSize: "27px",

            padding: '10px', 
            borderRadius: "50%",
            color:'#fff'}}></i>
            </Card>
            </Col>
            </Row>

           

           

            </div>
        )
    }
}

export default Cards;