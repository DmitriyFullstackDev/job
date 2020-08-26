import React, { Component } from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
import { Header } from 'react-native-elements';
import { Icon } from 'native-base';
import TabBarScreen from '../../navigations/TabBarNavigation'
import Modal from 'react-native-modal';

export default  class HomeDrawer extends Component {
    static navigationOptions = {
        header: null,
        drawerIcon: ({ tintColor }) => (
            <Icon name="log-out" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    state = {
        isModalVisible: false,
    };

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };
    componentDidMount() {
        this.props.navigation.navigate('TabBar');
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderTitle}>Select Language</Text>
                        </View>
                        <ScrollView style={styles.modalContent}>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>English</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Spanish</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Mandarin Chinese</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Hindi</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>French</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Standard Arabic</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Bengali</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Russian</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Portuguese</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Spanish</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Indonesian</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Western Punjabi</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.itemContent}>
                                <TouchableOpacity
                                    style={styles.languageItem} onPress={this.toggleModal}>
                                    <Text style={{color:'#000000', fontWeight:'bold', fontSize:24, textAlign:'center'}}>Marathi</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<Text style={{fontSize:17,  fontFamily: 'Poppins-Bold'}}>Home</Text>}
                    rightComponent={<Icon name="planet" onPress={this.toggleModal}/>}
                />
                <TabBarScreen />
            </View>
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
    },
    menuStyle: {
        marginRight: 12
    },
    menuTriggerStyle: {
        marginLeft: 50
    },
    menuOptionsStyle: {
        width: 200
    },
    modalView:{
        width: '70%',
        marginLeft:'15%',
        backgroundColor: '#ffffff',
        borderRadius:20,
    },
    modalHeader:{
        flex: 1,
        color: '#15970d'
    },
    modalHeaderTitle:{
        fontSize:24,
        color:'#ffffff',
        height:40,
        backgroundColor: '#003af3',
        textAlign:'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius:20
    },
    modalContent:{
        width: 400,
        height: 500,
        marginTop: 50,
    },
    modalFooter:{
        position:'absolute',
        bottom:0
    },
    itemContent:{
        marginBottom:'2%'
    },
    languageItem:{
        borderColor:'#2135d9',
        marginLeft:'10%',
        borderWidth:1,
        alignItems:'center',
        width:'50%',
        borderRadius:5,
    }
});

