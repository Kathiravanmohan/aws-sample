import React from "react";
import { Col, Row, Card, Button } from "antd";
import {
  UserAddOutlined,
  SettingOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import awsSymbol from './images/awsSymbol.png'
import insights from './images/insights.png'

function NavbarPage() {
  let navigate = useNavigate()
  const onCliclPolymerScreen=()=>{
    const newWindow = window.open('/auth/login', '_blank');
    if (newWindow) {
      // Navigate in the new window
      newWindow.location.href = '/auth/login';
    } else {
      // Handle popup blocker or other issues
      navigate('/auth/login');
    }
  }
  return (
    <div>
      <Row style={{ height: "10vh", border: "1px solid #e8e8f6" }}>
        <Col span={1} style={{ display: "flex", alignItems: "center" }}>
          <img src={awsSymbol}  alt="AWS" className='google-logo' />
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
          <Button shape="round" ><img src={insights}  alt="insight" className='insight-logo' />
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
