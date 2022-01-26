import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        
        
        <Fragment>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
    <li className="nav-item">
      <Link to ="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to ="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
      <Link to ="/products" className="nav-link">Products</Link>
      </li>
      <li className="nav-item">
      <Link to ="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
      <Link to ="/about" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
      <Link to ="/cart" className="nav-link">Cart</Link>
      </li>
    </ul>
    </nav>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
    
  );
};

export default Profile;
