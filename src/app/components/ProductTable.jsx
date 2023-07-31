import Link from "next/link";
import Product from "@/app/components/Product";
export default function ProductTable({data}) {
  return (
    <div className="flex items-center justify-center flex-col">
    <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-1">
        {data.map((data)=>{
          return(
             <Link href={`product/${data.id}`}>
              <Product product={data}/>
             </Link>
          )
        })}
  </div>
  </div>
  )
}
