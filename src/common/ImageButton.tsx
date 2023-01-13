import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";

interface ImageButtonProps {
    containerStyle?: {};
    imageStyle?: {};
    imageSrc?: any;
    onPress?: () => void;
}

function ImageButton(props: ImageButtonProps) {
    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.containerStyle, props.containerStyle]}
        >
            <Image
                source={props.imageSrc}
                style={[styles.imageStyle, props.imageStyle]}
                resizeMode='contain'
            >
            </Image>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    imageStyle: {
        width: 18,
        height: 18
    }
})

export default ImageButton;