import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import CustomHeader from '../../common/CustomHeader'
import ProductInfoContainer from '../../common/ProductInfoContainer'
import QuantitySelector from '../../common/QuantitySelector'
import { addProduct, removeProduct } from '../../store/cart/action'



export const ProductDetails = () => {




    const products = useSelector(state => state.prouducts)
    const { selectedProduct: item = {} } = products || {}
    const [quantity, setQuantity] = useState(item?.quantity || 0);
    const dispatch = useDispatch()

    return (
        <SafeAreaView>
            <CustomHeader showBackButton={true} />

            <ScrollView>
                <View style={styles.cardStyle}>
                    <FastImage style={styles.imageStyle}
                        resizeMode={FastImage.resizeMode.contain}
                        source={{ uri: item?.img, priority: FastImage.priority.normal }} />
                    <ProductInfoContainer product={item} />

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
})

export default ProductDetails