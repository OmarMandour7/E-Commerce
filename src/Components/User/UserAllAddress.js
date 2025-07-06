import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import ViewAddressesHook from "../../hook/user/view-addresses-hook";

const UserAllAddress = () => {
  const [addresses] = ViewAddressesHook();

  return (
    <div>
      <div className="admin-content-text pb-4 fon"> Addresses </div>
     {
                addresses? (addresses.map((item, index) => {
                    return <UserAddressCard key={index} item={item} />
                })) : <h6> Please Add Your Address</h6>
            }

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className="btn-add-address mon ">Add New Address  </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress;
