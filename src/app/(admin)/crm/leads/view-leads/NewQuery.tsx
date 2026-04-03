"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Button, Modal,Card, Form, Row, Col, CardHeader, NavItem, CardBody } from "react-bootstrap";

const NewQuery =()=>{
 const [open, setOpen] = useState(false);
 const [requirementType, setRequirementType] = useState("");
    return(
        <>
            <Card>
                <CardHeader>
                    <div className="bg-dark p-1">
                        <h6 className="text-white mb-0">New Query</h6>
                    </div>
                    <Form.Group className="mb-2">
                        <Form.Label 
                         style={{ fontSize: "12px" }}>Requirement Type</Form.Label>
                    <div className="d-flex gap-2 mb-0"
                     style={{ fontSize: "12px" }}>
                        {[ "Package",
                    "Flight",
                    "Transfer",
                    "Visa",
                    "Hotel",
                    "Sightseeing",
                    "Miscellaneous",].map((item)=>(
                            <Form.Check
                            key={item}
                            type="radio"
                            label={item}
                              value={item}
        checked={requirementType === item}
        onChange={(e) => setRequirementType(e.target.value)}
                            />
                        )

                        )}
                    </div>
                    </Form.Group>
                </CardHeader>

                <CardBody className="border">
                   
                        {requirementType==="Package" && (
                            <Form>
                                <Row className="mb-2">
                                    <Col md={12}>
                                                         <Form.Label
                                                           style={{ fontSize: "10px" }}
                                                           className="text-primary"
                                                         >
                                                          Query Type
                                                         </Form.Label>
                                                         <div className="d-flex align-iems-center">
                                                            <Form.Check
                                                            type="radio"
                                                            label="FIT (Normal)"
                                                            name="type"
                                                            className="me-2"
                                                            style={{fontSize:"12px"}}/>
                                                            
                                                            <Form.Check
                                                            type="radio"
                                                            label="GIT Group"
                                                            name="type"
                                                            style={{fontSize:"12px"}}/>
                                                            </div></Col>

                                                            <Col md={3}>
                                                               <Form.Label
                                                                                    style={{ fontSize: "10px" }}
                                                                                    className="text-primary"
                                                                                  >
                                                                                 Going To
                                                                                  </Form.Label>
                                                                                    <Form.Control size="sm" style={{ fontSize: "12px" }} />
                                                            </Col>

                                                             <Col md={3}>
                                                               <Form.Label
                                                                                    style={{ fontSize: "10px" }}
                                                                                    className="text-primary"
                                                                                  >
                                                                                 Going From
                                                                                  </Form.Label>
                                                                                    <Form.Control size="sm" style={{ fontSize: "12px" }} />
                                                            </Col>
                                                            <Col md={3}>
                                                             <Form.Label
                                                                                    style={{ fontSize: "10px" }}
                                                                                    className="text-primary"
                                                                                  >
                                                                               Specific Date
                                                                                  </Form.Label>
                                                                                  <Form.Control type="date" size="sm" style={{ fontSize: "12px" }} />
                                                            </Col>
                                                            <Col md={3}>
                                                           <Form.Label
                                                                                   style={{ fontSize: "10px" }}
                                                                                   className="text-primary"
                                                                                 >
                                                                                   No of Days
                                                                                 </Form.Label>
                                                                                 <Form.Control size="sm" style={{ fontSize: "12px" }} />
                                                            </Col>


                                </Row>
                            </Form>
                        )}
                    
                </CardBody>
            </Card>
        </>
    );
};
export default NewQuery;