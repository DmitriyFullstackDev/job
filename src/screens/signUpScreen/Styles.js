import { StyleSheet } from 'react-native';
import { create, PREDEF_RES } from 'react-native-pixel-perfect'
import { Dimensions } from 'react-native';

const perfectSize = create(PREDEF_RES.iphoneX.dp)
const div_height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
        backgroundImage: {
            position: "absolute",
            // resizeMode: "stretch",
            top:0,
            width: "100%",
            height: "100%",
            opacity: 0.9
        },
        backButton: {
            position: "absolute",
            top: 10,
            left: 20,
            width: '100%'
        },
        centerContainer: {
            width: '100%',
            height: div_height,
            padding: perfectSize(40),
            justifyContent: 'center',
            },
            tittleText: {
                marginTop: -30,
                fontFamily: 'Poppins-Bold',
                fontSize: perfectSize(18),
                alignSelf: 'center',
                color: '#fff'
            },
            dateText: {
                fontFamily: 'Poppins-Regular',
                fontSize: perfectSize(13),
                marginTop: perfectSize(10),
                alignSelf: 'center',
                color: '#fff'
            },
            captionlabel: {
                fontFamily: 'Poppins-Bold',
                fontSize: perfectSize(30),
                letterSpacing: 3,
                alignSelf: 'center',
                marginTop: perfectSize(20),
                marginBottom: perfectSize(16),
                color: '#fff'
            },
            signUpButton: {
                width: '80%',
                height: perfectSize(40),
                marginTop: perfectSize(20),
                borderColor: '#fff',
                // backgroundColor: '#fff',
                alignSelf: 'center',
                borderWidth: 1,
                borderRadius: perfectSize(13),
            }, 
            orText: {
                fontFamily: 'Poppins-Regular',
                marginTop: perfectSize(20),
                fontSize: perfectSize(10),
                color: '#fff',
                alignSelf: 'center',
            },
            facebookButton: {
                width: '80%',
                flexDirection: 'row',
                height: perfectSize(40),
                marginTop: perfectSize(20),
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                // borderColor: '#fff',
                // borderWidth: 1,
                borderRadius: perfectSize(13),
                backgroundColor: '#042E6D',
                },
                facebookButtonText: {
                    fontFamily: 'Poppins-Bold',
                    fontSize: perfectSize(16),
                    marginLeft: perfectSize(30),
                    color: '#fff',
                },
});

export default styles;