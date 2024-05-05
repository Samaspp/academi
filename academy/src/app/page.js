

import Link from 'next/link'
import Image from 'next/image'
import academyhome from '../../public/academyhome.jpg'


export default function Home (){

  return (
    <div className='flex h-screen'>
      <div>
    <Image
     src="/academyhome.jpg"
    alt="Picture"
    width={900}
    height={900}
    priority
    />
    </div>
    <div className="text-center w-1/2 items-center justify-center h-1/2" >
    <h1 className='text-50 mt-80 text-blue-400'>ACADEMY</h1>
    
    <Link href="/signup">
       <button class="my-2 rounded-lg bg-blue-300 px-4 py-2 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-50 active:bg-blue-700">
    SIGN UP
  </button>
    </Link>
</div>

       
    </div>
  )
}

