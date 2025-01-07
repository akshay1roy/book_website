import { Link } from "react-router-dom";
import { getImgUrl } from '../../utils/getImgUrl'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { getImgUrl } from "../../utils/getImgUrl";
// import Image from '../../../assets/books/book-1.png'

export default function BookCard({ book }) {

  const dispatch = useDispatch();

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }
  // console.log(book);
  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72  sm:flex-shrink-0    border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              // src={`${getImgUrl(book?.coverImage)}`}
              src={`${getImgUrl(book?.coverImage)}`}
              alt="image"
              className="w-full  bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>

          <p className="text-gray-600 mb-5 ">
            {book?.description.length > 80
              ? `${book.description.slice(0, 80)}...`
              : book.description}
          </p>

          <p className="font-medium mb-5">
            ${book?.newPrice}
            <span className=" line-through font-normal ml-2">
              ${book?.oldPrice}
            </span>
          </p>

          <button 
          onClick={()=>handleAddToCart(book)}
          className="btn-primary px-1 py-1 space-x-0 flex items-center justify-center ">
            {" "}
            {/* <MdOutlineShoppingCart className="px-0 py-0 mx-0 my-0"/> */}
            <span className="text-sm">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
