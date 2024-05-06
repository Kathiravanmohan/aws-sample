import React from 'react';
import polymer from './images/polymer.png';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Google_Ads_logo from './images/Google_Ads_logo.jpg'
import facebook_logo from './images/facebook_logo.jpeg'
import Google_Analytics_logo from './images/Google_Analytics_logo.jpg'
import Shopify_logo from './images/Shopify_logo.jpg'
import Upload_logo from './images/Upload_logo.jpg'
import Linear_logo from './images/Linear_logo.jpg'
import Aietable_logo from './images/Aietable_logo.jpg'
import Woo_commerce_logo from './images/Woo_commerce_logo.jpg'
import Zendesk_logo from './images/Zendesk_logo.jpg'
import Jira_logo from './images/Jira_logo.jpg'
import Googlesheet_logo from './images/Googlesheet_logo.jpg'
import Googledrive_logo from './images/Googledrive_logo.jpg'
import ReactPaginate from 'react-paginate';


function NewWorkspace() {
  const [showAllconnector, setshowAllconnector] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const connectorsPerPage = 4;
  const pagesVisited = pageNumber * connectorsPerPage;
  const isAuthenticated = sessionStorage.getItem('token');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/connectors`)
      .then((response) => {
        console.log('API response:', response.data);
        setshowAllconnector(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  

  const logout = () => {
    console.log("Logging out...");
    sessionStorage.removeItem('token');
    console.log("Token removed");
    // Redirect to login page after logout
    window.location.href = "/auth/login";
    console.log("Redirecting...");
};


  const mapImage = (imageName) => {
    switch (imageName) {
      case 'Google_Ads_logo':
        return Google_Ads_logo;
      case 'facebook_logo':
        return facebook_logo;
      case 'Google_Analytics_logo':
        return Google_Analytics_logo;
        case 'Shopify_logo':
            return Shopify_logo;
            case 'Googlesheet_logo':
            return Googlesheet_logo ;
            case 'Woo_commerce_logo':
            return Woo_commerce_logo;
            case 'Jira_logo':
            return Jira_logo;
            case 'Zendesk_logo':
            return Zendesk_logo;
            case 'Linear_logo':
            return Linear_logo;
            case 'Googledrive_logo':
            return Googledrive_logo;
            case 'Aietable_logo':
            return Aietable_logo;
            case 'Googlesheet_logo':
            return Googlesheet_logo;
            case 'Upload_logo':
            return Upload_logo;
            case '':
            return ;
            case '':
            return ;
      default:
        return null;
    }
  }; 
  const displayConnectors = showAllconnector
    .slice(pagesVisited, pagesVisited + connectorsPerPage)
    .map((item) => (
      <Card className='card-connector' key={item.name}>
        <Card.Img variant="top" src={mapImage(item.logo)} alt={item.name} height="90" width="115"/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Button variant="primary" className='card-button' href={item.Url}>
            Connect Now
          </Button>
        </Card.Body>
      </Card>
    ));

  const pageCount = Math.ceil(showAllconnector.length / connectorsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <>
      <h5 style={{ fontStyle: 'bold', padding: '10px' }}>
        <img src={polymer} alt="polymer" className="insight-logo" /> Polymer
      </h5>
      <h4 style={{ fontStyle: 'bold', textAlign: 'center' }}>Connect your first data source to get started!</h4>
<div>
        {isAuthenticated && (
          <button onClick={logout} className='logout'>Logout</button>
        )}
      </div>

      <div className="card-container">{displayConnectors}</div>
      <br/>
      <br/>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
      
    </>
  );
}

export default NewWorkspace;
