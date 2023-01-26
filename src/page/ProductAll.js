import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container,Row,Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList,setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

const getProduct =async()=>{
  let searchQuery = query.get("q")||"";
  let url = `https://my-json-server.typicode.com/MYNAMEISJIN/hnm-react-practice/products?q=${searchQuery}`
  let response = await fetch(url)
  let data = await response.json();
  setProductList(data);
  
}
  useEffect(()=>{
    getProduct()
  },[query])


  return (
    <div>
      
      <Container>
      <Row>
        {productList.map((item)=>(
        <Col sm={12} md={4} lg={3}><ProductCard item={item}/></Col>
      ))}
      </Row>
      
    </Container>
    </div>
  )
}

export default ProductAll
