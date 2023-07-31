import ProductTable from '@/app/components/ProductTable'
import Sort from '@/app/components/Sort';
async function getData()
{
  const res = await fetch('https://fakestoreapi.com/products')
   
  if(!res.ok)
  {
    throw new Error('Failed to fetch data');
  }
1
  return res.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <div className="border p-2">
      <div className="w-full flex items-end justify-end mb-1">
        <Sort/>
      </div>
      <ProductTable data={data}/>
    </div>
  )
}
