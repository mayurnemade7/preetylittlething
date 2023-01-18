import 'react-native';
import React from 'react';
import CartItems from '../CartIems';
import 'react-native-gesture-handler'


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


it('Cart Items renders correctly afetr', () => {
  renderer.create(<CartItems />);
});

