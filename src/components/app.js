import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGoal from './AddGoal.js';
import { firebaseApp } from '../firebase.js';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import img from './main.jpg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {Card, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500 } from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import People from 'material-ui/svg-icons/social/people';
import Avatar from 'material-ui/Avatar';
import { NavLink } from 'react-router-dom';
// import Slider from './slider.js';
import FlatButton from 'material-ui/FlatButton';
import Logout from 'material-ui/svg-icons/action/power-settings-new';

const logoutStyles = {
    marginTop: 265
};

const dividerStyle = {
    margin: 10
}


class app extends Component{
    constructor() {
        super();
        this.state = {
            drawerOpened: false
        }
    }
    _toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    }
    signOut(){
        firebaseApp.auth().signOut();
    }
    
    render(){
        return (
            <MuiThemeProvider>
                <div>
                <AppBar title='Welcome to North Marraige Garden'  onLeftIconButtonTouchTap={() => this._toggleDrawer()} style={{marginLeft: '-12%', width: '123.5%'}} />
                    <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>
                        <List>
                                    <Card>
                                        <CardHeader title="User" subtitle="User@gmail.com" />
                                    </Card>
                                    <br />
                                    <Divider style={dividerStyle} />
                                        <ListItem leftAvatar={<Avatar icon={<Person />} backgroundColor={blue500} />}><NavLink to="/profile">Profile</NavLink></ListItem>
                                        <ListItem leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}><NavLink to="/report">Reports</NavLink></ListItem>
                                        <ListItem leftAvatar={<Avatar icon={<People />} backgroundColor={blue500} />}><NavLink to="/patient">Patients</NavLink></ListItem>
                                    <br />
                                    <Divider style={dividerStyle} />
                                    <FlatButton style={logoutStyles} icon={<Logout />} label="Signout" fullWidth={true} onTouchTap={ () => this.signOut()} />                
                        </List>
                    </Drawer>
                    <AddGoal />
                    <hr/>
                    <h4>Goals</h4>
                    <GoalList />
                    <hr/>
                    <h4>Complete Goal list</h4>
                    <CompleteGoalList />
                </div>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state){
    return {}
}

export default connect(mapStateToProps, null) (app);
