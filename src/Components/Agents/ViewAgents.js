import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Nav from "../../Layout/Nav";

const ViewAgents = () => {
  const [agents, setAgents] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/agents/get").then((res) => {
      setAgents(res.data);
      setLoading(false);
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
                <div className="row">
                  {loading === true ? (
                    <>
                      <h2>Loading Agents.....</h2>
                    </>
                  ) : (
                    <>
                      {agents === null ? (
                        <>
                          <h2>No agents Found Till Now</h2>
                        </>
                      ) : (
                        <>
                          {agents.map((u, i) => (
                            <>
                              <div className="col-md-6 col-lg-4 mb-3">
                                <div className="card h-80">
                                  <div className="card-body">
                                    <h5 className="card-title">{u.name}</h5>
                                    <b>Agent Email :</b>
                                    <p className="card-text">{u.email}</p>
                                    <b>Agent Phone Number :</b>
                                    <p className="card-text">{u.phone}</p>
                                    <b>Agent City :</b>
                                    <p className="card-text">{u.city}</p>
                                    <b>Insurance Category :</b>
                                    <p className="card-text">{u.category}</p>
                                    <b>Insurance Type :</b>
                                    <p className="card-text">{u.type}</p>
                                    <b>Available Credits :</b>
                                    <p className="card-text">{u.credit}</p>
                                    <b>Is Verified Agent?</b>
                                    <p className="card-text">
                                      {u.is_verified === 1 ? (
                                        <>Yes</>
                                      ) : (
                                        <>No / Pending</>
                                      )}
                                    </p>
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
      </div>
    </>
  );
};

export default ViewAgents;
