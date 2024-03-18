import { useState } from "react"
// import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import React from "react"
import "../pages/Adddata.css"
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

 


function Form(){
    const [formdata,setformdata]=useState({
        'Property-Name':'',
        'Property-Count':'',
        'Description':''
    })

    return(
        <React.Fragment>
        <div className="page-content">
        <Row>
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="page-title mb-0 font-size-18">Adding Infrastructure Data</h4>
  
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    {/* <li className="breadcrumb-item active">Asset Infrastructure</li> */}
                    {/* <input type="text" placeholder="Search.." name="search2"></input> */}
                    
                  </ol>
                </div>
  
              </div>
            </div>
            </Row>
            </div>
            <Card>
                <CardBody>
                  <CardTitle className="data">ADD DATA</CardTitle>

                  <AvForm>
                    <AvField
                      className="mb-3"
                      name="Min_Length"
                      label="Property Name:"
                      type="text"
                    />
                    <AvField
                      className="mb-3"
                      name="Max_Length"
                      label="Specifications:"
                      type="text"
                    />
                    <AvField
                      className="mb-3"
                      name="Range_Length"
                      label="Icon:"
                      type="select"
                    />
                    <AvField
                      className="mb-3"
                      name="Min_Value"
                      label="Location:"
                      type="text"
                    />
                    <AvField
                      className="mb-3"
                      name="Max_Value"
                      label="Status:"
                      type="text"
                    />
                    <AvField
                      className="mb-3"
                      name="Range_Value"
                      label="Count:"
                      type="number"
                    />
                    <FormGroup className="mb-0">
                      <div>
                        <Button type="submit" color="primary" className="ms-1">
                          Submit
                        </Button>{" "}
                        <Button type="reset" color="secondary">
                          Cancel
                        </Button>
                      </div>
                    </FormGroup>
                  </AvForm>
                </CardBody>
              </Card>
            
            
            </React.Fragment>
        
           
    )
}
export default Form;