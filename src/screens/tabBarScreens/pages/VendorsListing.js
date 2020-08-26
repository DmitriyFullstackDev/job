import React, { Component } from 'react';
import { Dimensions,View, Text, StyleSheet, TouchableOpacity,ScrollView,FlatList } from 'react-native';
import {
    faShoppingBag,
    faShoppingBasket,
    faMeh,
    faBan,
    faMarsStroke,
    faDemocrat,
    faDesktop, faRibbon, faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { SearchBar } from 'react-native-elements';
// import SearchBar from '../../common/SearchBar';
const {width, height} = Dimensions.get("window");
export default class VendorsListing extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.dataItems = [{
            id: 1,
            color: '#76b831',
            icon:faShoppingBasket
        },{
            id: 2,
            color: '#31b87e',
            icon:faShoppingBag
        },{
            id: 3,
            color: '#314eb8',
            icon:faDemocrat
        }, {
            id: 4,
            color: '#af31b8',
            icon:faDesktop
        }, {
            id: 5,
            color: '#b89631',
            icon:faHeart
        }];
        this.dataItems1 = [{
            id: 1,
            color: '#b89631',
            icon:faHeart
        },{
            id: 2,
            color: '#314eb8',
            icon:faDemocrat

        },{
            id: 3,
            color: '#af31b8',
            icon:faDesktop
        }, {
            id: 4,
            color: '#31b87e',
            icon:faShoppingBag

        }, {
            id: 5,
            color: '#76b831',
            icon:faShoppingBasket

        }];
        this.dataItems2 = [{
            id: 1,
            color: '#76b831',
            icon:faShoppingBasket
        },{
            id: 2,
            color: '#af31b8',
            icon:faDesktop
        },{
            id: 3,
            color: '#314eb8',
            icon:faDemocrat
        }, {
            id: 4,
            color: '#31b87e',
            icon:faShoppingBag

        }, {
            id: 5,
            color: '#b89631',
            icon:faHeart
        }];
    }

    renderItem = ({item}) => {
        return (
            <View style={{ width: 140,
                height: 140,
                backgroundColor: item.color,
                borderRadius:10,
                borderColor:'#0025ff',
                margin: 10}}>
                <TouchableOpacity style={{paddingTop:20, paddingLeft:20}} onPress={() => {
                    this.removeItem(item.id);
                }}>
                    <FontAwesomeIcon style={styles.scrollItem} icon = {item.icon} size={80} color={'white'}/>
                </TouchableOpacity>
            </View>
        )
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <View style={styles.container}>
                    <View style={{width:'100%',height: 50, marginBottom:30}}>
                        <SearchBar placeholderTextColor={'#ffffff'} selectionColor={'#ffffff'}  placeholder="Search..."/>
                    </View>
                    <View style={{height: 190, width: '100%' ,marginBottom:'5%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.scrollTitle}>Popular Services</Text>
                            <Text style={{ color: '#ffa100',fontWeight:'bold',fontSize:18, marginTop:4, marginLeft:'25%' }}>Show All</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.dataItems}
                            renderItem={this.renderItem}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                        />
                    </View>
                    <View style={{height: 190, width: '100%' ,marginBottom:'5%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.scrollTitle}>Newly Added Services</Text>
                            <Text style={{ color: '#ffa100',fontWeight:'bold',fontSize:18, marginTop:4, marginLeft:'10%' }}>Show All</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.dataItems1}
                            renderItem={this.renderItem}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                        />
                    </View>
                    <View style={{height: 190, width: '100%' ,marginBottom:'5%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.scrollTitle}>Special Offer Services</Text>
                            <Text style={{ color: '#ffa100',fontWeight:'bold',fontSize:18, marginTop:4, marginLeft:'10%' }}>Show All</Text>
                        </View>
                        <FlatList
                            horizontal
                            data={this.dataItems2}
                            renderItem={this.renderItem}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => `${item.id}`}
                        />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1,
    },button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 20
    },
    scrollTitle:{
          fontSize:28,
        fontWeight:'bold',
        marginLeft:10

    },
    scrollItem:{
        width: 140,
        height: 140,
        borderRadius:10,
        borderColor:'#0025ff',
        margin: 10
    },
    scrollIcon:{
        position:'absolute',
        paddingRight: 50,
        alignItems:'center'
    }

})
