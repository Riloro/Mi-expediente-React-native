import { View, Text } from "react-native";
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import firebase from "firebase";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Profile from "./profile";
import Tratamiento from "./Tratamientos";



class LandingPage extends Component {
    state = {
        page: "profile"
    }

    renderSelectedTab(){
        switch (this.state.page) {
            case "profile":
                return <Profile/>
                break;
        
            case "tratamientos":
                return <Tratamiento/>
            default:
                break;
        }
    }

   
    render() {
        return (

                <Container>
                    
                    
                <Content>
                    {this.renderSelectedTab()}
                </Content>
                    <Footer>
                        <FooterTab style={{ backgroundColor: '#00b0ff' }}>
                            <Button style={{ paddingLeft: 0, paddingRight: 0 }} onPress = {()=>{this.setState({page:"profile"})}}>
                                <Text style={styles.text}>Perfil</Text>
                            </Button>
                            <Button style={{ paddingLeft: 0, paddingRight: 0 }} onPress={() => { this.setState({ page: "tratamientos" }) }}>
                                <Text style={styles.text}>Tratamientos</Text >
                            </Button>
                             <Button style={{ paddingLeft: 0, paddingRight: 0 }} onPress={() => { this.setState({ page: "Doctors" }) }}>
                                <Text style={styles.text}>Doctores</Text>
                            </Button>
                            <Button style={{ paddingLeft: 0, paddingRight: 0 }} onPress={() => { this.setState({ page: "conf" }) }}>
                                <Text style={styles.text}>Configuración</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                    
                </Container>      
        );
    }
}

export default LandingPage;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 12,
    },
};