import React from 'react'
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import ProductItemView from './ProductItemView'
import { Product } from './types'

interface ProductListProps {
    products: Product[];
    onPress: (item: any) => void
}

function ProductList({ products, onPress }: ProductListProps) {

    const renderItem: ListRenderItem<Product> = ({ item }) => {
        return (< ProductItemView
            product={item}
            onPress={onPress}

        />)
    };

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={item => item.id}

        />
    )
}

export default ProductList