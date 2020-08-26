import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../utils/colors';
import {
        VendorsListing,CategoryListing,VendorDetail, ContactVendor, FavouriteListing } from '../screens/tabBarScreens';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    faHome,
    faPhotoVideo,
    faCommentAlt,
    faComment,
    faUserAlt,
    faUser,
    faSearch, faRibbon, faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Home= createStackNavigator(
  {
    VendorsListing   : { screen: VendorsListing },

  },
  {
    initialRouteName : 'VendorsListing',
    headerMode : 'none'
  }
);


const Favourite = createStackNavigator(
  {
    FavouriteLIst   : { screen: FavouriteListing },
  },
  {
    initialRouteName : 'FavouriteLIst',
    headerMode : 'none'
  }
);

const categoryList = createStackNavigator(
    {
        CategoryListing  : { screen: CategoryListing },
        VendorsListing: { screen: VendorsListing },
        VendorDetail: { screen: VendorDetail },
        ContactVendor: { screen: ContactVendor },
        FavouriteListing: { screen: FavouriteListing },
    },
    {
        initialRouteName : 'CategoryListing',
        headerMode : 'none'
    }
)

const Search = createStackNavigator(
  {
    CategoryList  : { screen: categoryList },
  },
  {
    initialRouteName : 'CategoryList',
    headerMode : 'none'
  }
);
const TabNavigation = createBottomTabNavigator(
    {
      Home,
      Favourite,
      Search,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let IconComponent = Icon;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'faArrowLeft';
            if (focused === true){
              tintColor=color.home_tab;
            }
            return <FontAwesomeIcon icon = {faHome} color={tintColor} size={25}/>
          }  else if (routeName === 'Favourite') {
            iconName = 'faArrowLeft';
            if (focused === true){
              tintColor=color.talks_tab;
            }
            return <FontAwesomeIcon icon = {faHeart} color={tintColor} size={25}/>
          } else if (routeName === 'Search') {
            iconName = 'faArrowLeft';
            if (focused === true){
              tintColor=color.profile_tab;
            }
            return <FontAwesomeIcon icon = {faSearch} color={tintColor} size={25}/>
          }
          // return <IconComponent name={iconName} size={25} color={tintColor} />;
          // return <FontAwesomeIcon icon = {{iconName}} color={tintColor} size={25}/>
        },
      }),
      tabBarOptions: {
        activeTintColor: color.primary,
        inactiveTintColor: 'gray',
      },
    },
  );

export default createAppContainer(TabNavigation);




