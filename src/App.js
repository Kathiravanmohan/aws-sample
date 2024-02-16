import React from "react";
import { Col, Row } from "antd";

import NavbarPage from "./NavbarMain";
import BodyPage from "./BodyMain";

function App() {
  return (
    <div>
      <Row style={{ height: "10vh" }} >
        <Col span={24} >
          <NavbarPage />
        </Col>
      </Row>
      <Row style={{ height: "80vh" }} >
        <Col span={24} >
          <BodyPage />
        </Col>
      </Row>
    </div>
  );
}

export default App;
