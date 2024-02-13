import React from "react";
import { Col, Row, Card, Space, Button } from "antd";
import {
  UserAddOutlined,
  SettingOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import NavbarPage from "./NavbarMain";
import BodyPage from "./BodyMain";

function App() {
  return (
    <div>
      <Row style={{height: "10vh"}} >
        <Col span={24} >
      <NavbarPage/>
        </Col>
      </Row>
      <Row style={{height: "80vh"}} >
        <Col span={24} >
      <BodyPage/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
