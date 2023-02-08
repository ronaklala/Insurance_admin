import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Nav from "../../Layout/Nav";

const VerifyAgents = () => {
  const [agents, setAgents] = useState();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/agent/get_agents_data_no_verification")
      .then((res) => {
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
                {loading === true ? (
                  <>
                    <h2> Loading Data ......</h2>
                  </>
                ) : (
                  <>
                    <h2>Total Remaining Verifications: {agents.length}</h2>
                    <div className="row mb-5">
                      {agents.map((agent, i) => (
                        <>
                          <div className="col-md-3 col-lg-3 mb-3" key={i}>
                            <div className="card h-80">
                              <div className="card-body">
                                <img
                                  src="https://i.ibb.co/LhVypFg/image-removebg-preview.png"
                                  className="card-img-top"
                                />
                                <h5 className="card-title">{agent.name}</h5>
                                <b>Email :</b>
                                <p className="card-text">{agent.email}</p>
                                <div className="row">
                                  <button className="btn btn-primary">
                                    View
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
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

export default VerifyAgents;
