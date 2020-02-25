import React, {Component} from 'react'
import {Card, Alert } from 'antd';
import { render } from '@testing-library/react';

const onClose = e => {
  console.log(e, 'I was closed.');
};

class Notifications extends Component {

    state = {
        description: 'test'
    }

    render(){
    return(    
    <div>
        <Card style={{ boxShadow: '2px 2px 9px #dbdbdb', marginLeft:''}} 
        
        headStyle={{backgroundColor:'#595959', color:'white'}} 
        
        title={
            <span>
                News Feed
            </span>
        }>
        <Alert className="mb-3"
        message="School will remain close on first of March."
        type="info"
        
        closable
        onClose={onClose}
        />
       

        <Alert className="mb-3"
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"

        closable
        onClose={onClose}
        />

        
        <Alert className="mb-3"
        message="Error Text"
        description= {
            <span>
                {this.state.description}
            </span>
        }
        type="error"

        closable
        onClose={onClose}
        />
        </Card>
  </div>
    )
    }
}


export default Notifications