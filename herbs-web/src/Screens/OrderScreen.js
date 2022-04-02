import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Component/Message";
import Loader from "../Component/Loader";
import { getOrderDetails, payOrder } from "../actions/orderActions";
import { ORDER_PAY_RESET } from "../constants/orderConstants";
//import { ShippingScreen } from "./ShippingScreen";

const OrderScreen = ({ match }) => {
  const [amount, setAmount] = useState(0);

  const [email, setEmail] = useState("");

  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderPay = useSelector((state) => state.orderPay);

  const { loading: loadingPay, success: successPay } = orderPay;

  const [payment, setPayment] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  useEffect(() => {
    if (!order || successPay) {
      dispatch(getOrderDetails(orderId));
      dispatch({ type: ORDER_PAY_RESET });
      //
    }
  }, [dispatch, orderId, successPay]);
  //const [payReady, setPayReady] = useState(false);
  console.log(orderId);

  useEffect(() => {
    console.log(order);
    if (order) {
      setAmount(order.totalPrice * 100 * 577);
      setEmail(order.user.email);
    }
  }, [order]);

  if (!loading) {
    // Calculate Prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  console.log(order);
  const config = {
    reference: new Date().getTime().toString(),
    publicKey: "pk_test_71d98a08f5170e693037c1b26bcc6dd76cea3c75",
    email: email,
    amount: amount,
    ref: "REFERENCE",
    callback: function (response) {
      const reference = response.payment;
      alert("Payment complete!  reference: " + reference);
    },
  };
  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };
  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  // useEffect(() => {
  //   if (successPaymentHandler) {
  //     setPayment(order.PaidAt === true);
  //   } else {
  //     payment(order.PaidAt === false);
  //   }
  // }, [order]);

  //  successPaymentHandler () {
  //     order.PaidAt === true
  //   }

  const componentProps = {
    ...config,
    text: "Paystack Button Configuration",
    onSuccess: (reference) => successPaymentHandler(reference),
    onClose: handlePaystackCloseAction,
  };

  console.log(orderDetails);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1> Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong> Name : </strong> {order.user.name}{" "}
              </p>
              <p>
                {" "}
                <strong> Email : </strong>
                <a href={`mailto:${order.user.email}`}>
                  {order.user.email}
                </a>{" "}
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address},{order.shippingAddress.city}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  {" "}
                  Delivered on {order.deliveredAt}{" "}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success"> Paid on {order.PaidAt} </Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message> Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  <PaystackButton {...componentProps}>
                    {({ initializePayment }) => (
                      <Button
                        variant="danger"
                        onClick={() =>
                          initializePayment(
                            successPaymentHandler,
                            handlePaystackCloseAction
                          )
                        }
                      ></Button>
                    )}
                  </PaystackButton>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
