import React from "react"
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import { Link } from "react-router-dom"

const Floor = () => {
    return (
        <React.Fragment>
        <div className="page-content">
    
          <Row>
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="page-title mb-0 font-size-18">View Infrastructure</h4>
  
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item active">Floor-Wise Infrastructure</li>
                  </ol>
                </div>
  
              </div>
            </div>
          </Row>
        </div>
      </React.Fragment>
    );
};

export default Floor;