import React from 'react'
import './Signup.css'


function Signup() {
	const registerUser = (e) =>{
		e.preventDefault()
	const user ={ 
		username:e.target.username.value,
		email:e.target.email.value,
		contact:e.target.contact.value,
		password:e.target.password.value,
    confirmPasswordpassword:e.target.confirmPassword.value
		

	}
	if(e.target.password.value === e.target.confirmPassword.value)
		{
		fetch("http://localhost:3000/user/insert",{
			method: "POST",
			headers:{
				"Accept": "application/json",
				"Content-type": "application/json"
			},
			body:JSON.stringify(user)
		})
		.then((res)  => res.json())
      .then((data) =>{
        console.log(data)
      
    })
      
	}
	
	
}
	 
 return (
		<>
  <div className='signup'>
  <div className="wrapper">
    <h2>SignUp</h2>
    <form method="POST" onSubmit={(e)=>{registerUser(e)}}>
      <div className="input-box">
        <input type="name" name='username' placeholder='User Name' required/>
      </div>
      <div className="input-box">
        <input type="email" name='email' placeholder="Enter your email" required/>
      </div>
      <div className="input-box">
        <input type="contact" name='contact' placeholder="Enter your Contact" required/>
      </div>
      <div className="input-box">
        <input type="password" name='password' placeholder="Create password" required/>
      </div>
      <div className="input-box">
        <input type="password" name='confirmPassword' placeholder="Confirm password" required/>
      </div>
      <div className="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="Submit" value="Sign Up"/>
      </div>
      <div className="text">
        <h3>Already have an account? <a href='/Sign'>Login now</a></h3>
      </div>
    </form>
  </div>
  </div>

		</>
	  );
	}
	

export default Signup
