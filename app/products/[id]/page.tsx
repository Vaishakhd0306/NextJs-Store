import BreadCrumbs from '@/components/single-products/BreadCrumbs';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavouritesToggleButton';
import AddToCart from '@/components/single-products/AddtoCart';
import ProductRating from '@/components/single-products/ProductRating';
import { fetchSingleproduct } from '@/utils/actions';

const SingleProductPage=async({params}:{params:{id:string}})=>{
const product = await fetchSingleproduct(params.id)
const {name,image,company,description,price}= product
const dollarAmount = formatCurrency(price);
return(
    <section>
        <BreadCrumbs name={product.name} />
        <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
            {/*image first col*/}
            <div className='relative h-full'>
                <Image src={image} alt={name} fill sizes='(max-width:768px )100vw,(max-width:1200px ) 50vw,33vw'priority className='w-full rounded object-cover'/>
            </div>
            {/*product info second col*/}
            <div>
                <div className='flex gap-x-8 items-center'>
                    <h1 className='capitalize text-3xl font-bold'>{name}</h1>
                    <FavoriteToggleButton productId={params.id}/>
                </div>
                <ProductRating productId = {params.id}/>
                <h4 className='text-xl mt-2'>{company}</h4>
                <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
                    {dollarAmount}
                </p>
                <p className='mt-6 leading-8 text-muted-foreground '>{description}</p>
              <AddToCart productId={params.id}/>
            </div>
        </div>
    </section>
)
}
export default SingleProductPage