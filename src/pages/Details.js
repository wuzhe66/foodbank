import React, { useEffect, useState } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { UserInContext } from "../App";
import details_g from '../styles/details_g.css';

function Details() {

  const [userInfo, setUserInfo] = React.useContext(UserInContext);
  const { id } = useParams(); // here the id is consistent with the one in App.js router, hence not _id
  console.log(id);
  console.log("name" + userInfo);
  const navigate = useNavigate();

  const [itemname, setItemName] = useState("");
  const [username, setUserName] = useState(0);
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [expiredate, setExpireDate] = useState("");
  const [address, setAddress] = useState("");

  // review rating  description
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewcomments, setReviewComments] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/items/")
      .then(({ data }) => {
        const found = data.find((obj) => {
          return obj._id === id;
        });
        console.log(found);
        setItemName(found.itemname);
        setUserName(found.username);
        setDescription(found.description);
        setIsActive(found.isActive);
        // setItems(data);
        // todo: add review in MangoDB, and set review here
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/reviews/")
      .then(({ data }) => {
        console.log(data);
        const found = data.filter((obj) => {
          return obj.review_id === id;
        });
        console.log(found);
        setReviews(found);
        console.log(reviews.length);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // handling Grab
  const grabItem = async (id) => {
    console.log("grab id " + id);
    console.log("grab userinfo " + userInfo);
    await axios.put("http://localhost:3001/items/", {id, userInfo});
    await axios.post("http://localhost:3001/grabbeditems/", {id, userInfo});
    // history.push('/products')
    // navigate("/products");
    navigate("/grabberportal");
  };

  const saveItem = async (id) =>  {
    console.log("save id " + id);
    console.log("save userinfo " + userInfo);
    await axios.post("http://localhost:3001/wisheditems/", {id, userInfo});
    // history.push('/products')
    navigate("/grabberportal");
  };


  // to add review

  const addReviewHandler = async (e) => {
    e.preventDefault();

    let review = {
      review_id: id,
      rating: rating,
      reviewcomments: reviewcomments,
    };

    await axios.post("http://localhost:3001/reviews", review);

    // history.push('/products')
    // navigate("http://localhost:3001/reviews");
  };

  // console.log("isActive: " + isActive);
  return (
    <>
      <Container className="mt-10 p-4">
        <div className="card-div">
        <h1 className="text-center">Details</h1>
        <hr />

        <Row>
          <Col md={8} lg={8} sm={8}>
            <Card className="shadow-lg m-3 p-2 rounded">
              <Card.Img src={`/images/food/burger.jpg`} fluid />
              <Card.Body>
                <Card.Title>Item: {itemname}</Card.Title>
                <Card.Text>Description: {description}</Card.Text>
                <Card.Text>
                  Available?: {" "}
                  {isActive ? <small>Yes</small> : <small>No</small>}
                </Card.Text>
                <br />

                {/* <Link to={`/product/edit/${id}`}>
                                <Button>Edit</Button>
                            </Link>
                            
                            <Button className="btn btn-danger m-2" onClick={() => handleDelete(id)}>Delete</Button>  */}
              </Card.Body>

              <Button size="sm" style={{ display: isActive ? null :'none' }} onClick={()=>grabItem(id)} variant="success"  >
                Grab
              </Button>
              <Button size="sm" onClick={()=>saveItem(id)} variant="primary">
                WishList
              </Button>
            </Card>
          </Col>

          <Col md={4} lg={4} sm={4}>
            <h2 className="text-center">Add Review</h2>
            <hr />

            <Form onSubmit={addReviewHandler}>
              <Form.Group className="mb-3" controlId="rating">
                <Row>
                  <Col sm={1}>
                    <Form.Label>Rating</Form.Label>
                  </Col>
                  <Col sm={3}>
                    <Form.Control
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      type="number"
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Row>
                  <Col sm={1}>
                    <Form.Label>Review Comments</Form.Label>
                  </Col>
                  <Col sm={3}>
                    <Form.Control
                      value={reviewcomments}
                      onChange={(e) => setReviewComments(e.target.value)}
                      as="textarea"
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Review
              </Button>
            </Form>

            <br />

            <h5>Item Reviews</h5>
            <hr />

            {reviews.length > 0 ? (
              reviews.map((review) => {
                return (
                  <p key={review.review_id}>
                    Rating: {review.rating} <br /> {review.reviewcomments}
                  </p>
                );
              })
            ) : (
              <p> No reviews for this product </p>
            )}
          </Col>
        </Row>
        </div>
      </Container>
    </>
  );
}

export default Details;
