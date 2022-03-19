import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import Product from "../Component/Product";
import axios from "axios";

const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>LATEST PRODUCTS</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
            <h3>
              <Product product={product} />
            </h3>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
