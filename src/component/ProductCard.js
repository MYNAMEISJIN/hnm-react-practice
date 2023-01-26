import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail = ()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='each-card-area' onClick={showDetail}>
      <img className='img-area' src={`${item.img}`}/>
      <div>{item?.choice?"Conscious choice":<div>&nbsp;</div>}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new?"NEW":<div>&nbsp;</div>}</div>
    </div>
  )
}

export default ProductCard
