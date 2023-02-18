import React from 'react'
import styles from '../styles/globals'
import assets from '../public/assets'
import Image, { StaticImageData } from 'next/image'

const FeatureCard: React.FC<{ iconUrl: StaticImageData, iconText: string }> = ({ iconUrl, iconText }) => (
  <div className={`bg-white m-10 p-6 rounded-md flex justify-around items-center flex-col hover:shadow-lg cursor-pointer w-40 h-40 minlg:w-80 minlg:h-80`}>
    <Image src={iconUrl} alt='icon' className='w-20 h-20 minlg:w-40 minlg:h-40 object-contain mb-1' />
    <p className={`font-semibold font-IBMPlex text-base minlg:text-3xl text-tertiary`}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`flex justify-center items-center p-16 sm:p-8 bg-primary banner03`}>
      <div className={`flex items-center w-full minmd:w-3/4, flex-col text-center`}>
        <div>
          <h1 className={`font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-white`}>Technologies</h1>
          <p className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 text-white`}>ProNef has been developed using a cross platform techonology, React Native.</p>
        </div>
        <div className='flex justify-center flex-wrap'>
          <FeatureCard iconUrl={assets.react} iconText='React Native'/>
          <FeatureCard iconUrl={assets.javascript} iconText='JavaScript'/>
        </div>
      </div>
    </div>
  )
}

export default Features