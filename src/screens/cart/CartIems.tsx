import React from 'react'
import { ListRenderItem, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { FlatList } from 'react-native-gesture-handler'
import { Image } from 'react-native-svg'
import { useSelector } from 'react-redux'
import CustomHeader from '../../common/CustomHeader'
import ProductInfoContainer from '../../common/ProductInfoContainer'
import ProductList from '../list/ProductList'
import { Product } from '../types'

const CartItems = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems = [], totalPrice = 0 } = cart || {}

    const renderItems: ListRenderItem<Product> = ({ item }) => {

        return (
            <View style={styles.itemContainer}>
                <FastImage style={styles.imageStyle}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ uri: item?.img, priority: FastImage.priority.normal }} />

                <ProductInfoContainer product={item} containerStyle={styles.productInfoContainer} />


            </View>
        )
    }
    return (
        <SafeAreaView>
            <CustomHeader showBackButton={true} title={'Cart'} />
            <View >
                <FlatList
                    data={cartItems}
                    renderItem={renderItems} />

                <Text>
                    Total Price : {totalPrice.toFixed(2)}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    itemContainer: {
        flex: 1,
        flexDirection: 'row',

    },
    imageStyle: {
        width: 80,
        height: 150,
    },
    productInfoContainer: {
        justifyContent: 'center',
        paddingRight: 60
    }
})

export default CartItems