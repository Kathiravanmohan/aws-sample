import {useEffect, useState} from "react";
import RepositoryCard from "./repositoryCard";
import { Col, Row, Card,  Button, Input,Modal } from "antd";
import {
  SettingOutlined,
  FunnelPlotOutlined,
} from "@ant-design/icons";
const { Search } = Input;

function BodyPage() {
  const Categories = [
    { topic: "Search Keywords", color: "Red", count: "26 +" },
    { topic: "License Name", color: "Blue", count: "22 +" },
    { topic: "Language", color: "Green", count: "68 +" },
    { topic: "Owner", color: "Yellow", count: "2,687 +" },
    { topic: "Owner", color: "Orange", count: "2624 +" },
    { topic: "Owner type", color: "Purple", count: "2 +" },
    { topic: "Repository type", color: "Pink", count: "168 +" },
    { topic: "Service name", color: "Brown", count: "6053 +" },
    { topic: "Aws-verified", color: "Cyan", count: "3 +" },
    { topic: "Id", color: "Gray", count: "6227 +" },
  ];
  const[getArrayCategories,setArrayCategories]=useState(Categories)
  const[getArrayCategoriesDuplicate,setArrayCategoriesDuplicate]=useState(Categories)
  const[repository,setRepository]= useState([])
  const[getModal,setModal]=useState({
    name:'',
    visible:false,
    count:0
  });
  const handleClick=(name,count)=>{
    setModal({
      name:name,
      visible:true,
      count:count
    })
  }
  const handleCancel =()=>{
    setModal({
      name:'',
      visible:false,
      count:0
    })
  }
  const handleSearch=(e)=>{
   let value = e.target.value;
   let filteredData = getArrayCategoriesDuplicate.filter(i=>i.topic.toLowerCase().includes(value))
   setArrayCategories(filteredData)
  }

  useEffect(()=>{
    fetch("https://aws-backend-hvr5.onrender.com/")
    .then((res)=>res.json())
    .then((data)=>setRepository(data));
  },[])
  return (
    <div>
      <Row>
        <Col
          span={6}
          style={{
            height: "93vh",
            border: "1px solid #e8e8f6",
            overflowY: "scroll",
          }}
        >
          <div style={{ marginBottom: "3%" }}>
            <Search placeholder="Search" onChange={(e)=>handleSearch(e)}  onSearch={(e)=>handleSearch(e)} />
          </div>
          <div>
            {(getArrayCategories || []).map((i) => {
              return (
                <div style={{ marginBottom: "2%" }}>
                  <Card
                    size="small"
                    style={{
                      background: "#f0f0f4",
                    }}
                    onClick={()=>handleClick(i.topic,i.count)}
                  >
                    <Row>
                      <Col span={1} style={{ background: `${i.color}` }}></Col>
                      <Col span={1}></Col>
                      <Col span={17}> {i.topic} </Col>
                      <Col span={1}></Col>
                      <Col span={4}>{i.count}</Col>
                    </Row>
                  </Card>
                </div>
              );
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
              {repository.map((item)=>{
               return <RepositoryCard value={item}/>

              })}
            
            </div>
            </Col>
          </Row>     
        </Col>
      </Row>

      {getModal.visible == true&&(
        <div>
          <Modal
          title={getModal.name}
          open={true}
          onCancel={handleCancel}
          width='70%'
          >
          <div style={{display:'flex'}} >
            <span>
            <Search placeholder="input search text"
             // onSearch={onSearch}
             style={{
             width: 300,
             }}
             />
            </span>
            <span style={{fontSize:'large'}} >
            <SettingOutlined />
            </span>
          </div>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default BodyPage;
