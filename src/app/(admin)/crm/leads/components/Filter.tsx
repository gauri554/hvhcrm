"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";

function OffCanvasExample({ name, ...props }: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outline-primary"
        onClick={handleShow}
        className="me-2"
        size="sm"
        style={{ fontSize: "10px", fontWeight: "bold" }}
      >
        <Icon icon="tabler:filter" width="12" /> {name}
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "900px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Icon icon="tabler:filter" className="me-2" />
            Filter Results
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Row className="g-3">
            {/* Lead Type */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Select Lead Type
                </Form.Label>
                <Form.Select size="sm" style={{ fontSize: "12px" }}>
                  <option>Select Lead Type</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Lead Stage */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Select Lead Stage
                </Form.Label>
                <Form.Select size="sm" style={{ fontSize: "12px" }}>
                  <option>Select Lead Stage</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Lead Source */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Select Lead Source
                </Form.Label>
                <Form.Select size="sm" style={{ fontSize: "12px" }}>
                  <option>Select Lead Source</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Customer Name */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Customer Name
                </Form.Label>
                <Form.Control size="sm" style={{ fontSize: "12px" }} />
              </Form.Group>
            </Col>

            {/* Customer Mobile */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Customer Mobile
                </Form.Label>
                <Form.Control size="sm" style={{ fontSize: "12px" }} />
              </Form.Group>
            </Col>

            {/* Customer Email */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Customer Email
                </Form.Label>
                <Form.Control size="sm" style={{ fontSize: "12px" }} />
              </Form.Group>
            </Col>

            {/* Source Destination */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Source/Destination
                </Form.Label>
                <Form.Control size="sm" style={{ fontSize: "12px" }} />
              </Form.Group>
            </Col>

            {/* Assigned To */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  Assigned to
                </Form.Label>
                <Form.Select size="sm" style={{ fontSize: "12px" }}>
                  <option>Select Owner</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* From Date */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  From Date
                </Form.Label>
                <InputGroup size="sm">
                  <Form.Control
                    placeholder="dd-mm-yyyy"
                    style={{ fontSize: "12px" }}
                  />
                  <InputGroup.Text>
                    <Icon icon="tabler:calendar" />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>

            {/* To Date */}
            <Col md={3}>
              <Form.Group>
                <Form.Label
                  style={{ fontSize: "12px" }}
                  className="text-primary"
                >
                  To Date
                </Form.Label>
                <InputGroup size="sm">
                  <Form.Control
                    placeholder="dd-mm-yyyy"
                    style={{ fontSize: "12px" }}
                  />
                  <InputGroup.Text>
                    <Icon icon="tabler:calendar" />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Unassigned */}
            <Col md={3} className="d-flex align-items-end">
              <Form.Check label="Un-Assigned" style={{ fontSize: "12px" }} />
            </Col>
          </Row>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-4 gap-2">
            <Button
              variant="outline-danger"
              size="sm"
              style={{ fontSize: "12px" }}
            >
              Reset
            </Button>

            <Button variant="danger" size="sm" style={{ fontSize: "12px" }}>
              <Icon
                icon="tabler:search"
                className="me-1"
                style={{ fontSize: "12px" }}
              />
              Filter
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Filter() {
  return (
    <>
      <OffCanvasExample placement="end" name="Filter" />
    </>
  );
}

export default Filter;
