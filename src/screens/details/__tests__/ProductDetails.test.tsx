import 'react-native';
import React from 'react';
import ProductDetails from '../ProductDetails';
import 'react-native-gesture-handler'


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


it('Product details renders correctly afetr', () => {
  renderer.create(<ProductDetails />);
});