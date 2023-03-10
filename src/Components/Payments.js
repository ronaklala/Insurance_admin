import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Nav from "../Layout/Nav";

const Payments = () => {
  const [payment, setPayments] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/admins/payments/get").then((res) => {
      setPayments(res.data);
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
                      <h2>Loading Payments.....</h2>
                    </>
                  ) : (
                    <>
                      {payment === null ? (
                        <>
                          <h2>No Agents have Purchased Any Credits</h2>
                        </>
                      ) : (
                        <>
                          {payment.map((u, i) => (
                            <>
                              {u.agent_details.map((a, i) => (
                                <>
                                  <div className="col-md-6 col-lg-4 mb-3">
                                    <div className="card h-80">
                                      <div className="card-body">
                                        <b>Agent Email :</b>
                                        <p className="card-text">{a.email}</p>
                                        <b>Agent Phone Number :</b>
                                        <p className="card-text">{a.phone}</p>
                                        <b>Agent Name :</b>
                                        <p className="card-text">{a.name}</p>
                                        <b>Plan Purchased :</b>
                                        <p className="card-text">{u.plan}</p>
                                        <b>Puchased On :</b>
                                        <p className="card-text">
                                          {moment(u.createdAt).format("LL")}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ))}
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

export default Payments;
