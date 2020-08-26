import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class ContactVendor extends Component{
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
                <View style={styles.container}>
                    <Text>Contact Listing</Text>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('CategoryListing')}>
                        <Text> VendorsListingButton</Text>
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
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20
    },
})
