import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import PriceTag from './PriceTag'

interface ProductCardProps{
 product:Product
}


export default function Home({product}:ProductCardProps) {
 const isNew= Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7
 
    return (
    // <Link
    // href={`/product/${product.id}`}
    // className='card w-96 bg-base-100 shadow-xl'
    // >
    //     <figure>
    //         <Image
    //         src={product.imageUrl}
    //         alt={product.name}
    //         width={800}
    //         height={400}
    //         className='h-48 object-cover '
    //         />

    //     </figure>
    // <div className='card-body'>
    // <h2 className='card-title'>{product.name}
    // <div className='badge badge-secondary'>New</div>

    // </h2>

    // <p>{product.description}</p>
    // <PriceTag price={product.price}/>
    // </div>
    // </Link>
    <Link 
    href={`/product/${product.id}`}
    className="card w-96 bg-base-100 shadow-xl">
         <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
            className='h-48 object-cover '
            />
       </figure>
  <div className="card-body">
    <h2 className="card-title">
    {product.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{product.description}</p>
    {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div> */}
  </div>
</Link>

  )
}
