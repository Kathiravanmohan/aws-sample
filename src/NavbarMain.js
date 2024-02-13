import React from "react";
import { Col, Row, Card, Space, Button } from "antd";
import {
  UserAddOutlined,
  SettingOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

function NavbarPage() {
  const onCliclPolymerScreen=()=>{
    window.open('https://app.polymersearch.com/auth/register', '_blank');
  }
  return (
    <div>
      <Row style={{ height: "10vh", border: "1px solid #e8e8f6" }}>
        <Col span={1} style={{ display: "flex", alignItems: "center" }}>
          <img src='/images/awsSec.png' alt="AWS" />
        </Col>
        <Col
          span={5}
          style={{
            border: "1px solid #e8e8f6",
          }}
        >
          <Row>
            <Col span={2}></Col>
            <Col span={22} style={{ marginTop: "5%" }}>
              <b
                style={{
                  color: "#000000",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                }}
              >
                Everything AWS
              </b>
            </Col>
          </Row>
        </Col>
        <Col
          span={3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button shape="round" >
            Insights
          </Button>
            <Button shape="round" style={{color:'white',background:'black'}} >
           Data
          </Button>
        </Col>

        <Col span={8}></Col>
        <Col
          span={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            size="small"
            style={{
              width: 50,
              background: "#f0f0f4",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <UserAddOutlined />
            </div>
          </Card>
        </Col>
        <Col
          span={2}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card
            size="small"
            style={{
              width: 50,
              background: "#f0f0f4",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SettingOutlined />
            </div>
          </Card>
        </Col>
        <Col
          span={3}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <Button style={{ background: "black", color: "white" }} onClick={onCliclPolymerScreen} >
              <BranchesOutlined style={{ color: "white" }} />
              Try Ploymer
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NavbarPage;
