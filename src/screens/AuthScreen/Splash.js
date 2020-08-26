import React, { Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground,StyleSheet} from 'react-native';

export default  class Splash extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigation } = this.props;
        return(
            <View style={styles.container}>
                <ImageBackground  style={styles.gifImage} source={require('../../../assets/images/splash/backAni.gif')} >
                    <View style={styles.Content}>
                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity = { .6 }
                            onPress={()=> navigation.navigate('TabBar')}>
                            <Text style={styles.ButtonTextStyle}> Find Experts </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Footer}>
                        <TouchableOpacity
                            style={styles.SignInButtonStyle}
                            underlayColor='#fff'
                            onPress={()=> navigation.navigate('Auth')}>
                            <Text style={styles.SignInText}>SignIn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.BEButtonStyle}
                            underlayColor='#fff'
                            onPress={()=> navigation.navigate('TabBar')}>
                            <Text style={styles.BETextStyle}>Become Expert</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200
    },
    gifImage:{
        height:'100%',
        width:'100%',
        position: 'relative'
    },
    spinner: {
        marginTop: 200
    },
    Top: {
        flex: 1,
        backgroundColor: '#2196f3',
        opacity: 0.8,
    },
    Content: {
        flex: 10,
        justifyContent:'flex-end' ,
        alignItems:"center"
    },

    Footer:  {
        flex: 1,
        flexDirection:'row'
    },

    SubmitButtonStyle: {
        backgroundColor:'#32cd32',
        borderRadius:25,
        alignItems:"center",
        width : '75%',
        height : '7%',
        marginBottom: '10%'
    },

    ButtonTextStyle:{
        color:'#ffffff',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: '1.8%',
    },

    SignInButtonStyle:{
        width: '30%',
        height:50,
        marginRight:20,
        marginLeft:10,
        paddingTop:5,
        paddingBottom:20,
        backgroundColor:'#8921a1',
        borderRadius:10,
    },
    SignInText:{
        textAlign:'center',
        color:'#f9a634',
        fontWeight: 'bold',
        fontSize: 24,
    },
    BEButtonStyle:{
        width: '50%',
        height:50,
        marginRight:20,
        marginLeft:40,
        paddingTop:5,
        paddingBottom:20,
        backgroundColor:'#8921a1',
        borderRadius:10,
    },
    BETextStyle:{
        textAlign:'center',
        color:'#f9a634',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop:'2%'
    },
    TitleStyle:{
        color:'#121213',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: '2%',
        marginTop: '1.2%',
    }
})
