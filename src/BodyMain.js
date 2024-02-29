import { useEffect, useState } from "react";
import RepositoryCard from "./repositoryCard";
import { Col, Row, Button, Input} from "antd";
import {
  FunnelPlotOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Categories from "./Categories";


const { Search } = Input;

function BodyPage() {
  
  const [getArrayCategories, setArrayCategories] = useState([])
  const [repository, setRepository] = useState([])
 
  
  const handleSearch = (e) => {
    let value = e.target.value;
    let filteredData = getArrayCategories.filter(i => i.topic.toLowerCase().includes(value))
    setArrayCategories(filteredData)
  }

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
      .then((response) => {
        // Assuming your response data is in JSON format
        setRepository(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/item`)
      .then((response) => {
        // Assuming your response data is in JSON format
        setArrayCategories(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
      <Row>
        <Col
          span={6}
          style={{
            height: "200vh",
            border: "1px solid #e8e8f6",
            overflowY: "scroll",
            overflowx: "scroll"
          }}
        >
          <div style={{ marginBottom: "3%" }}>
            <Search placeholder="Search" onChange={(e) => handleSearch(e)} onSearch={(e) => handleSearch(e)} />
          </div>
          <div>
            {getArrayCategories.map((item) => {
              return<Categories
              value={item}
              />
        
            })}
          </div>
        </Col>
        <Col span={18}>
          <Row
            style={{
              height: "10vh",
              background: "#f0f0f4",
              display: "flex",
              alignItems: "center",
              border: "1px solid #e8e8f6",
            }}
          >
            <Col span={1}></Col>
            <Col span={23}>
              <div>
                <Button style={{ background: "white", color: "black" }}>
                  <FunnelPlotOutlined style={{ color: "black" }} />
                  Add Global Filters
                </Button>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              height: "25vh",
              background: "white",
              display: "flex",
              alignItems: "center",
              border: "1px solid #e8e8f6",
            }}
          >
            <Col span={1}></Col>
            <Col span={23}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                aws_browser.csv
              </div>
            </Col>
          </Row>
          <Row
            style={{
              height: "9vh",
              background: "white",
              display: "flex",
              alignItems: "center",
              border: "1px solid #e8e8f6",
            }}
          >
            <Col span={18}></Col>
            <Col span={6}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>6,227 results</div>
              <div>
                <Button style={{ background: "White", color: "Black" }}>
                  Orginal order
                </Button>
              </div>
            </Col>

          </Row>
          <Row>
            <Col span={1}></Col>
            <Col span={23}>
              <div>
                {repository.map((item) => {
                  return <RepositoryCard
                    className='scroll'
                    value={item}
                  />

                })}

              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      
    </div>
  );
}

export default BodyPage;
