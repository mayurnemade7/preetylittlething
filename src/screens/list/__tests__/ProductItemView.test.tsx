import 'react-native';
import React from 'react';
import ProductItemView from '../ProductItemView';
import 'react-native-gesture-handler'
import * as reactRedux from 'react-redux'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { initalProductList } from '../../../__mocks__';


const product = initalProductList[0];
const onPress = jest.fn()
const addToCart = jest.fn()


it('Product details renders correctly afetr', () => {
    renderer.create(<ProductItemView product={product}
        onPress={onPress} addToCart={addToCart} />)
});

it('color renders correctly afetr', () => {
    const instance = renderer.create(<ProductItemView product={product}
        onPress={onPress} addToCart={addToCart} />)

    const colorText = instance.root.findByProps({ testID: 'color' })

    expect(colorText).toBeTruthy()
});

it('quantity  renders correctly afetr', () => {
    const instance = renderer.create(<ProductItemView product={product}  onPress={onPress} addToCart={addToCart}/>)

    const quantity = instance.root.findByProps({ testID: 'quantity' })

    expect(quantity).toBeTruthy()
});

