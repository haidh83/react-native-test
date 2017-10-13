import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
//import  login  from '../actions/index';

function mapStateToProps(state) {
    return { user: state.userReducers.user };
}

function mapDistpatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
    //return { actions: bindActionCreators(Actions, dispatch) };
}


class Login extends Component {
    constructor(props){
        super(props);
        this.onLoginButtonPress=this.onLoginButtonPress.bind(this);
    }
    onLoginButtonPress() { 
        console.log(this.props);
        //this.props.actions.login({ userName: 'h', password: '1' }); 
        this.props.login({ userName: 'h', password: '1' }); 
    }
    render() {
        return (
            <View>
                <View>
                    {this.props.user.loggedin ? <Text>OK</Text> : <Text>Need Login</Text>}
                </View>
                <View>
                    {
                        !this.props.user.loggedin &&
                        <TouchableHighlight onPress={this.onLoginButtonPress}>
                            <Text>Log In</Text>
                        </TouchableHighlight>
                    }
                </View>
            </View>
        )
    }
}

//export default connect(mapStateToProps, Actions)(Login);
//export default connect(mapStateToProps, login)(Login);
export default connect(mapStateToProps, mapDistpatchToProps)(Login);