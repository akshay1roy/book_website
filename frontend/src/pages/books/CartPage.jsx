import { Link } from "react-router-dom";

// import { getImgUrl } from '../../utils/getImgUrl';
import Image from "../../assets/books/book-1.png";
import { useSelector } from "react-redux";
import { getImgUrl } from "../../utils/getImgUrl";

function CartPage() {

    const cartItem=useSelector(state=>state.cart.cartItems)

  return (
    <>
      <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl sm:mx-16 ">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">
              Shopping cart
            </div>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                className="relative -m-2 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200"
              >
                <span>Clear Cart</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
                {
                    cartItem.length >0 ? (<ul role="list" className="-my-6 divide-y divide-gray-200">

                        {
                            cartItem.map((product)=>(
                                <li key={product?._id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={`${getImgUrl(product?.coverImage)}`}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <Link to="/">{product?.title}</Link>
                                </h3>
                                <p className="sm:ml-4">new price</p>
                              </div>
                              <p className="mt-1 text-sm  text-gray-500 capitalize">
                                <strong>Category : </strong>{product?.category}
                              </p>
                            </div>
        
                            <div>
                              <p className="text-gray-500">
                                <strong>Qty:</strong> 1
                              </p>
                              <div className="flex">
                                <button className="font-medium text-indigo-600 hover:text-indigo-500">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                            ))
                        }
                        
                      </ul>) : (<p>No product Found !</p>)
                }
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>0</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center py-2 justify-center rounded-md boorder border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              <span>or </span>
              <button className="font-semibold"> Continue Shopping  </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
