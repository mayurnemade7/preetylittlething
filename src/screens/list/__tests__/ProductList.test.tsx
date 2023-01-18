import 'react-native';
import React from 'react';
import ProductList from '../ProductList';
import renderer from 'react-test-renderer';
import { initalProductList } from '../../../__mocks__';


const products = initalProductList;
const onPress = jest.fn()
const addToCart = jest.fn()

it('Product details renders correctly afetr', () => {
    renderer.create(<ProductList products={products}
        onPress={onPress} addToCart={addToCart} />)
});