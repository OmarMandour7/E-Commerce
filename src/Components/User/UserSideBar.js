import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center mon">
                       Orders
                    </div>
                </Link>
                <Link to="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center mon">
                        Favourite Products
                    </div>
                </Link>
                <Link to="/user/addresses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center mon">
                        User Addresses
                    </div>
                </Link>

                <Link to="/user/profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mon  my-1 border-bottom p-2 mx-auto text-center">
                      User Profile
                    </div>
                </Link>


            </div>
        </div>
    )
}
export default UserSideBar
