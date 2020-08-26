import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'native-base';
import { create, PREDEF_RES } from 'react-native-pixel-perfect'

const perfectSize = create(PREDEF_RES.iphoneX.dp)


class Profile extends Component {
    render() {
      // const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <Header
            leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
            centerComponent={<Text style={{fontSize:20, marginTop: 15, fontFamily: 'Poppins-Bold'}}>Profile Screen</Text>}
          />

          <ScrollView style={styles.mainContent}>
            <View style={styles.content1_Container}>
              <Text style={styles.content1_textTop}>Last practice</Text>
              <Text style={styles.content1_textBottom}>Saturday, Jan 22, 2020</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.contect2_group}>
              <View style={styles.contect2_top}>
                <View style={styles.content_textContainer}>
                  <Text style={styles.content_textTop}>8 mins</Text>
                  <Text style={styles.content_textBottom}>Daily Average Time</Text>
                </View>
                <View style={styles.content_textContainer}>
                  <Text style={styles.content_textTop}>2 days</Text>
                  <Text style={styles.content_textBottom}>Daily Consecutive Days</Text>
                </View>
              </View>
              <View style={styles.contect2_bottom}>
                <View style={styles.content_textContainer}>
                  <Text style={styles.content_textTop}>1 weeks</Text>
                  <Text style={styles.content_textBottom}>Consecutive Weeks</Text>
                </View>
                <View style={styles.content_textContainer}>
                  <Text style={styles.content_textTop}>1 months</Text>
                  <Text style={styles.content_textBottom}>Consecutive Months</Text>
                </View>
              </View>
            </View>
            <View style={styles.content3_Container}>
              <Text style={styles.content3_textTop}>Total Number of Sessions</Text>
              <Text style={styles.content3_textBottom}>1</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.content4_Container}>
              <Text style={styles.content4_textTop}>Total Time Meditating</Text>
              <Text style={styles.content4_textBottom}>30</Text>
            </View>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.content5_Container}>
              <Text style={styles.content5_text}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.content5_Container} onPress ={()=>this.props.navigation.navigate('HomeSubScription')}>
              <Text style={styles.content5_text}>Subscription</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <View style={styles.line}/>
            <TouchableOpacity style={styles.content5_Container} onPress ={()=>this.props.navigation.navigate('LogOut')} >
              <Text style={styles.content5_text}>Logout</Text>
            </TouchableOpacity>
            <View style={styles.line}/>
            <View style={styles.content6_Container}>
              <Text style={styles.content6_text}>Davyd</Text>
              <Text style={styles.content6_text}>Android Version 1.2.0</Text>
            </View>
          </ScrollView>
        </View>
      );
    }
}

export default Profile

const styles = StyleSheet.create ({
  container: {
      marginTop: (-30),
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  icon:{
      width: 30,
      height: 30,
      marginLeft: 10,
      marginTop: 10
  },

  backgroundPart: {
      width: '100%',
      marginTop:(-4),
  },

  TopBarBackImage:{
      width: '100%',
      resizeMode: 'contain',
  },

  profileImageContainer: {
      marginTop: perfectSize(-230),
      alignSelf: 'center',
  },

  profileImage: {
      width: perfectSize(100),
      height: perfectSize(100),
      marginTop: perfectSize(36),
      resizeMode: 'contain',
      borderRadius: perfectSize(50),
  },
  profilestatusitem: {
      marginTop:perfectSize(-30),
      marginLeft:perfectSize(80),
      alignItems: 'center'
  },
  profileheading: {
      fontFamily: 'Poppins-Bold',
      fontSize: perfectSize(24),
      lineHeight: perfectSize(36),
      textAlign: 'center',
      marginTop: perfectSize(30),
      color: '#ffffff'
  },
  profilestatusitem1: {
      marginTop:perfectSize(-30),
      marginLeft:'70%',
      alignItems: 'center'
  },
  mainContent: {
      width: '100%',
      marginTop:perfectSize(30),
  },

  content1_Container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      marginTop:perfectSize(10),
      marginBottom: perfectSize(10),
      marginLeft: perfectSize(25),
  },

  content1_textTop: {
      fontFamily: 'Poppins-Bold',
      fontSize: perfectSize(20),
      color: '#000'
  },

  content1_textBottom: {
      fontFamily: 'Poppins-Regular',
      fontSize: perfectSize(13),
      letterSpacing: 1.25,
      lineHeight:22,
      marginTop: perfectSize(0),
      color: '#707070',
      opacity: 1
  },

  line:{
      width:'130%',
      height:perfectSize(1),
      backgroundColor: '#E1E1E1',
  },
  contect2_group:{
      flexDirection:'column',
      flex: 2
  },
  contect2_top:{
      flexDirection:'row',
      flex: 2,
  },
  contect2_bottom:{
      flexDirection:'row',
      flex: 2,
  },
  content_textContainer: {
      flexDirection: 'column',
      width: '50%',
      alignItems: 'center',
      paddingTop:perfectSize(15),
      paddingBottom:perfectSize(15),
      borderWidth: 1,
      borderColor: '#E1E1E1',
  },

  content_textTop: {
      fontFamily: 'Poppins-Bold',
      fontSize: perfectSize(20),
      color: '#000'
  },

  content_textBottom: {
      fontFamily: 'Poppins-Regular',
      fontSize: perfectSize(13),
      letterSpacing: 1.25,
      lineHeight:22,
      marginTop: perfectSize(0),
      color: '#707070',
      opacity: 1
  },

  content3_Container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '30%',
      marginTop:perfectSize(20),
      marginBottom: perfectSize(20),
      marginLeft: perfectSize(25),
  },

  content3_textTop: {
      fontFamily: 'Poppins-Bold',
      fontSize: perfectSize(20),
      color: '#4E4E4E'
  },

  content3_textBottom: {
      fontFamily: 'Poppins-Regular',
      fontSize: perfectSize(20),
      letterSpacing: 1.25,
      lineHeight:22,
      marginTop: perfectSize(20),
      color: '#000',
      opacity: 1
  },
  content4_Container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      marginTop:perfectSize(20),
      marginBottom: perfectSize(50),
      marginLeft: perfectSize(25),
  },

  content4_textTop: {
      fontFamily: 'Poppins-Regular',
      fontSize: perfectSize(14),
      color: '#4E4E4E'
  },

  content4_textBottom: {
      fontFamily: 'Poppins-Bold',
      fontSize: perfectSize(20),
      letterSpacing: 1.25,
      lineHeight:22,
      marginTop: perfectSize(20),
      color: '#4E4E4E',
      opacity: 1
  },

  content5_Container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      marginTop:perfectSize(10),
      marginBottom: perfectSize(10),
      marginLeft: perfectSize(25),
  },

  content5_text: {
      fontFamily: 'Poppins-Bold',
      fontSize: perfectSize(20),
      color: '#7E4E7E'
  },
  content6_Container: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      marginTop:perfectSize(30),
      marginBottom: perfectSize(30),
  },

  content6_text: {
      fontFamily: 'Poppins-Regular',
      fontSize: perfectSize(14),
      color: '#000',
      opacity: 0.36
  },
});
