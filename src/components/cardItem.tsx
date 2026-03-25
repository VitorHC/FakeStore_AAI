import { Product } from "@/context/CartContext"
import { useCart } from "@/hooks/useCart"
import { useWidth } from "@/hooks/useWidth"
import { View, Image, Text, Button, StyleSheet } from "react-native"


export const CardItem = () => {
    const {addToCart} = useCart()
    const itemWidth = useWidth(2)

    return (
        <View style={[{...styles.card, width: itemWidth}]}>
            <Image 
                source={{
                    uri: `${item.image}`
                }}
                style={[{...styles.image}]}
                resizeMode="contain"
            />
            <View style={styles.info}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
                <Button title="Adicionar" onPress={() => addToCart(item)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    image: {
        width: "100%",
        height:150,
        backgroundColor: "#f9f3eb",
        margin: 10
    },
    info:{
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        height: 120,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flexDirection: "column",
        justifyContent:"space-between",
        padding: 2
    },
    itemName: {
        textAlign: "center",
        fontSize: 11,
    },
    price: {
        color: "#fc6c40",
        fontWeight: "500",
        fontSize: 18
    }
})