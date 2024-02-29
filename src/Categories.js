import React from 'react'
import { useState } from "react"
import { Col, Row, Card, Input, Modal } from "antd"
import {
    SettingOutlined,
  } from "@ant-design/icons";

  const { Search } = Input;

function Categories({value}) {
    
    const [getModal, setModal] = useState({
        name: '',
        visible: false,
        count: 0
      });
    
    const handleClick = (name, count) => {
        setModal({
          name: name,
          visible: true,
          count: count
        })
    }
    const handleCancel = () => {
        setModal({
          name: '',
          visible: false,
          count: 0
        })
      }
      
  return <>
    
    <div style={{ marginBottom: "2%" }}>
        
                  <Card
                    size="small"
                    style={{
                      background: "#f0f0f4",
                    }}
                    onClick={() => handleClick(value.topic, value.count)}
                  >
                    <Row>
                      <Col span={1} style={{ background: `${value.color}` }}></Col>
                      <Col span={1}></Col>
                      <Col span={17}> {value.topic} </Col>
                      <Col span={1}></Col>
                      <Col span={4}>{value.count}</Col>
                    </Row>
                  </Card>
                

{getModal.visible === true && (
    <div>
      <Modal
        title={getModal.name}
        open={true}
        onCancel={handleCancel}
        width='70%'
      >
        <div style={{ display: 'flex' }} >
          <span>
            <Search placeholder="input search text"
              // onSearch={onSearch}
              style={{
                width: 300,
              }}
            />
          </span>
          <span style={{ fontSize: 'large' }} >
            <SettingOutlined />
          </span>
        </div>
      </Modal>
    </div>
    
  )}
  
  </div>

  </>
}

export default Categories