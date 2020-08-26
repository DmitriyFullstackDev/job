import React, { Fragment } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,  
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faFacebook } from '@fortawesome/free-brands-svg-icons';

import FormInput from '../../component/ValidationCompenent/FormInput';
import FormButton from '../../component/ValidationCompenent/FormButton';
import ErrorMessage from '../../component/ValidationCompenent/ErrorMessage';
import Firebase from '../../../config/Firebase';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required()
    .min(2, 'Must have at least 2 characters'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(8, 'Password must have more than 8 characters '),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
    .required('Confirm Password is required')
})

export default class SignupScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordhide: true,
      date: '',
      errorMessage: null
    }
  }

  componentDidMount() {
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.setState({
      date:
        weekday[new Date().getDay()] + ',  ' + Months[new Date().getMonth()] + '  ' + new Date().getDate() + ',  ' + new Date().getFullYear(),
    });
  }

  goToLogin = () => this.props.navigation.navigate('SignIn');

  handleSubmit = values => {
    Firebase.auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(function(result){setTimeout(() => {
        this.props.navigation.navigate('TabBar')
      }, 500)}.bind(this))
      .catch(error => this.setState({ errorMessage: error.message }))

      Firebase.database().ref('/User_info').push({
        mail_address: values.email,  
        name: values.name
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView Style={styles.container}>
        <Image source={require('../../../assets/images/Sign_In.png')} style={styles.backgroundImage} />
        <TouchableOpacity style={styles.backButton} onPress = {this.goToLogin}>
          <FontAwesomeIcon icon = {faArrowLeft} color="#144238" size={20}/>
        </TouchableOpacity>        
        <View style={styles.centerContainer}>
          <Text style={styles.tittleText}>Are you ready to discover your inner wonders?</Text>
          <Text style={styles.dateText}>{this.state.date}</Text>
          <Text style={styles.captionlabel}>Sign Up</Text>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            onSubmit={values => {
              this.handleSubmit(values)
            }}
            validationSchema={validationSchema}>
            {({
              handleChange,
              values,
              handleSubmit,
              errors,
              isValid,
              touched,
              handleBlur,
              isSubmitting
            }) => (
                <Fragment>
                  <FormInput
                    name='name'
                    value={values.name}
                    onChangeText={handleChange('name')}
                    placeholder='Enter your full name'
                    iconName='md-person'
                    iconColor='#2C384A'
                    onBlur={handleBlur('name')}
                  // autoFocus
                  />
                  <ErrorMessage errorValue={touched.name && errors.name} />
                  <FormInput
                    name='email'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder='Enter email'
                    autoCapitalize='none'
                    iconName='ios-mail'
                    iconColor='#2C384A'
                    onBlur={handleBlur('email')}
                  />
                  <ErrorMessage errorValue={touched.email && errors.email} />
                  <FormInput
                    name='password'
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder='Enter password'
                    secureTextEntry
                    iconName='ios-lock'
                    iconColor='#2C384A'
                    onBlur={handleBlur('password')}
                  />
                  <ErrorMessage errorValue={touched.password && errors.password} />
                  <FormInput
                    name='password'
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    placeholder='Confirm password'
                    secureTextEntry
                    iconName='ios-lock'
                    iconColor='#2C384A'
                    onBlur={handleBlur('confirmPassword')}
                  />
                  <ErrorMessage
                    errorValue={touched.confirmPassword && errors.confirmPassword}
                  />
                  <FormButton
                    buttonType='outline'
                    onPress={handleSubmit}
                    title='Sign Up'
                    buttonColor='#fff'
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                    buttonStyle={styles.signUpButton}
                  />
                  <Text style={styles.orText}>Or</Text>
                  <TouchableOpacity style={styles.facebookButton} onPress={()=>{navigate('SignUp')}}>
                    <FontAwesomeIcon icon = {faFacebookSquare} color="#fff" size={20}/>
                    <Text style={styles.facebookButtonText}>Sign up with Facebook</Text>
                  </TouchableOpacity>
                </Fragment>
              )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}