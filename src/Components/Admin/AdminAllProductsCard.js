import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/productsAction";
import notify from "./../../hook/useNotifaction";

const AdminAllProductsCard = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

    const handleDelete = async () => {

        await dispatch(deleteProduct(item._id))
        setShow(false);
        window.location.reload();
        notify("  Deleted", "success");
    }
 
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className="font bg-white"> Confirm Delete  </div></Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="font bg-white"> You Are about To Delete </div> </Modal.Body>
        <Modal.Footer>
          <Button  className="font "  variant="success" onClick={handleClose}>
            Back
          </Button>
          <Button   className="font" variant="danger" onClick={handleDelete}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              Delete
            </div>
            <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
            <div className="d-inline item-delete-edit">Edit</div>
            </Link>
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={item.imageCover}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{item.title}</div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="mon">{item.quantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1"></div>
                  <div className="card-price fon">{item.priceAfterDiscount >= 1 ?
                                        (<div className="mx-2"> {item.priceAfterDiscount}  <span className="mx-2" style={{ textDecorationLine: 'line-through', color:"gray" }}>{item.price}</span></div>)
                                        : item.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
     
    </Col>
  );
};

export default AdminAllProductsCard;
