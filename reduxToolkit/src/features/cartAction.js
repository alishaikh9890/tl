import { showAlert } from "./alertSlice";



export const postDataApi = (cartData) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch('https://cart-3f7f6-default-rtdb.firebaseio.com/cart.json',
                {
                    method: "PUT",
                    body: JSON.stringify(cartData)
                })
            const data = await res.json();
            return data;
        }
        try {
            dispatch(showAlert({message:"Pending...!", color:"amber", status:true}))
            const data = await fetchData()
            dispatch(showAlert({ message: "Added Successfully", color: "green", status: true }))
        } catch (error) {
            dispatch(showAlert({ message: "Something Went Wrong", color: "red", status: true }))
        }
    }
}
