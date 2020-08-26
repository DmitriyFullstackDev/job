
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import React from 'react';
import { Text, SafeAreaView, ScrollView, Dimensions, View, Image } from 'react-native';
import { Icon } from 'native-base';
import { HomeDrawer,Profile,BecomeExpert, LogOut, ContactUs, Faq, AdminTask  } from '../screens/slideMenuScreen';

const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 220, backgroundColor: '#C6C2C7', opacity: 0.9 }}>
        <View style={{ height: 170, backgroundColor: '#C6C2C7', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/images/Abbott.jpg')} style={{ height: 120, width: 120, borderRadius: 60, marginTop: 30 }} />
        </View>
        <View style={{ height: 50, backgroundColor: '#C6C2C7', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize: 20, color:'red', fontFamily: 'Poppins-Bold'}}>David Cueva</Text>
        </View>
      </View>

      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>

    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator({
    TabBar: {
      screen: HomeDrawer,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        ),
        title: 'Home',
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Icon name="people" style={{ fontSize: 24, color: tintColor }} />
        ),
        title: 'Profile'
      }
    },
    BecomeExpert: {
      screen: BecomeExpert,
      navigationOptions: {
          drawerIcon: ({ tintColor }) => (
              <Icon name="rocket" style={{ fontSize: 24, color: tintColor }} />
          ),
        title: 'Become Expert'
      }
    },
    SignOut: {
      screen: LogOut,
      navigationOptions: {
          drawerIcon: ({ tintColor }) => (
              <Icon name="log-out" style={{ fontSize: 24, color: tintColor }} />
          ),
        title: 'Sign Out'
      }
    },
    ContactUs: {
        screen: ContactUs,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="contacts" style={{ fontSize: 24, color: tintColor }} />
            ),
            title: 'ContactUs'
        }
    },
    Faq: {
        screen: Faq,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="desktop" style={{ fontSize: 24, color: tintColor }} />
            ),
            title: 'Support/FAQ'
        }
    },
    AdminTask: {
        screen: AdminTask,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                <Icon name="filing" style={{ fontSize: 24, color: tintColor }} />
            ),
            title: 'AdminTasks'
        }
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2
  });

  export default createAppContainer(Drawer);
