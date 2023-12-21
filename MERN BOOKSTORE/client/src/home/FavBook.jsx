import React from 'react'
import FAVBookImg from '../assets/banner-img/FavBook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div>
            <img src={FAVBookImg} alt='' className='rounded md:w-10/22'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your favorite <span className='text-blue-700'>Book here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam reiciendis non dolorum voluptates illo, officia error illum saepe atque adipisci iste excepturi quia nihil, dolore aspernatur pariatur velit debitis asperiores.</p>
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book listings</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1000+</h3>
                    <p className='text-base'>Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>10000+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>

            <Link to="/shop" className='mt-12 block'>
                <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore more</button>
            </Link>
        </div>
    </div>
  )
}

export default FavBook