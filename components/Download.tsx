import React from 'react'
import styles from '../styles/globals'
import Image from 'next/image'
import assets from '../public/assets'

const Download = () => {
  return (
    <div className={`flex justify-center items-center p-16 sm:p-8 bg-white`}>
      <div className={`flex items-center w-full minmd:w-3/4 flex-col text-center`}>
        <div>
          <h1 className={`font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-tertiary`}>Download the Source Code</h1>
          <p className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16`}>Get the full source code on Github</p>
        </div>
        <button className={`bg-primary mt-4 py-4 px-6 text-white text-lg minmd:text-2xl font-IBMPlex font-medium rounded-lg hover:shadow-2xl`} onClick={() => window.open('https://github.com/hasnat123/NFT-App', '_blank')}>
          Source Code
        </button>
        <div className={`flex justify-center items-center`}>
          <Image src={assets.scene} alt='download-png' className={`w-full h-full object-cover`}/>
        </div>
      </div>
    </div>
  )
}

export default Download