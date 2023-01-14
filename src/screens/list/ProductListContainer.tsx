import React, { useEffect } from 'react'
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { imageMap } from '../../icons/imageMap'
import { getProductList, setSelectedProduct } from '../../store/products/action'
import FastImage from 'react-native-fast-image'
import ProductList from './ProductList'
import { Product } from '../types'

const ProductListContainer = ({ navigation }: any) => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.prouducts)
    const { list, loading } = products || {}

    useEffect(() => {
        dispatch(getProductList())
    }, [])

    const handleNavigation = (item: Product) => {
        dispatch(setSelectedProduct(item))
        { navigation.navigate('Details', { item }) }
    }

    return (
        <View style={styles.containerStyle}>

            <ProductList
                products={list}
                onPress={(item) => {
                    handleNavigation(item)
                }}

            />
            <ActivityIndicator
                style={{ width: 30, height: 30, alignSelf: 'center', position: 'absolute' }}
                color={'black'}
                animating={loading}
                size='large'
            />

        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingHorizontal: 4,
        justifyContent: 'center'

    },
})

export default ProductListContainer