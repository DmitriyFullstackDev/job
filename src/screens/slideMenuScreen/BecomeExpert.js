import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';



export default class BecomeExpert extends Component {
    static navigationOptions = {
        header: null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="log-out" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    componentDidMount() {
        this.props.navigation.navigate('Splash');
    }
    render() {
        return (
            <View style={styles.container}/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // opacity: 0,
    },
    icon:{
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 10
    }
});


