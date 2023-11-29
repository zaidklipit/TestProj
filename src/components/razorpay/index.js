import React from 'react'
import {Text, View, Button, Image, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import PrimaryButton from '../button';

const imgURL = 'https://media.licdn.com/dms/image/D4D0BAQHSZlAHPAsQzQ/company-logo_200_200/0/1691481417385/klipit_logo?e=2147483647&v=beta&t=7ieDYPq0ZqaPbxqSqDnYYoFxi7vIp916kybVz2zVKX4';


const RazorpayPayment = () => {

    const onPressBuy = () => {
        //Order Api: Call POST api with body like (username, id, price etc) to create an Order and use order_id in below options object
        // const response = await .....
    
        let options = {
            description: 'klipit testing payment',
            image: imgURL, //require('../../images.png')
            currency: 'INR', //In USD - only card option will exist rest(like wallet, UPI, EMI etc) will hide
            key: 'rzp_test_HyV81tZZivWlmz',
            amount: '10000',
            name: 'Klipit',
            order_id: '',//Replace this with an order_id created using Orders API.
            prefill: {
                email: 'zaid@test',
                contact: '919027346976',
                name: 'Zaid Ahmed'
            },
            theme: {color: '#35c937'},
        };
        RazorpayCheckout.open(options)
        .then(data => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        })
        .catch(error => {
            // handle failure
        // alert(`Error: ${error.code} | ${error.description}`);
        });
      };

    return (
        <View style={styles.container}>
            <PrimaryButton 
                title="Razorpay Payment"
                onPress={onPressBuy} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default RazorpayPayment
