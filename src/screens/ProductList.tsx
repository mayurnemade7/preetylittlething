import React, { useEffect } from 'react'
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { imageMap } from '../icons/imageMap'
import { getProductList, setSelectedProduct } from '../store/products/action'
import FastImage from 'react-native-fast-image'

const ProductList = ({ navigation }: any) => {

    // const data = [
    //     {
    //         "id": 1,
    //         "colour": "Black",
    //         "name": "Black Sheet Strappy Textured Glitter Bodycon Dress",
    //         "price": 10,
    //         "img": "https://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"
    //     },
    //     {
    //         "id": 2,
    //         "colour": "Stone",
    //         "name": "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
    //         "price": 4,
    //         "img": "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024"
    //     },
    //     {
    //         "id": 3,
    //         "colour": "Black",
    //         "name": "Black Frill Tie Shoulder Bodycon Dress",
    //         "price": 7.99,
    //         "img": "https://cdn-img.prettylittlething.com/d/c/3/3/dc337260f9ecefdb99a8c8e98cd73ccb1b79cea5_cmb6804_4.jpg?imwidth=1024"
    //     },
    //     {
    //         "id": 5,
    //         "colour": "Red",
    //         "name": "Red Pin Stripe Belt T Shirt Dress",
    //         "price": 17,
    //         "img": "https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024"
    //     }
    // ]

    const dispatch = useDispatch()
    const products = useSelector(state => state.prouducts)
    const { list, loading } = products || {}

    console.log("list",list)

    useEffect(() => {
        dispatch(getProductList())
    }, [])

    const handleNavigation = (item :any) =>{
        dispatch(setSelectedProduct(item))
        { navigation.navigate('Details', {item}) }
    }

    const renderListItem = ({ item } :any) => {
        return (
            <View style={styles.cardStyle}>
                <TouchableOpacity onPress={() => handleNavigation(item)}>
                <FastImage style={styles.imageStyle}
                resizeMode={FastImage.resizeMode.contain}
                source={{ uri: item.img, priority: FastImage.priority.normal }} />
                    <Text style={styles.textStyle}>
                        {"$ " + item.price}
                    </Text>
                    <Text style={styles.textStyle}>
                        {item.name}
                    </Text>

                    <Text style={styles.textStyle}>
                        {"Color " + item.colour}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.containerStyle}>
            {loading ? <ActivityIndicator /> :
                <FlatList
                    data={list}
                    renderItem={renderListItem}
                    numColumns={2}
                    keyExtractor={item => item.id}

                />
            }

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

export default ProductList