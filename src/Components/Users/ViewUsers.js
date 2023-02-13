import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Nav from "../../Layout/Nav";

const ViewUsers = () => {
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/view-users").then((res) => {
      if (res.data.length === 0) {
        setUsers(null);
        setLoading(false);
      } else {
        setUsers(res.data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                {loading === true ? (
                  <>
                    <h2>Loading Users.....</h2>
                  </>
                ) : (
                  <>
                    {users === null ? (
                      <>
                        <h2>No Users Found Till Now</h2>
                      </>
                    ) : (
                      <>
                        {users.map((u, i) => (
                          <>
                            <div className="col-md-6 col-lg-4 mb-3">
                              <div className="card h-80">
                                <div className="card-body">
                                  <h5 className="card-title">{u.name}</h5>
                                  <b>Email :</b>
                                  <p className="card-text">{u.email}</p>
                                  <b>Phone Number :</b>
                                  <p className="card-text">{u.phone}</p>
                                  <b>City :</b>
                                  <p className="card-text">{u.city}</p>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUsers;
