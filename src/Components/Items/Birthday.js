import React, {Component} from 'react'
import {Card} from 'antd';

class Birthday extends Component {
    render(){
        return(
            <div>
                <Card style={{ boxShadow: '2px 2px 9px #dbdbdb', marginLeft:'0%', }} 
                
                      headStyle={{background:"#595959", color:'white'}} 
                      
                      title= {
                     
                        <span>Birthday Today</span>

                            }
                    >

                    <div style={{display:'flex', justifyContent:'center', justifyContent:'space-between'}}>
                         
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>      
                    <i class="fa fa-graduation-cap" style={{fontSize:'20px', color:'#595959'}}></i> 
                    <span>0</span>
                    <span>Students</span>
                    </div> 


                    <div>      
                    <i class="fa fa-birthday-cake" style={{fontSize:'35px', color:'grey'}}></i> 
                    </div> 


                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>      
                    <i class="fa fa-users" style={{fontSize:'20px', color:'#595959', }}></i>
                    <span>0</span>
                    <span>Employees</span>
                    </div> 




                    </div>     

                </Card>
            </div>
        )
    }
}

export default Birthday;