import React, { useEffect, useState } from "react";

import { Button, Text, View } from "react-native";
import ProductList from "./src/screens/ProductList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetails from "./src/screens/ProductDetails";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchProductListSaga } from "./src/store/products/saga";
import { watchCartSaga } from "./src/store/cart/saga";
import reducer from "./src/store/reducer";
import { Provider as ReduxProvider } from 'react-redux'
import saga from "./src/store/saga";

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

const Stack = createStackNavigator()
sagaMiddleware.run(saga)
function App() {

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ProductList} />
          <Stack.Screen name="Details" component={ProductDetails} options={{
            headerShown: false
          }} />
        </Stack.Navigator>

      </NavigationContainer>
    </ReduxProvider>
  )

}



export default App;