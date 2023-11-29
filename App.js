import React, { useState } from 'react'
import {Button, Image, StyleSheet, Text, View , TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import RazorpayPayment from './src/components/razorpay';
import PaypalPayment from './src/components/PaypalPayment';

const App = () => {

    const [isPaypal, setIsPaypal] = useState(false);

    return (
        <SafeAreaView style={styles.container} >
            <View style={{width: '100%', padding: 20,}} >
                {!isPaypal && <RazorpayPayment />}

                <PaypalPayment 
                    isPaypal={isPaypal}
                    onChangePaypal={(val) => setIsPaypal(val)}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default App
