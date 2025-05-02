import { replaceData } from "./cartSlice"
import { showNotification } from "./uiSlice"



export const fetchData = () => {
    return  async (dispatch) => {
    
        const fetHandler = async() => {
            const res = await fetch('https://redux-addtocart-default-rtdb.firebaseio.com/cartList.json')
            const data = await res.json();
            return data;
        }

        try {
           const cartData = await fetHandler()
           console.log("cart" +cartData)
           dispatch(replaceData(cartData))
        } catch (error) {
            dispatch(showNotification({type:"error", message: "Sending request failed...!", open :true}))
        }
    }
}








export const sendCartData = (cart) => {
    return async (dispatch) =>{
         dispatch(showNotification({type:"warning", message: "Pending the Request...!", open :true}))

         const sendRequest = async () => {

            dispatch(showNotification({type:"warning", message: "Pending the Request...!", open :true}))
            
            const res = await fetch('https://redux-addtocart-default-rtdb.firebaseio.com/cartList.json',
              {
                method: "PUT",
                body: JSON.stringify(cart)
              })
              const data = await res.json()
              dispatch(showNotification({type:"success", message: "Sending Data Successfull...!", open :true}))
            }
            try {
                await sendRequest()
            } catch (error) {
                dispatch(showNotification({type:"error", message: "Sending request failed...!", open :true}))
            }
    }
}
