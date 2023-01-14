import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Product } from '../screens/types'

interface ProductInfoContainerProps {
    product: Product;
}
function ProductInfoContainer ({product}:ProductInfoContainerProps) {

    
    return(
        <View>
        <Text style={styles.textStyle}>
                    {"$ " + product.price}
                </Text>
                <Text style={styles.textStyle}>
                    {product.name}
                </Text>

                <Text style={styles.textStyle}>
                    {"Color " + product.colour}
                </Text>
                </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingHorizontal: 4,
        justifyContent: 'center'

    },
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
export default  ProductInfoContainer