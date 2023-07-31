import ProductTable from '@/app/components/ProductTable'
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
      <ProductTable data={data}/>
    </div>
  )
}
