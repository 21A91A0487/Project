import React from "react";
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import "../pages/Floor2.css"

const Floor2 = () => {
    return (
        <React.Fragment>
        <div className="page-content">
        <Row>
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="page-title mb-0 font-size-18">FLOOR2 Infrastructure</h4>
  
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    {/* <li className="breadcrumb-item active">Asset Infrastructure</li> */}
                    <input type="text" placeholder="Search.." name="search2"></input>
                    
                  </ol>
                </div>
  
              </div>
            </div>
          </Row>
          <Row>
            <Col lg={12}>
                <Row>
                <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2"> Hall 2.1</p>
                                                    <p>Overall count</p>
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p> */}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2"> Hall 2.2</p>
                                                    <p>Overall count</p>
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p> */}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2"> Cabins</p>
                                                    <p>Overall count</p>
                                                </div>
                                            </Col>
                                        </Row>

                                        {/* <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p> */}
                                    </CardBody>
                                </Card>
                            </Col>
                </Row>
                
               
                
            </Col>
          </Row>

            
        </div>
        </React.Fragment>
    );
}

export default Floor2;