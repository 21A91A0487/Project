import React from "react"
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import { Link } from "react-router-dom"
import ReactApexChart from "react-apexcharts"
import SidebarContent from "../components/VerticalLayout/SidebarContent"
//import SalesReport from "./Dashboard2.js/SalesReport"
import "../App.css"
import "../pages/asset.css"
// import "../pages/IconFontawesome.js"
import {
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
  } from "reactstrap"



const series = [70]

const options = {
    plotOptions: {
        radialBar: {
            offsetY: -12,
            hollow: {
                margin: 5, size: '60%', background: 'rgba(59, 93, 231, .25)',
            }
            ,
            dataLabels: {
                name: {
                    show: false,
                }
                ,
                value: {
                    show: true, fontSize: '12px', offsetY: 5,
                }
                ,
                style: {
                    colors: ['#fff']
                }
            }
        }
        ,
    }
    ,
    colors: ['#3b5de7'],
}

const series1 = [81]

const options1 = {
    plotOptions: {
        radialBar: {
            offsetY: -12,
            hollow: {
                margin: 5, size: '60%', background: 'rgba(69, 203, 133, .25)',
            }
            ,
            dataLabels: {
                name: {
                    show: false,
                }
                ,
                value: {
                    show: true, fontSize: '12px', offsetY: 5,
                }
                ,
                style: {
                    colors: ['#fff']
                }
            }
        }
        ,
    }
    ,
    colors: ['#45CB85'],
}


const Assets = () => {
    return (
        <React.Fragment>
        <div className="page-content">
    
          <Row>
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="page-title mb-0 font-size-18">View Infrastructure</h4>
  
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item active">Asset Infrastructure</li>
                  </ol>
                </div>
  
              </div>
            </div>
          </Row>
        <div>
        <Row>
                    <Col lg={12}>

                        <Row>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div id="myDiv">
                                                    <p className="text-muted fw-medium mt-1 mb-2">Iron Tables</p>
                                                </div>
                                                <div><Button
                    color="primary"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    499
                    </Button>{""}
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">PVC Tables</p>
                                                    <h4>81</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">PVC chairs(hand)</p>
                                                    <h4>1777</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">pad chairs</p>
                                                    <h4>249</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Mentor desk</p>
                                                    <h4>13</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Amplifier Desk</p>
                                                    <h4>8</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">ceiling fans</p>
                                                    <h4>268</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">ceiling lights(Big)</p>
                                                    <h4>200</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Ac's (casset)4 Ton</p>
                                                    <h4>1</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">AC's(casset)3 Ton</p>
                                                    <h4>3</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">AC's (casset)2 Ton</p>
                                                    <h4>49</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">AC's (split)1 Ton</p>
                                                    <h4>8</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">TV's(LG)55"</p>
                                                    <h4>27</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">TV's(LG)65"</p>
                                                    <h4>81</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">TV's (Vivitek) 65"</p>
                                                    <h4>5</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">TV's (Maxhub) 65"</p>
                                                    <h4>1</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">TV's (Samsung) 32"</p>
                                                    <h4>1</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">TV's (LG) 32"</p>
                                                    <h4>6</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Gang Boxes</p>
                                                    <h4>157</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Access Points</p>
                                                    <h4>64</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Projector</p>
                                                    <h4>7</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Projector Screen</p>
                                                    <h4>5</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">TV Remote</p>
                                                    <h4>8</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Projector Remote</p>
                                                    <h4>5</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Barcode Scanners</p>
                                                    <h4>10</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Amplifier </p>
                                                    <h4>8</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Receiver</p>
                                                    <h4>8</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Hand Mic</p>
                                                    <h4>8</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Podium Mic</p>
                                                    <h4>6</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Collar Mic</p>
                                                    <h4>8</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Window Curtains</p>
                                                    <h4>232</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Revolving Chairs (New)</p>
                                                    <h4>70</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">AC Remote</p>
                                                    <h4>23</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Visitor Chairs</p>
                                                    <h4>3</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Long Working Table</p>
                                                    <h4>3</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Working Desk</p>
                                                    <h4>5</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>Tables
                                                    <p className="text-muted fw-medium mt-1 mb-2">Dining Tables</p>
                                                    <h4>3</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Revolving Chaires (Old) </p>
                                                    <h4>23</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Window Blinds</p>
                                                    <h4>16</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Wall Sockets</p>
                                                    <h4>563</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">"S" Type Chairs</p>
                                                    <h4>2</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Revolving Chiar (Executive)</p>
                                                    <h4>1</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">File Cupboards (Office)</p>
                                                    <h4>26</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">PVC Chairs (Hand) Type 2</p>
                                                    <h4>25</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Support Desk</p>
                                                    <h4>3</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Corridor TV (LG) 55"</p>
                                                    <h4>4</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Footwear Stands</p>
                                                    <h4>35</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2"> Fire Cylinders</p>
                                                    <h4>14</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Lockers</p>
                                                    <h4>90</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Corridor Ceiling Lights (Small)</p>
                                                    <h4>61</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Corridor Ceiling Lights (Big)</p>
                                                    <h4>4</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Water Purifier</p>
                                                    <h4>4</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Green Mat</p>
                                                    <h4>4</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={8}>
                                                <div>
                                                    <p className="text-muted fw-medium mt-1 mb-2">Toy Dustbin Big</p>
                                                    <h4>3</h4>
                                                </div>
                                            </Col>

                                            <p className="mb-0"><span className="badge badge-soft-success me-2"> 0.8% <i
                                            className="mdi mdi-arrow-up"></i> </span>    Overall count</p>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            

                        </Row>

                        
                        

                    </Col>
                    {/* <EmailSent /> */}
                </Row>
        </div>
  
        </div>
      </React.Fragment>
    );
};

export default Assets;