import React from "react";
import { Card, CardBody, Form } from "react-bootstrap";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

const EmployeePerformance = () => {
  return (
    <Card className="shadow-sm border-0">
      <CardBody>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-semibold d-flex align-items-center gap-2">
            <IconifyIcon
              icon="solar:chart-square-bold-duotone"
              className="text-primary fs-20"
            />
            Employee Performance
          </h6>

          <Form.Select size="sm" style={{ width: "110px" }}>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </Form.Select>
        </div>

        {/* Employee Select */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <Form.Control
            type="text"
            value="RAJENDRA BUGADE"
            readOnly
            className="bg-light"
          />
          <IconifyIcon
            icon="solar:refresh-bold-duotone"
            className="fs-20 text-muted"
          />
        </div>

        {/* Stats */}
        <div className="d-flex justify-content-between mb-2">
          <span>Total Sales</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Queries In Process</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Proposal Sent</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between mb-2 text-danger">
          <span>Proposal Pending</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between mb-2 text-danger">
          <span>Queries Lost</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between mb-2 text-primary">
          <span>Verbal Won</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between mb-3 text-success">
          <span>Won</span>
          <span>0</span>
        </div>

        <hr style={{ borderColor: "#e6d9ff", borderWidth: "3px" }} />

        <div className="d-flex justify-content-between mb-2">
          <span>Leads In Process</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between mb-2 text-danger">
          <span>Leads Lost</span>
          <span>0</span>
        </div>

        <div className="d-flex justify-content-between">
          <span>Leads Converted</span>
          <span>0</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default EmployeePerformance;
