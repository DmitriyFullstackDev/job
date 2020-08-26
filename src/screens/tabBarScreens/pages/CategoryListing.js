import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class CategoryListing extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <View style={styles.container}>
                    <Text>Category Listing</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=> navigate('VendorsListing')}>
                        <Text> CategoryListingButton</Text>
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
