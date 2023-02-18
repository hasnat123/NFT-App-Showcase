import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/globals'
import assets from '../public/assets'
import Button from './Button'

interface IProps
{
  title: string,
  description: string,
  showBtn: boolean,
  mockupImg: StaticImageData,
  banner: string,
  reverse: boolean
}


const SectionWrapper: React.FC<IProps> = ({ title, description, showBtn, mockupImg, banner, reverse }) => {

  return (
    <div className={`min-h-screen flex justify-center items-center p-16 sm:p-8 ${reverse ? 'bg-white' : 'bg-primary'}  ${banner}`}>
      <div className={`${reverse ? 'flex-row-reverse md:flex-col-reverse' : 'flex-row md:flex-col'} flex items-center  w-11/12 sm:w-full minmd:w-3/4`}>
        <div className={`flex-1 w-full flex justify-start flex-col md:mb-10 ${reverse ? 'fadeRightMini text-right' : 'fadeLeftMini text-left'}`}>
          <h1 className={`${reverse ? 'text-tertiary' : 'text-white'} font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13`}>{title}</h1>
          <p className={`${reverse ? 'text-tertiary' : 'text-white'} my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16`}>{description}</p>
          {showBtn && <Button assetUrl={assets.expo} link="https://expo.dev/@hasnat123/NFTMarketplace"/>}
        </div>
        <div className={`flex-1 flex justify-center items-center`}>
          <Image src={mockupImg} alt='mockup' className={`${reverse ? 'fadeLeftMini' : 'fadeRightMini'} w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain`}/>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper