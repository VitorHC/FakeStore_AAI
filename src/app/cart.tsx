import { CartBox } from "@/components/cartBox";
import { useCart } from "@/hooks/useCart";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function CartScreen() {
    const {items, total} = useCart()
    
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CartBox item={item}/>}
                ListHeaderComponent={
                    <>
                    {items.length === 0 && (
                        <View style={styles.empty}>
                            <Text style={styles.emptyTitle}>Carrinho Vazio</Text>
                             <AntDesign name="shopping-cart" color="#fdb8a3" size={35} />
                        </View>
                    )}
                    </>
                }
            />
            <Text style={styles.total}>Total: R$ {total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f3ed",
        padding: 5,
        justifyContent: "center",
    },
    total: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fc6c40",
        alignSelf: "flex-end"
    },
    empty: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    emptyTitle: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fdb8a3"
    }
})