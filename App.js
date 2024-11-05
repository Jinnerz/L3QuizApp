import React, {useState} from 'react';
import {View, ScrollView, Text, Button, Image, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6"

// this function expects qn1, qn2, qn3 variables to be passed in from somewhere (the app)
const handleSubmit = ({qn1, qn2, qn3})=> {
    let correct = 0;
    let wrong = 0;
    if (qn1 === "Leopard") {
        correct = correct + 1;
    } else {
        wrong = wrong + 1;
    }

    if (qn2 === "Tiger") {
        correct = correct + 1;
    } else {
        wrong = wrong + 1;
    }

    if (qn3 === "Zebra") {
        correct = correct + 1;
    } else {
        wrong = wrong + 1;
    }

    // template literals, allow for functions in strings to also be displayed
    let message = `You have gotten ${correct} questions correct and ${wrong} questions wrong!`;

    return(message);
}

const myApp = ()=> {
    const [qn1, setQn1] = useState('');
    const [qn2, setQn2] = useState('');
    const [qn3, setQn3] = useState('');


    return (
        // directly applying style to ScrollView has caused issue, thus using View to do that instead
        <ScrollView >
            <View style={{padding:6, paddingTop:50 }}>

                {/*Using another view container, i can achieve more flexibility on layouts*/}
                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Icon name="book" size={20} />
                    <Text style={{color:'green', alignSelf: 'center', textTransform:'uppercase', paddingBottom: 10, paddingLeft: 5, paddingRight: 5}}>Welcome to the Animal Quiz!</Text>
                    <Icon name="book" size={20} />
                </View>


                {/*Question 1*/}
                <Text style={{textAlign:'center',color:'red', textDecorationLine:'underline'}}>What animal is this?</Text>
                <Image source={require('./img/leopard.jpg')} style={{width:400, height:200}} />
                <RNPickerSelect
                    onValueChange={(value)=> setQn1(value)}
                    items={ [
                        { label: 'Rabbit', value: 'Rabbit' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Tiger', value: 'Tiger' },
                        { label: 'Zebra', value: 'Zebra' }
                    ]}
                />

                {/*Question 2*/}
                <Text style={{textAlign:'center',color:'red', textDecorationLine:'underline'}}>What animal is this?</Text>
                <Image source={require('./img/tiger.jpg')} style={{width:400, height:200}} />
                <RNPickerSelect
                    onValueChange={(value)=> setQn2(value)}
                    items={ [
                        { label: 'Rabbit', value: 'Rabbit' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Tiger', value: 'Tiger' },
                        { label: 'Zebra', value: 'Zebra' }
                    ]}
                />

                {/*Question 3*/}
                <Text style={{textAlign:'center',color:'red', textDecorationLine:'underline'}}>What animal is this?</Text>
                <Image source={require('./img/zebra.jpg')} style={{width:400, height:200}} />
                <RNPickerSelect
                    onValueChange={(value)=> setQn3(value)}
                    items={ [
                        { label: 'Rabbit', value: 'Rabbit' },
                        { label: 'Deer', value: 'Deer' },
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Tiger', value: 'Tiger' },
                        { label: 'Zebra', value: 'Zebra' }
                    ]}
                />

                {/*calling a function in the alert, to handle the message to be sent, as well as calculating correct/wrong questions*/}
                <Button
                    onPress={() => Alert.alert(handleSubmit({qn1, qn2, qn3}))}
                    title='SUBMIT ANSWERS'
                />
            </View>
        </ScrollView>
    )
}

export default myApp;
