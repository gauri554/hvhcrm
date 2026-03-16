import React from "react";
import { Card, CardBody, Row, Col } from "react-bootstrap";
import Link from "next/link";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { statData, StatType } from "../data";

const StatCard = ({ title, btnTitle, href, icon, variant }: StatType) => {
  return (
    <Card className="shadow-sm border-0">
      <CardBody className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <div
            className={`d-flex align-items-center justify-content-center rounded-circle bg-${variant}-subtle`}
            style={{ width: "40px", height: "40px" }}
          >
            <IconifyIcon icon={icon} className={`fs-20 text-${variant}`} />
          </div>

          <div>
            <h6 className="text-muted mb-1 text-uppercase fs-12">{title}</h6>

            <Link
              href={href}
              className={`btn btn-soft-${variant}`}
              style={{ fontSize: "11px", padding: "2px 8px" }}
            >
              {btnTitle}
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Stat = () => {
  return (
    <Row className="row-cols-2  g-1">
      {statData.map((item, idx) => (
        <Col key={idx}>
          <StatCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Stat;
