import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../product";
import Product from "../Component/Product";

const Homescreen = () => {
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
