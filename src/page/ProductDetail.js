import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/MYNAMEISJIN/hnm-react-practice/products/${id}`
    let response = await fetch(url)
    let data = await response.json();
    setProduct(data)
    console.log(product)


  }
  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col className='text-end'>
            <img src={product?.img} />
          </Col>
          <Col>
            <div className='product-detail-text-area'>
              <div>
                {product?.title}
              </div>
              <div>
                &#8361;  {product?.price}
              </div>
              <div style={{ fontSize: 13 }}>
                {product?.choice ? "Conscious choice" : <div>&nbsp;</div>}
              </div>
            </div>


            <div className='product-detail-button-area'>
              <div>
                <Form.Select aria-label="Default select example" style={{ width: 140 }}>
                  <option>사이즈 선택</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div>
                <Button variant="dark">
                  추가
                </Button>
              </div>
            </div>



          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail
