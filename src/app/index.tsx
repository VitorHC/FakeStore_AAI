import { CardItem } from "@/components/cardItem";
import { Product } from "@/context/CartContext";
import { getProduct } from "@/services/product.service";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ProductScreen(){
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{
    },)

    const handlerProduct = async() => {
        setLoading(true)
        try{
            const resp = await getProduct()
            setProducts(resp)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>ShoppeeExpo</Text>
            <FlatList 
                data={products}
                keyExtractor={item => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <CardItem item={item}/>}
                ListHeaderComponent={
                    <>
                        {loading && <Text>Carregando...</Text>}
                    </>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f3ed"
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
        color: "#fc6c40",
        marginBottom: 10,
    },
})