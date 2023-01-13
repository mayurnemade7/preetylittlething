import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import CustomHeader from '../common/CustomHeader'
import QuantitySelector from '../common/QuantitySelector'
import { addProduct, removeProduct } from '../store/cart/action'



export const ProductDetails = ({ navigation, route }) => {




    const products = useSelector(state => state.prouducts)
    const { selectedProduct: item } = products || {}
    const [quantity, setQuantity] = useState(item.quantity || 0);
    const dispatch = useDispatch()

    return (
        <SafeAreaView>
            <CustomHeader showBackButton={true} />

            <ScrollView>
                <View style={styles.cardStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={{
                            uri: item.img,
                        }}
                    />
                    <Text style={styles.textStyle}>
                        {"$ " + item.price}
                    </Text>
                    <Text style={styles.textStyle}>
                        {item.name}
                    </Text>

                    <Text style={styles.textStyle}>
                        {"Color " + item.colour}
                    </Text>

                    <QuantitySelector
                        id={1}
                        setQuantity={setQuantity}
                        onAdd={() => { dispatch(addProduct(item)) }}
                        onRemove={() => { dispatch(removeProduct(item)) }} />


                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,

    },
    cardStyle: {
        width: '100%',
        alignItems: 'center',
    },
    imageStyle: {
        width: '100%',
        height: 600,
        resizeMode: 'contain'

    },
    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        paddingHorizontal: 6
    }
})

export default ProductDetails