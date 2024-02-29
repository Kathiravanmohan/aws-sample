import React, { useState } from 'react';
import { Col, Row, Button, Input, Modal } from "antd";
import { useEffect } from 'react';
import axios from 'axios';
import Logout from './Hooks/logout';
import './App.css'
import polymer from './images/polymer.png'
import app from './images/app.png'
import { MdDeleteOutline, MdDriveFolderUpload } from "react-icons/md"
import { FaRegHeart } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoIosKeypad, IoMdPersonAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SettingOutlined } from "@ant-design/icons";
import Allapp from './Workspace_components/Allapp';
import Favorite from './Workspace_components/Favorite';
import Shared from './Workspace_components/Shared';
import Trash from './Workspace_components/Trash';

const { Search } = Input;

function Workspace() {
  <link rel="icon" href={polymer} />
  const [data, setData] = useState([]);
  const [showAllapp, setShowAllapp] = useState(false);
  const [showFavorite, setshowfavorite] = useState(false);
  const [showTrash, setshowtrash] = useState(false);
  const [showShared, setshowshared] = useState(false);
  const UseLogout = Logout();
  const token = sessionStorage.getItem('token');

  const handledata = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/login/all`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.status === 200) {
        setData(res.data.user);
      }
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.status === 401) {
        UseLogout();
      }
    }
  }

  useEffect(() => {
    if (token) {
      handledata();
    }
  }, [token]);

  const handleAllappClick = () => {
    setShowAllapp(true);
    setshowfavorite(false);
    setshowtrash(false);
    setshowshared(false);
  }
  const handlefavoriteClick = () => {
    setshowfavorite(true);
    setShowAllapp(false);
    setshowtrash(false);
    setshowshared(false);
  }

  const handlesharedClick = () => {
    setshowshared(true);
    setShowAllapp(false);
    setshowfavorite(false);
    setshowtrash(false);
  }

  const handletrashClick = () => {
    setshowtrash(true);
    setShowAllapp(false);
    setshowfavorite(false);
    setshowshared(false); 
  }

  const handleCancel = () => {
    setShowAllapp(false);
  }

  return (
    <div>
      <link rel="icon" href={polymer} />
      <Row>
        <Col span={5} style={{ height: "100vh", border: "1px solid #e8e8f6", overflow: 'hidden' }}>
          <Row>
            <div className="btn dropdown-toggle dropdown-toggle-no-caret " style={{ marginTop: "10px" }}>
              <span class="title">
                <span class="logo">
                  <img src={polymer} alt='polymer' className='google-logo' />
                </span>
                <span class="name">
                   Workspace
                </span>
              </span>
              <span class="caret"></span>
            </div>
          </Row>
          <Row >
            <div className="add-source-button" onClick={handleAllappClick}>
              + Add Source
            </div>
          </Row>
          <Row style={{ marginTop: "10px", marginLeft: "20px" }}>Data</Row>
          <div className="item" onClick={handleAllappClick}>
            <img src={app} alt='polymer' className='item-logo' />
            <span className="name">All Apps</span>
          </div>
          <div className="item" onClick={handlefavoriteClick}><FaRegHeart className='item-logo' /> <span className="name">Favorite</span></div>
          <div className="item" onClick={handlesharedClick}><CiGlobe className='item-logo' /> <span className="name">Shared</span></div>
          <div className="item" onClick={handletrashClick}><MdDeleteOutline className='item-logo' /><span className="name">Trash</span></div>
          <Row style={{ marginTop: "10px", marginLeft: "20px" }}>Sources</Row>
          <div className="item"><MdDriveFolderUpload className='item-logo' /> <span className="name">Uploaded Data</span></div>
          <div className="item"><IoIosKeypad className='item-logo' /> <span className="name">Example datasets</span></div>
          <div className='content'>
            <div className="item-bottom"><IoSettingsOutline className='item-logo' /> <span className="name">Workspace settings</span></div>
            <div className="item-bottom"><IoMdPersonAdd className='item-logo' /> <span className="name">Add collaborator</span></div>
          </div>
        </Col>
        <Col span={19}>
          <Row>
            <div className='polymer-explorer-top-bar'>
              <div className='name'><img src={app} alt='polymer' className='google-logo' />All Apps</div>
              <Search className='search' placeholder="search" style={{ width: 300 }} />
            </div>
          </Row>
          {showAllapp && <Allapp />}
          {showFavorite && <Favorite />}
          {showTrash && <Trash />}
          {showShared && <Shared />}
        </Col>
      </Row>
      
    </div>
  );
}

export default Workspace;
