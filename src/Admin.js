


import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import Homeadmin from './Components/Pages/Homeadmin'
import Sidebar from './Components/Items/Sidebar'
import Students from './Components/Pages/Students'
import Admission from './Components/Items/Students/Admission'
import AddNewTeachers from './Components/Items/Teachers/AddNewTeachers'
import Chart from './Components/Items/Chart'
import Cards from './Components/Items/Cards'
import Studentspiechart from './Components/Items/Students/studentspiechart'
import TODO from './Components/Items/ToDo/Todo'
import Homepage from './Components/Homepage/Homepage'
import { Layout, Menu, Icon, Breadcrumb, Button, Drawer, Affix, Switch as AntSwitch} from 'antd';
import {Card, Badge, Avatar} from 'antd';
import {Typography} from 'antd';
import { Input } from 'antd';

const { Search } = Input;




const { SubMenu } = Menu;

const { Header, Content, Footer, Sider} = Layout;

const { Title } = Typography;


const theme1 = {

  backgroundColor: '#ffd369',
  marginBottom: "0%",

}
const theme2 = {

  backgroundColor: '#85a5ff',
  marginBottom: "1%",
  

}
const theme3 = {

  backgroundColor: '	#36abb5',
  marginBottom: "1%",
  

  

}
const theme4 = {

  backgroundColor: '#a7e9af',
  marginBottom: "1%",
  

  

}
const theme5 = {
  backgroundColor: '#FFBABA',
  marginBottom: '1%'
}



class Admin extends Component {

  state = {
    collapsed: true, // Sidenavbar

    theme: theme1,
    

    visible: false,    // Drawer

            //Affix button for settings
    bottom: 20,

    // Fixed header

   fixHeader: '',

   SiderMarginTop: '',

   contentMargin: '',

   width: 220,
   open: '',
    
   TopBar: '', 
    
  };

//For Sidenavbar

closeNav = () => {
  this.setState({
          width: 0
  })
}

opeNav = () => {
  this.setState({
    width: 220
  })
}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

// For Drawer

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  // Change Color

  toThemeOne = () => {

    this.setState({
      theme: theme1
    })

  }

  toThemeTwo = () => {

    this.setState({
      theme: theme2
    })

  }
  toThemeThree = () => {

    this.setState({
      theme: theme3
    })

  }
  toThemeFour = () => {

    this.setState({
      theme: theme4
    })

  }

  changeClassName1 = () => {
    this.setState({
      TopBar: '',
    })
  }

  changeClassName1 = () => {
    this.setState({
      TopBar: theme1,
    })
  }

  changeClassName2 = () => {
    this.setState({
      TopBar: theme2,
    })
  }

  changeClassName3 = () => {
    this.setState({
      TopBar: theme3,
    })
  }

  changeClassName4 = () => {
    this.setState({
      TopBar: theme4,
    })
  }

  changeClassName5 = () => {
    this.setState({
      TopBar: theme5,
    })
  }

  toThemeFive = () => {
    this.setState({
      theme: theme5
    })
  }

// For Header

  switchHeader = (value) => {

    

    this.setState({
      fixHeader: value ? 'fixHeader': null,
      SiderMarginTop: value? '5': '', 
      contentMargin: value? '7': ''

      

       
    })
     
  }

 
  
  

  render() {
  return (
    <div className="App">
     <Router>
     <Layout>


      <Header

       className={this.state.fixHeader}
      
       style = {this.state.theme} 
       >
       <Title className="headerTitle"  style={{ fontSize: "23px", color: 'white', fontFamily: 'Arial', zIndex: "9999", position: 'absolute', left: '1%', lineHeight: '47px',}} level={4}></Title>   
     
   

        <Menu
         theme="light"
         mode="horizontal"
         defaultSelectedKeys={['']}
         style={{ lineHeight: '47px', backgroundColor: 'transparent', color: 'white', position:'absolute', top: '0', left: '30%', }}
       >

         <Menu.Item>
         <Search
            placeholder= "Search for something.."
            onSearch={value => console.log(value)}
            style={{ width: 500, }}
          />
         </Menu.Item>
        

          <Menu.Item style={{margin:'0 20px 0 95px'}}> 
            <span>
             <Badge style={{backgroundColor: '#c81912'}} count={8} >
             <Icon type="bell" theme="outlined" style={{fontSize :'18px', color: '#595959'}} />
            </Badge>
            </span>
           
          </Menu.Item> 

         
            <Menu.Item> 
             <Badge style={{backgroundColor: '#c81912', }}count={6} >
             <Icon type="message" theme="outlined" style={{fontSize :'18px', color: '#595959'}} />
            </Badge>
           
            </Menu.Item>


{/* 
            <Menu.Item>
            <Avatar shape="square" style={{backgroundColor: '#595959', color: 'white', marginLeft: '25px' }}>U</Avatar>
            </Menu.Item>
            */}
        

       </Menu> 



    
       


    
      </Header>
      
      <Layout>

      <Sider width={this.state.width}  style={{backgroundColor: 'white', boxShadow:'2px 2px 9px #bfbfbf', color: '#262626', marginTop: `${this.state.SiderMarginTop}%`}} >
   
          {/* <Menu style={{backgroundColor: 'white', color: 'black'}} theme="dark" mode="inline" defaultSelectedKeys={['home']}>
         
          
          <Icon

          style={{ backgroundColor: 'transparent', color: '#8c8c8c', padding: 5, position:'relative', left: '100%', fontSize: '1.2vw' }}
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
          />
          
          
            <Menu.Item style = {{color: '#595959'}} key="home">
            <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item style = {{color: '#595959'}} key="teachers">
              <Icon type="team" />
              <span>Teachers</span>
            </Menu.Item>
            <Menu.Item style = {{color: '#595959'}} key="students">
              <Icon type="upload"  />
              <span>Students</span>
            </Menu.Item>
            <Menu.Item style = {{color: '#595959'}} key="parents">
              <Icon type="team" />
              <span>Parents</span>
            </Menu.Item>
            <Menu.Item style = {{color: '#595959'}} key="subjects">
              <Icon type="book" />
              <span>Subjects</span>
            </Menu.Item>
          </Menu> */}

            <span style={{fontSize:'20px', borderRadius:'50%', boxShadow: '0 8px 6px -6px #595959', color:'#595959', cursor:'pointer', position:'absolute', left: 0, top:-5, zIndex:1,}} onClick={this.opeNav}><Icon theme="filled" type="right-circle"/></span>
            <div className="Sidebar" style={{width: `${this.state.width}px`, backgroundColor: '#3c4245', overflow:'hidden', zIndex:9999, position: 'relative',}}>
               <span class="closebtn" style={{fontSize:'17px', borderRadius:'50%', boxShadow: '0 8px 6px -6px #595959', color:'#dfe6e0', position:'absolute', top:'5px'}} onClick={this.closeNav}><Icon theme="filled" type="left-circle" /></span>
                <div style={{backgroundColor: '#3c4245', boxShadow: '0 8px 6px -6px #3c4245', marginBottom: '35px', height: '5%'}}>
                      <span style={{ fontSize: '17px', padding:'10px 5px',  marginLeft: '8%', display:'block', width: '100%', letterSpacing: '2px', fontWeight: 'bold'}}><i class="faf fa-user-tie" style={{color:'white'}}></i>  </span>
                </div>
               
                <div className="navItems" style={{marginTop: '-10px', }}>

                  
                  {/* <li class="item1">  
                  <a href="#smenu1"><i class="fa fa-home "> </i> Home<i class="fa fa-caret-down"></i></a>
                  
                  <div id="smenu1">
                    <Link to=" ">Go To Home Page</Link>
                    <Link to="/">Dashboard</Link>
                  </div>
                  </li>


                  <li class="item2">
                  <a href="#smenu2"><i class="fa fa-users "></i>Teachers<i class="fa fa-caret-down"></i></a>
                  <div id="smenu2">

                  <Link to="teachers">All Teachers</Link>
                    <Link to="AddTeacher">Add New Teacher</Link>
                  
                  </div>
                  </li>

                  <li class="item3">
                  <a href="#smenu3"><i class="fa fa-graduation-cap "></i>Students  <i class="fa fa-caret-down"></i></a>
                  <div id="smenu3">

                  <Link to="Students">All Students</Link>
                    <Link to="Admission">Admissions</Link>
                    
                  </div>
                  </li> 

                  <li class="item4">
                  <a href="#smenu4"><i class="fa fa-users "></i> Parents <i class="fa fa-caret-down"></i></a>
                  <div id="smenu4">

                  <Link to="Parents">All Parents</Link>
                    <Link to="AddParent">Add New Parent</Link>
                    
                  </div>
                  </li> 

                  <li class="item5">
                  <a href="#smenu5 "><i class="fa fa-book "></i> Library <i class="fa fa-caret-down"></i></a>
                  <div id="smenu5">
                    <Link to="Books">All Books</Link>
                    <Link to="AddBooks">Add New Book</Link>
                  </div>
                  </li> 
                 
                  <Link to="Exams"><i class="fa fa-paste "></i> Exams</Link> */}


                  <div class="dropdown">
                      <input type="checkbox" id="checkbox_toggle1" />
                      <label for="checkbox_toggle1"><i class="fa fa-home "></i> Home<i class="fa fa-caret-down"></i></label>
                    <div class="smenu1">
                    <Link activeClassName="navbar__link--active" to="/">Homepage</Link>
                    <Link activeClassName="navbar__link--active" to="Admin">Dashboard</Link>
                    </div>  
                  </div>

                  <div class="dropdown">
                      <input type="checkbox" id="checkbox_toggle2" />
                      <label for="checkbox_toggle2"><i class="fa fa-users "></i>Teachers<i class="fa fa-caret-down"></i></label>
                    <div class="smenu2">
                    <Link activeClassName="navbar__link--active" to="teachers">All Teachers</Link>
                    <Link activeClassName="navbar__link--active" to="/AddTeacher">Add New Teacher</Link>
                     
                    </div>  
                  </div>

                  <div class="dropdown">
                      <input type="checkbox" id="checkbox_toggle3" />
                      <label for="checkbox_toggle3"><i class="fa fa-graduation-cap "></i>Students<i class="fa fa-caret-down"></i></label>
                    <div class="smenu3">
                    <Link activeClassName="navbar__link--active" to="/Students">All Students</Link>
                    <Link activeClassName="navbar__link--active" to="/Admission">Admissions</Link>
                    </div>  
                  </div>

                  <div class="dropdown">
                      <input type="checkbox" id="checkbox_toggle4" />
                   <label for="checkbox_toggle4"><i class="fa fa-users "></i> Parents<i class="fa fa-caret-down"></i></label>
                    <div class="smenu4">
                     <Link activeClassName="navbar__link--active" to=" ">Admissions</Link>
                    </div>  
                  </div>

                </div>
            </div>


        </Sider>

        <Content
         style={{
          margin: '0px 0px',
          padding: '0px 30px 40px 30px',
          
          background: '#EEEEEE',
          minHeight: 590,
          overflow: "hidden"
          
          
        }}
        >  
     <Sidebar styleName={`${this.state.TopBar}`}/>
     <div style={{backgroundColor: "#fff", display: 'flex', padding: '5px 15px 5px 18px', marginTop: '1.5%',  boxShadow: '0 8px 6px -6px lightgrey'   }}>   
     {/* <Icon style={{
          backgroundColor: '#fff',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '5px 5px 8px #8c8c8c',
          marginRight: '15px',
          color: 'red',
          fontSize: '19px',
          
        
        
          }}
        
      type="setting" theme="filled" spin></Icon>*/} <h2 style={{color: '#3c4245', fontWeight:'650', fontSize: "25px", position: 'relative', top:'7px', 
    }}>Dashboard</h2>



           
      </div>   

      <div style={{padding: '10px 20px', height: '80%', marginTop: '0%'}}>
      
      <Affix offsetBottom={this.state.bottom} style={{position:'fixed', top: '80%', left: '95%', zIndex: '99999'}}>
        <Icon
        style = {{
          backgroundColor: '#404040', 
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '5px 5px 8px #8c8c8c',
          color: 'white',
          fontSize: '22px'

        }}
        type="setting" 
        theme="filled" spin 
        onClick={this.showDrawer}>

        </Icon>
      </Affix> 


     
      <Drawer
          title= {
            <span><Icon type='edit' theme="outlined"></Icon> Theme Options</span>
          }
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
         <Card title= {
           <span style= {{color: '#69c0ff'}}>Choose Color Scheme</span>
         }>
         <span style={{height: '25px', width: '25px', cursor: 'pointer', marginRight:"7%", borderRadius: '50%', backgroundColor: '#ffc53d', display:'inline-block'}} onClick={()=>{this.toThemeOne();this.changeClassName1()}}></span> 
         <span style={{height: '25px', width: '25px', cursor: 'pointer', marginRight:"7%", borderRadius: '50%', backgroundColor: '#85a5ff', display:'inline-block'}} onClick={()=>{this.toThemeTwo();this.changeClassName2()}}></span>
         <span style={{height: '25px', width: '25px', cursor: 'pointer', marginRight:"7%", borderRadius: '50%', backgroundColor: '#36cfc9', display:'inline-block'}} onClick={()=>{this.toThemeThree();this.changeClassName3()}}></span>
         <span style={{height: '25px', width: '25px', cursor: 'pointer', marginRight:"7%", borderRadius: '50%', backgroundColor: '#a7e9af', display:'inline-block'}} onClick={()=>{this.toThemeFour();this.changeClassName4()}}></span>
         <span style={{height: '25px', width: '25px', cursor: 'pointer', marginRight:"7%", borderRadius: '50%', backgroundColor: '#FFBABA', display:'inline-block'}} onClick={()=>{this.toThemeFive();this.changeClassName5()}}></span> 
         </Card> 

         {/* <Card style={{marginTop: '5%'}} title= {
           <span style= {{color: '#69c0ff'}}>Layout Option</span>
         }>

          <AntSwitch  ucheckedChildren="ON" unCheckedChildren="OFF" onChange={this.switchHeader} />
          
          <h5 style={{marginTop: '5%'}}>Fixed Header</h5>
          <p>Makes the header top fixed, always visible!</p>
         </Card> */}
        
        
      </Drawer>

      {/* <Switch>  
      <Route path="/"  exact component = {Homepage} />  
      </Switch> */}
      
               
                <Switch>  
                <Route path="/" exact component = {Homepage} />  
                </Switch>

                <Switch>  
                <Route path="/Admin"  component = {Homeadmin} />  
                </Switch> 

                

                <Switch>
                <Route exact path="/Students" component={Students} />
                

              
                <Route exact path="/Admission" component={Admission} />
                

              
                <Route exact path="/AddTeacher" component={AddNewTeachers} />
                

              
                <Route exact path="/chart" component={Chart} />
                
                
              
                <Route exact path="/studentspiechart" component={Studentspiechart} />
                

              
                <Route exact path="/Cards" component={Cards} />
                
              
                <Route exact path="/Todo" component={TODO} />
                </Switch>


      


      {/* <Route path = "/teachers" component = {Teachers} />
      <Route path = "/subjects" component = {Subjects} />
      <Route path = "/parents" component = {Parents} /> */}
   

      
      </div>  
        </Content>
      </Layout>
      <Footer style={{ height: '15vh', textAlign: 'center'}}>School Management System 	&copy;2020 </Footer>
    </Layout>
    </Router>      
    </div>
  );
  }
}

export default Admin;
