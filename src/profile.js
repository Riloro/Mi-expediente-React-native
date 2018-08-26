import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from "firebase";
require('firebase/firestore');
import { Container, Content, Card, CardItem, Body,Text } from "native-base";
import LandingPage from "./landingPage";



class Profile extends Component {

    user = firebase.auth().currentUser;
    ref = firebase.firestore().collection("patients").doc(this.user.uid);
    treatmentsRef = firebase.firestore().collection("patients").doc(this.user.uid);
    data = null;
    name = null;
    birthDate = null;
    currentTreatments = null;
    treatmentDate = null;
    medicine = null;
    medicines = [];
    ver = false;
    recetada = null;

    state = {
        name: null,
        birthDay: null,
        medicines: [],
        treatmentDate: null,
        recetada: null
    }
    componentWillMount () {  
        this.ref.onSnapshot(next => {
            //console.log(next.data());
            this.name = next.data().basicInfo.name;
            this.birthDate = next.data().basicInfo.birthDate;
            this.treatmentDate = next.data().lastTreatment.date;
            this.medicines = next.data().lastTreatment.medicine;
            this.recetada = next.data().lastTreatment.prescribedBy.name;
           /* this.medicines = this.medicine.map((valor) => {

            });   
            */     
            this.setState({ name: this.name, birthDay: this.birthDate, treatmentDate: this.treatmentDate,
            medicines: this.medicines, recetada: this.recetada });              
            console.log(this.name);
            this.ver = true;
        });

    }

    
    
   

    cargaDeMedicamentos(){
        return (this.state.medicines.map(medicine =>
            <View>
                <CardItem bordered>
                    <Body>
                        <Text>
                            {`nombre: ${medicine.name}`}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>
                            {`cantidad: ${medicine.dosage.quantity}`}
                        </Text>
                    </Body>
                </CardItem>
                
                <CardItem bordered>
                    <Body>
                        <Text>
                            {`frecuencia: ${medicine.dosage.frequency}`}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>
                            {`Duración: ${medicine.dosage.duration}`}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>
                            {`Notas: ${medicine.notes}`}
                        </Text>
                    </Body>
                </CardItem>
            </View>
            )
        );
    }

    render() {
        return (
            
            <Container style = {{flex: 1}}>
                
                <Content padder style={{ flex: 1 }}>
                    <Card>
                        <CardItem header bordered>
                            <Text>{this.state.name}</Text>
                        </CardItem>

                        <CardItem bordered>
                            <Body>
                                <Text>
                                   {`Fecha de nacimiento: ${this.state.birthDay}`}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text>Último tratamiento</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    {`Fecha: ${this.state.treatmentDate}`}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Text style = {{color: "black"}}>Medicamentos tomados</Text>
                        </CardItem>
                        {this.cargaDeMedicamentos()}
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    {`Recetada por: ${this.state.recetada}`}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
    
            </Container>


            
        );
    }
}

export default Profile;