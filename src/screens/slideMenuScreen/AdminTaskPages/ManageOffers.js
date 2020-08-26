import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import {Icon} from "native-base";

export default class ManageOffers extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props.navigation;
        return(
            <View>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<Text style={{fontSize:17, marginTop: 15, fontFamily: 'Poppins-Bold'}}>Chatting Contact List</Text>}
                />
                <View style={styles.container}>
                    <Text>Manage Categories</Text>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('TabBar')}>
                        <Text> ContactButton</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1,
    },
})
