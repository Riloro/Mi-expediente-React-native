import React from 'react';
import { Scene, Router, Actions, ActionConst, StatusBar } from 'react-native-router-flux';
import LogInForm from "./LogInForm";
import RegistrationForm from './RegistrationForm';
import LandingPage from "./landingPage";
import Profile from "./profile";

const RouterComponent = () => {
    return(
        
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}
            barButtonTextStyle={styles.barButtonTextStyle}
            barButtonIconStyle={styles.barButtonIconStyle}
            >
    
            <Scene key = 'Dad' hideNavBar>

                <Scene key='start'>
                    <Scene key='LogIn' component={LogInForm}
                        title='Mi Expediente' initial
                         />
                    <Scene key='registrationForm' component={RegistrationForm}
                        title='Registro'
                         />
                </Scene>
                
                <Scene key='main' type={ActionConst.RESET}>
                    <Scene key = 'landingPage' component = {LandingPage}
                        title = 'Mi Expediente'
                    />
                    <Scene key='profile' component = {Profile}
                        title='Perfil'
                    />
                    
                </Scene>

            </Scene>

        </Router>
    
        )
    }
    
    
const styles = {
        navBar: {
            backgroundColor: '#00b0ff',
        },
    navBarTitle:{
                color: 'white'
        },
    barButtonTextStyle:{
                color: '#1db954'
        },
    barButtonIconStyle: {
                tintColor: '#1db954'
        },
    }
export default RouterComponent;