import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class FavouriteListing extends Component{
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
                    <Text>Favourite Listing</Text>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('TabBar')}>
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
})
