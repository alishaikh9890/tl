import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice';
import { addCart, showCart } from '../features/cartSlice';

const Products = () => {

    const dispatch = useDispatch();

    let cart = useSelector(state=> state.cart.cartList)
    let cartLength = useSelector(state=> state.cart.cartLength)

    console.log(cart)


    function cartStatus(id){
       let item = cart.find(ele => ele.id == id)
          if(item)
          {
            return item.quantity;
          }
          else{
            return 0;
          }
    }





  return (
    <div>
        <div className="w-auto shadow p-1">
            <div className=" max-w-7xl mx-auto  py-2 flex justify-between items-center">
                <h1 className='text-3xl font-bold'>Alishan</h1>
                <div>
                <button onClick={()=>dispatch(showCart())} className='rounded-2xl py-1 px-4 border hover:bg-slate-200'>Cart: {cartLength} items</button>
                <button onClick={() => dispatch(logout())} className='rounded-2xl bg-red-600 py-1 px-4 border hover:bg-red-800'>Logout</button>
                </div>
            </div>
        </div>


        <div className=" max-w-7xl mx-auto my-10">
            <div className="flex gap-5 flex-wrap justify-center">
                {
                    [
                     
                      {
                        "id": 3,
                        "title": "Mens Cotton Jacket",
                        "price": 55.99,
                        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                        "rating": {
                          "rate": 4.7,
                          "count": 500
                        }
                      },
                      {
                        "id": 4,
                        "title": "Mens Casual Slim Fit",
                        "price": 15.99,
                        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                        "rating": {
                          "rate": 2.1,
                          "count": 430
                        }
                      },
                      
                      {
                        "id": 6,
                        "title": "Solid Gold Petite Micropave ",
                        "price": 168,
                        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                        "category": "jewelery",
                        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                        "rating": {
                          "rate": 3.9,
                          "count": 70
                        }
                      },
                      {
                        "id": 7,
                        "title": "White Gold Plated Princess",
                        "price": 9.99,
                        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                        "category": "jewelery",
                        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                        "rating": {
                          "rate": 3,
                          "count": 400
                        }
                      }
                    ].map((ele) => (
                <div key={ele.id} className="shadow p-2 w-[250px] bg-amber-100">
                    <img className='border rounded-2xl aspect-square' src={ele.image} alt="" />
                    <h2 className='text-xl font-bold'>{ele.price}</h2>
                    <h1>{ele.title}</h1>
                    {
                        cartStatus(ele.id)   
                         ?
                         <>
                    <button onClick={() => dispatch(addCart(ele))} className='bg-amber-600 text-white py-1 px-3'> +</button>
                    <button>{cartStatus(ele.id)}</button>
                    <button  className='bg-amber-600 text-white py-1 px-3'> -</button>
                    </>
                        :
                        <button onClick={() => dispatch(addCart(ele))} className='bg-amber-600 text-white py-1 px-3'> ADD</button>
                }
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products