import { useState } from 'react';

//UI Imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './css/styles.css'

const axios = require('axios');


//uses async call to the backend for POSTing data 
async function registerUser(credentials) {
    return axios.post('http://localhost:8080/users/signup', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: credentials
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
    //simple form for signup
    return(
        <div className="center">
            <form onSubmit = {handleSubmit}>
               <TextField className='margin-10' id="outlined-basic" label="EMAIL" variant="outlined" onChange={e => setEmail(e.target.value)} />
                <TextField className='margin-10' id="outlined-basic" label="USERNAME" variant="outlined" onChange={e => setUserName(e.target.value)} />
                <TextField className='margin-10' id="outlined-basic" type="password" label="PASSWORD" variant="outlined"onChange={e => setPassword(e.target.value)}/> 
                <Button type='submit' className='left-40' variant="contained" color="primary">
                        Submit
                </Button>
            </form>
        </div>
    )
}

export default Signup;