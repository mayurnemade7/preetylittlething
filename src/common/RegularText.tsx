import React from "react";
import { Text, StyleSheet } from "react-native";

interface RegularTextProps {
    style?: {};
    text: string;
}

function RegularText(props: RegularTextProps) {
    return (
        <Text
            style={[styles.texStyle, props.style]}
        >
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    texStyle: {
        color: "orange",
        textAlign: "center",
        backgroundColor: "transparent",
        fontFamily: "Lato-Regular",
        fontSize: 12
    }
})

export default RegularText;