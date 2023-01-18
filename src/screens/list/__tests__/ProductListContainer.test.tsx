import 'react-native';
import React from 'react';
import ProductListContainer from '../ProductListContainer';
import renderer from 'react-test-renderer';
import { initalProductList } from '../../../__mocks__';


it('ProductListContainer renders correctly afetr', () => {
    renderer.create(<ProductListContainer />)
});