import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, SafeAreaView, View, TouchableOpacity,TextInput} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import { SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';

class Auth extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    state = {
        selectedTab: 0,
    };

    setTab(tab) {
        this.setState({ selectedTab: tab });
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.Top}>
                    <Icon1
                        name="cloud" size={200} color= "#ffffff"
                    />
                </View>
                <View style={styles.Tab}>
                    <MaterialTabs
                        items={[ 'Sign In','Sign Up']}
                        selectedIndex={this.state.selectedTab}
                        onChange={this.setTab.bind(this)}
                        barColor="#00b9f1"
                        indicatorColor="#ffffff"
                        activeTextColor="white"
                        textStyle={{ fontFamily: 'Papyrus' , fontWeight: 'bold' }}
                    />
                </View>
                <>
                    <View style={styles.Content}>
                        <View style={styles.EmailStyle}>
                            <Icon style={styles.EmailIcon} name="user" size={30}></Icon>
                            <TextInput
                                style={styles.EmailTextInput}
                                placeholder="Email"
                                Icon="User">
                            </TextInput>
                        </View>
                        <View style={styles.Password}>
                            <Icon1 style={styles.PasswordIconStyle} name="lock" size={20}></Icon1>
                            <TextInput
                                style={styles.PasswordTextInput}
                                placeholder="Password"
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity = { .5 }
                            onPress={()=> navigation.navigate('TabBar')}>

                            <Text style={styles.ButtonTextStyle}> Sign In </Text>
                        </TouchableOpacity>
                        <Text style={styles.BetweenStyle}> OR </Text>


                    </View>
                    <View style={styles.Bottom}>
                        <SocialIcon
                            type="facebook"
                            onPress={() => {
                                alert('facebook');
                            }}
                        />
                        <SocialIcon
                            type="twitter"
                            onPress={() => {
                                alert('twitter');
                            }}
                        />
                    </View>
                </>

            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    Top: {
        flex: 3,
        backgroundColor: '#00b9f1',
        justifyContent:'center' ,
        alignItems:"center",
    },
    Tab: {
        flex: 1,
        backgroundColor: '#00b9f1',
    },
    Content: {
        flex: 7,
        justifyContent:'center' ,
        alignItems:"center",
        flexDirection:'column' ,
        backgroundColor: '#ffffff',
    },
    Bottom: {
        flex: 1,
        justifyContent:'center' ,
        alignItems:"center",
        flexDirection:'row' ,
        backgroundColor: '#ffffff',
        marginBottom: '3%'
    },
    SubmitButtonStyle: {
        position: 'absolute',
        bottom:'3%',
        backgroundColor:'#ff3a00',
        borderRadius:25,
        borderWidth: 1,
        alignItems:"center",
        borderColor: '#fff',
        width : '50%',
        height : '7%',
        marginBottom:'10%'
    },

    ButtonTextStyle:{
        color:'#ffffff',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: '5.2%',
    },
    EmailTextInput:{
        marginTop: '5%',
        width: '85%',
        borderBottomColor: '#edeff1',
        borderBottomWidth: 1,
    },
    PasswordTextInput:{
        width: '85%',
        borderBottomColor: '#edeff1',
        borderBottomWidth: 3,
    },
    EmailStyle: {
        position: 'absolute',
        top:'5%',
        flexDirection:'row' ,
    },
    EmailIcon:{
        marginTop: '10%',
    },
    PasswordIconStyle:{
        marginTop: '6%',
    },
    Password: {
        position: 'absolute',
        top:'23%',
        flexDirection:'row' ,
    },
    BetweenStyle: {
        position: 'absolute',
        bottom:'2%',
        color:'#828385',
        fontWeight: 'bold',
        marginBottom: '0%',
        fontSize: 14,
    },

});

export default Auth;
