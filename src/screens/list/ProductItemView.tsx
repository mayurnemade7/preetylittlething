import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import ProductInfoContainer from '../../common/ProductInfoContainer';
import { Product } from './types';


interface ProductItemViewProps {
    product: Product;
    onPress: (product: Product) => void;

}

function ProductItemView(props: ProductItemViewProps) {

    const { product, onPress } = props;
    return (
        <View style={styles.cardStyle}>
            <TouchableOpacity onPress={() => { onPress(product) }}>
                <FastImage style={styles.imageStyle}
                    resizeMode={FastImage.resizeMode.contain}
                    source={{ uri: product?.img, priority: FastImage.priority.normal }} />
             <ProductInfoContainer product = {product}/>
            </TouchableOpacity>
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
})

export default ProductItemView