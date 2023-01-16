import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";


interface ButtonProps {
    containerStyle?: {};
    titleStyle?: {};
    onPress?: () => void;
    title: string;
    disabled?: boolean;
}

function Button(props: ButtonProps) {
    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.containerStyle, props.containerStyle]}
            disabled={props.disabled}
        >
            <Text style={[styles.titleStyle, props.titleStyle]}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '80%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: "black"
    },
    titleStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Lato-Bold'
    }
})

export default Button;