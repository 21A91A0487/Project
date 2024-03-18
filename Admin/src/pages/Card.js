import React from "react";
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import "../pages/Card.css"

const card = () => {
  const data = [{
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  }, {
    property_name: "fan",
    count: 900,
    icon: "icon"
  },]
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Infrastructure</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  {/* <li className="breadcrumb-item active">Asset Infrastructure</li> */}
                  <input type="text" placeholder="Search.." name="search2"></input>

                </ol>
              </div>

            </div>
          </div>
        </Row>

        <div className="Property_Division">
          {
            data.map(ele => {
              return (
                <div className="cardd">
                  <div className="cardd1"><p>{ele.icon}</p></div>
                  <div className="cardd4">{ele.property_name}</div>
                  <div className="cardd2">
                    <h1 className="cardd3">{ele.count}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>





      </div>
    </React.Fragment>
  );
}

export default card;