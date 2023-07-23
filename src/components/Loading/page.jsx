import React from 'react'
import style from './loading.module.scss'
import Image from 'next/image'
import loadingIcon  from '../../assets/loading/loading.png'

const Loading = () => {
  return (
     <Image
        className={style.loading}
        src={loadingIcon}
        alt="loading"
        width={25}
        height={25}
       >
     </Image>
  )
}

export default Loading