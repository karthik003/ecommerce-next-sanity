import React from 'react'
import Product from '../components/Product'
import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import {client} from '../../lib/client'
function Home({products, banners}) {
  return (
    <>
    <HeroBanner heroBanner={banners.length && banners[0]}/>
    {console.log(banners)}
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {products?.map((product)=><Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={banners && banners[0]}/>
    </>
  )
}

export const getServerSideProps = async () =>{
  const query ='*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery ='*[_type == "banner"]'
  const banners = await client.fetch(bannerQuery)

    return {
      props:{products, banners}
    }
}
export default Home