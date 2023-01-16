import 'react-native';
import React from 'react';
import ProductItemView from '../ProductItemView';
import 'react-native-gesture-handler'
import * as reactRedux from 'react-redux'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { initalProductList } from '../../../__mocks__';




it('Product details renders correctly afetr', () => {

    const product = initalProductList[0];
    const onPress = jest.fn()


    renderer.create(<ProductItemView product={product}
        onPress={onPress} />)
});

it('price renders correctly afetr', () => {

    const product = initalProductList[0];
    const onPress = jest.fn()

    
    const instance = renderer.create(<ProductItemView product={product}
        onPress={onPress} />)

        const colorText = instance.root.findByProps({testID:'color'})

      expect(colorText).toBeTruthy()
});