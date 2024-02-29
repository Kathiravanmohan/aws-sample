import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import polymer from '../images/polymer.png'
import google_logo from '../images/google_logo.png'
import facebook_logo from '../images/facebook_logo.jpeg'
import { Link } from 'react-router-dom';

function SignIn() {
  

    let navigate = useNavigate()
  let handlesignin = async(e)=>{
     e.preventDefault()
     
     let data = {
      
      email :e.target.email.value,
      password :e.target.password.value
     }

     try {
      let res = await axios.post(`${process.env.REACT_APP_API_URL}/login/signin`, data)
      console.log(process.env.REACT_APP_API_URL)
      if(res.status===200){
        toast.success(res.data.message)
        sessionStorage.setItem('token',res.data.token)
        navigate('/workspace')
      }
     } catch (error) {
      
      toast.error(error.response.data.message || error.response.data.message)
     }
     
  }

  return <div>
    <link rel="icon" href={polymer} />

    <div className='container-fulid'>
    <h2 style={{fontStyle : "bold" , padding : "10px"}}>  <img src={polymer} alt='polymer' className='google-logo'/>Polymer</h2>
    <h1 className='welcome'>Log in</h1>
    <div className='container-login'>
    <Form onSubmit={handlesignin}> 
      <div className='buttons'>
      <a href="https://accounts.google.com/o/oauth2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&amp;response_type=code&amp;access_type=offline&amp;approval_prompt=force&amp;redirect_uri=https://app.polymersearch.com/auth/drive&amp;client_id=1007058940719-fph1jdrq6e2fdf6l3ior5l46ab5u5qe3.apps.googleusercontent.com" className="google-btn" color="light">
      <img src={google_logo} alt='google' className='google-logo'/> Sign in with google</a>
       </div>

       <div className='buttons'>
        <a data-v-e4252b26="" href="https://www.facebook.com/v13.0/dialog/oauth?client_id=672066687192063&amp;redirect_uri=https://app.polymersearch.com/api/auth/facebook/&amp;scope=email,public_profile" className="facebook_button" color="light">
        <img src={facebook_logo} alt='facebook' className='google-logo'/> Continue with facebook</a>
      
      </div>
      
      <div className="auth-separator"><div className="line"></div> <span>
    or
  </span> <div className="line"></div></div>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" name='email' />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password" name='password' />
      </Form.Group>
      
      <Button  variant='dark' type="submit" className='register'>
        Log in
      </Button>

      <div className="switch-auth-label mb-5">
                     Don't have an account <Link to="/auth/register">Register</Link></div>

                      <p  className="tos-notice">
                      By signing up, you agree to the <a href="https://www.polymersearch.com/terms-of-service" target="_blank" rel="noreferrer">
                        Terms of Service</a> and the 
                        <a  href="https://www.polymersearch.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></p>
    </Form>
   
    </div>
    </div>
    </div>
  
}

export default SignIn