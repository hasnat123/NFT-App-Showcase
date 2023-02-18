import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from '../styles/globals'

const Button: React.FC<{ assetUrl: StaticImageData, link: string }> = ({assetUrl, link}) => {
  return (
    <div
      className={`bg-black flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer`}
      onClick={() => window.open(link, '_blank')}  
    >
      <Image src={assetUrl} alt='expo-icon' className={`w-5 h-5 minmd:w-10 minmd:h-10 object-contain`}/>
      <div className='flex flex-col justify-start ml-4'>
        <p className={`text-white font-IBMPlex minmd:text-lg font-normal text-xs`}>View it on</p>
        <p className={`text-white font-IBMPlex minmd:text-lg font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button