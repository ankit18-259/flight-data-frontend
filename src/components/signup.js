import { useState } from 'react';

const axios = require('axios');

async function registerUser(credentials) {
    return axios.post('http://localhost:8080/users/signup', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(console.log('success'))
}

function Signup(){
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
  	const [password, setPassword] = useState();

    const handleSubmit = async e => {
    	e.preventDefault();
    	const token = await registerUser({
            email,
      		username,
      		password
    	});
    }

    return(
       <form onSubmit = {handleSubmit}>
           <label>
      			<p>Email</p>
        		<input type="text" onChange={e => setEmail(e.target.value)} />
        	</label>
            <label>
      			<p>Username</p>
        		<input type="text" onChange={e => setUserName(e.target.value)} />
        	</label>
            <label>
      			<p>Password</p>
        		<input type="password" onChange={e => setPassword(e.target.value)}/> 
        	</label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Signup;