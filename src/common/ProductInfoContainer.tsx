import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Product } from '../screens/types'

interface ProductInfoContainerProps {
    product: Product;
    containerStyle?: {};
}
function ProductInfoContainer({ product, containerStyle }: ProductInfoContainerProps) {

    function renderQuantity() {
        return (
            product.quantity ? <Text style={styles.textStyle}>
                {"Quantity " + product?.quantity}
            </Text> : null
        )
    }
    return (
        <View style={containerStyle}>
            <Text style={styles.textStyle}>
                {"$ " + product.price}
            </Text>
            <Text testID='color' style={styles.textStyle}>
                {product.name}
            </Text>

            <Text style={styles.textStyle}>
                {"Color " + product.colour}
            </Text>
            {renderQuantity()}
        </View>
    )
}
const styles = StyleSheet.create({
    
    cardStyle: {
        width: '50%',
        alignItems: 'center',
    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain'

    },
    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        paddingHorizontal: 6
    }
})
export default ProductInfoContainer