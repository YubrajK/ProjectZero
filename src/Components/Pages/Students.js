import React, {Component} from 'react'

import studentsdata from '../JSON files/studentsdata.json'
import DataTable from '../Items/Table'
import WrappedRegistrationForm from '../Items/Students/Admission'
import { Table, Divider, Tag } from 'antd';
import {Modal, Button} from 'antd'
// import MyCards from '../Items/MyCards/MyCards'
import { Card } from 'antd';
import { Layout, Menu, Icon, Input, Col, Row } from 'antd';
import Highlighter from 'react-highlight-words';
import { Typography } from 'antd';


const {Title} = Typography;

const dataSource = studentsdata




class students extends Component {

    state = {
         
         loading: false,
         visible: false,

          // Searching

         searchText: '',
         searchedColumn: '',

        //  Sorting and filtering

        filteredInfo: null,
        sortedInfo: null,
         
    }

    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => (
        <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: text =>
        this.state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ) : (
          text
        ),
    });
  
    handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
      });
    };
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };
  
   

    // Sorting and filtering

    handleChange = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
        filteredInfo: filters,
        sortedInfo: sorter,
      });
    };
  
    clearSort = () => {
      this.setState({ sortedInfo: null });
    };
  
  
    setClassSort = () => {
      this.setState({
        sortedInfo: {
          order: 'descend',
          columnKey: 'class',
        },
      });
    };







    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };

    deleteTd = (itemid) => {
        // const mydata = this.state.studentsdata.filter(mydata=>mydata.id!==itemid);
        // this.setState({studentsdata: mydata});
    console.log('clicked')
    
    }

    render(){

           const { visible, loading } = this.state;


           let { sortedInfo, filteredInfo } = this.state;
           sortedInfo = sortedInfo || {};
           filteredInfo = filteredInfo || {};


           const columns = [
            {title: 'ID',
            dataIndex: 'id',
            key: 'id'
            },
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              ...this.getColumnSearchProps('name'),
              ellipsis: true,
             
            },
            {
              title: 'Gender',
              dataIndex: 'gender',
              key: 'gender',
              ...this.getColumnSearchProps('gender'),
              ellipsis: true,

              
            },
            {
              title: 'Class',
              dataIndex: 'class',
              key: 'class',
              ...this.getColumnSearchProps('class'),

              sorter: (a, b) => a.class - b.class,
              sortOrder: sortedInfo.columnKey === 'class' && sortedInfo.order,
              ellipsis: true,
            },
            {
                title: 'Year Of Birth',
                dataIndex: 'year_of_birth',
                key: 'year of birth',
                ...this.getColumnSearchProps('year_of_birth'),
                ellipsis: true,
            },
            {
                title: 'Operation',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Button type="danger">Delete</Button>
                ) 
        
            }
          ];
        
        

       
        return(

      

                
            
       <div className="App" style={{marginTop: '5%'}}>   
                  {/* <MyCards dashboard={"Students"} />       */}
            
            <Row className="row" gutter={24}>
            <Col className="column" span={24}>
            <Card 
                title= {
                
                <div>
                <span style={{fontSize: '16px'}}>
                    <i Class="fa fa-graduation-cap" style={{backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '5px', marginRight: '5px', fontSize: '12px'}}> </i>
                  My Students
                </span>

                <span style={{position: 'absolute', left: '80.4%', }}>

                <Button type="primary" className="add-btn" onClick={this.showModal}>Add</Button> 


    
      
     

                </span>
                </div>
                
            }  
            style={{
                boxShadow: '5px 5px 8px #8c8c8c' ,
               
                width: 300,
            }}

            headStyle={{backgroundColor: '#3a3939', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
            style={{ width: '80%', marginLeft: '4%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
               
                 <div>
                   {/* Sorting and Filtering */}
                 <div className="table-operations">
                  <Button type="primary" onClick={this.setClassSort}>Sort class</Button>
                  <Button type="danger" onClick={this.clearSort}>Clear sorters</Button>
                </div>
                 <DataTable dataSource = {dataSource} columns={columns} onChange={this.handleChange} /> 
                 </div> 
          



                        

            </Card>
            </Col>     
            </Row>  
            <Modal
                    title = "Register New Teacher"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        
                        <Button key="back" onClick={this.handleCancel}>
                        Return
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                        Submit
                        </Button>,
                        
                    ]}
                   
                    bodyStyle = {{

                    
                        backgroundColor: "#fff566",
                        fontColor: 'white',
                        
                    
                    }}
                    >
          
           

              

            <WrappedRegistrationForm />

         
        </Modal>
 
                
                  
                  
                  </div>
                

           
           
              
  
        )
    }
}

export default students;