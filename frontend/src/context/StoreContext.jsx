import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null)
import axios from "axios"


const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});
    const [food_list, setfood_list] = useState([]);
    const url = "http://localhost:3000"
    const [token, settoken] = useState("");
    const addToCart = async (itemId) => {
        if(!cartItem[itemId]){setCartItem((prev)=>({...prev , [itemId]:1}))}
        else {
            setCartItem((prev)=>({...prev , [itemId]:prev[itemId]+1}))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    

    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    
    }
    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
        setCartItem(response.data.cartData)
        
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItem[item];
            }
        }

        return totalAmount;
    }
    const fetchFoodList = async () => {
        let newUrl = "http://localhost:3000/api/food/list"
        const response = await axios.get(newUrl)
        
        setfood_list(response.data.data)
    
    }

    
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                settoken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])
    

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        settoken
    }

    return (
        <StoreContext.Provider value={contextValue} >
            {props.children }
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;