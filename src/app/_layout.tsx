import { CartProvider } from "@/context/CartContext";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Rootlayout() {
    return(
        <CartProvider>
            <Tabs screenOptions={{
                tabBarActiveTintColor: "#fc6c40",
                tabBarInactiveTintColor: "#ccc3b4",
                tabBarStyle:{
                    backgroundColor: "#fefdfb"
                }
            }}>
                <Tabs.Screen name="index" options={{
                    headerShown: false,
                    tabBarLabel: "Produtos",
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="product" color={color} size={size} />
                    ),
                }}/>
                <Tabs.Screen name="cart" options={{
                    title: "Carrinho",
                    tabBarLabel: "Carrinho",
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="shopping-cart" color={color} size={size} />
                    ),
                    headerStyle: {
                        backgroundColor: "#fefdfb"
                    },
                    headerTintColor: "#fc6c40",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 22
                    }
                }} />
            </Tabs>
        </CartProvider>
    )
}