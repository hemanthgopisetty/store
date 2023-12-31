import {Rating} from '@/app/(mui)/mui' 
import Image from 'next/image' 
export default function Product({product}) {
  return (
    <div className=" rounded-3xl shadow-[0px_3px_50px_-40px_rgba(0,0,0,0),0px_0px_65px_-25px_rgb(30,144,255)] flex items-center justify-around flex-col p-10 m-5 gap-4">
      <Image 
      src={`${product.image}`} 
      alt="Product" 
      width={175}
      height={175}
      className="rounded-lg h-48"/>
      <div className="text-center flex flex-col justify-evenly items-center m-1">
        <p className="text-2xl font-bold truncate w-44">{product.title} </p>
        <Rating readOnly value={product.rating.rate} precision={0.1}/>
        <p className="text-xl font-medium">${product.price}</p>
      </div>
      <div className="flex items-center w-full justify-around text-white">
        <button className="p-2 px-4 bg-blue-400 rounded-lg mr-4">Buy Now</button>
        <button className="p-2 px-3 bg-blue-400 rounded-lg text-center ml-4">Add to Cart</button>
      </div>
    </div>
  )
}
