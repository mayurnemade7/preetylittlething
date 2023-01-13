import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { images } from "../images";

import RegularText from "./RegularText";

import ImageButton from "./ImageButton";
import { useSelector } from "react-redux";


interface CustomHeaderProps {
    showBackButton: boolean;
}
function CustomHeader({ showBackButton }: CustomHeaderProps) {
   
    const cart = useSelector(state => state.cart)
    const { totalProducts = 0} = cart || {}
  

    const navigation = useNavigation();
    console.log("Navigation--", navigation)

    function renderBackButton() {
        return (
            showBackButton ?
                <View style={{ width: 40, height: '100%', alignItems: 'center' }}>
                    <ImageButton
                        imageStyle={{ width: 30, height: 30 }}
                        imageSrc={images.back}
                        onPress={navigation.goBack}
                    />
                </View> : null
        )
    }

    return (
        <View style={styles.containerStyle}>
            {renderBackButton()}
            <View style={styles.cartContainerStyle}>
                <RegularText
                    style={styles.cartCountTextStyle}
                    text={totalProducts.toString()} />
                <ImageButton
                    containerStyle={styles.cartImageConatinerStyle}
                    imageStyle={styles.cartImageStyle}
                    imageSrc={images.cart}
                />
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: 80,
        backgroundColor: "black",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    userNameTextStyle: {
        fontSize: 14,
        color: "white",
        margin: 10,
        marginBottom: 0,
        textAlign: 'left'
    },
    buttonStyle: {
        width: 70,
        backgroundColor: "transparent"
    },
    buttonTextStyle: {
        fontSize: 12
    },
    cartContainerStyle: {
        height: '100%',
        justifyContent: 'center',
    },
    cartImageConatinerStyle: {
        marginRight: 20
    },
    cartImageStyle: {
        width: 25,
        height: 25
    },
    cartCountTextStyle: {
        color: "white",
        width: 24,
        height: 24,
        position: 'absolute',
        alignSelf: 'center',
        top: 12,
        right: 15,
        bottom: 0,
        left: 0,
    }
})

export default CustomHeader;