import React, { useContext } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import RegularText from './RegularText';

interface QuantitySelectorProps {
    id: number;
    setQuantity: any;
    onAdd: () => void;
    onRemove: () => void;
}

const QuantitySelector = ({ id, setQuantity, onAdd, onRemove }: QuantitySelectorProps) => {
   // const { getProduct } = useContext(CartContext);
   // const product = getProduct(id);

   const cart = useSelector(state => state.cart)
    const { totalProducts :quantity = 0} = cart || {}
   

    function onMinus() {
        onRemove();
        setQuantity(Math.max(0, quantity - 1));
    };

    function onPlus() {
        onAdd()
        setQuantity(quantity + 1);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={onMinus} style={styles.button} disabled={quantity === 0}>
                <RegularText style={styles.butonText} text={"-"} />
            </Pressable>
            <RegularText style={styles.quantity} text={quantity.toString()} />
            <Pressable onPress={onPlus} style={styles.button}>
                <RegularText style={styles.butonText} text={"+"} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'gray',
        width: 130,
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    butonText: {
        fontSize: 16,
    },
    quantity: {
        color: 'blue',
    },
});

export default QuantitySelector;
