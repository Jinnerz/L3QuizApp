import React, {useState} from 'react';
import {View, ScrollView, Text, Button, Image, Alert, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6"

const styles = StyleSheet.create({
    Parent: {
        backgroundColor: 'black',
        marginTop: 50,
        padding: 10
    },
    Child: {
        backgroundColor: 'white',
        borderColor: 'blue',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    Image: {
        marginTop: 10,
        width: 300,
        height: 200,
    },
    Title: {
        color:'green',
        textTransform:'uppercase',
        padding: 10,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center"
    },
    TitleBox: {
        flexDirection:'row',
        alignSelf:'center',
        backgroundColor: 'gray',
    },
    Book: {
        alignSelf:'center',
    },
    Question: {
        backgroundColor:'black',
        textAlign:'center',
        color:'red',
        padding: 5,
        marginBottom: 5,
        marginTop: 5,
        width: '90%',
        textTransform:'uppercase',
    }
})

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
            <View style={styles.Parent}>

                {/*Using another view container, I can achieve more flexibility on layouts*/}
                <View style={styles.TitleBox}>
                    <Icon  style={[styles.Book, {paddingLeft: 5}]} name="book" size={20} color="#FFFFFF"/>
                    <Text style={styles.Title}>Welcome to the Animal Quiz!</Text>
                    <Icon  style={[styles.Book, {paddingRight: 5}]} name="book" size={20} color="#FFFFFF"/>
                </View>


                <View style={styles.Child}>
                    {/*Question 1*/}
                    <Image source={require('./img/leopard.jpg')} style={styles.Image} />
                    <Text style={styles.Question}>What animal is this?</Text>
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
                </View>


                <View style={styles.Child}>
                    {/*Question 2*/}
                    <Image source={require('./img/tiger.jpg')} style={styles.Image} />
                    <Text style={styles.Question}>What animal is this?</Text>
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
                </View>


                <View style={styles.Child}>
                    {/*Question 3*/}
                    <Image source={require('./img/zebra.jpg')} style={styles.Image} />
                    <Text style={styles.Question}>What animal is this?</Text>
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
                </View>

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
