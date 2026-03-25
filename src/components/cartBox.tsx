import { CartItem, Product } from "@/context/CartContext"
import { useCart } from "@/hooks/useCart"
import { FontAwesome5 } from "@expo/vector-icons"
import { View, Image, Text, Pressable, StyleSheet } from "react-native"


export const CartBox = (/**AQUI VAI A PROPS COMO PARAMETRO */) => {
    const {removeFromCart} = useCart()
    return (
        <View style={styles.cartContainer}>
            <Image
                source={{
                    uri: `${item.image}`
                }}
                style={styles.image}
            />
            <View style={styles.cardInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.quantity}>
                    <Text style={styles.infoQuantity}>Qtd: {item.quantity}</Text>
                    <Text style={styles.price}>R$ {item.price * item.quantity}</Text>
                </View>
                <Pressable style={styles.btn} onPress={()=>removeFromCart(item.id)}>
                    <FontAwesome5 name="trash" color="red" size={16}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardInfo: {
        width: "85%",
        height: "100%",
        justifyContent: "space-between"
    },
    image: {
        width: 50,
        height: 50
    },
    price: {
        color: "#fc6c40",
        fontSize: 16,
        fontWeight: "600"
    },
    cartContainer: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#fff",
        gap: 3,
        padding: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginBottom: 10
    },
    quantity: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    infoQuantity: {
        fontSize: 16,
        fontWeight: "600"
    },
    title: {
        fontWeight: "600"
    },
    btn: {
        alignSelf: "flex-end"
    },
    total: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fc6c40"
    }
})