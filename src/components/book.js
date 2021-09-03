import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './css/styles.css'

function Book() {

	return(
		<div className='center'>
			<form className='margin-30' noValidate autoComplete="off">
  				<TextField className='margin-10' id="outlined-basic" label="FULL NAME" variant="outlined" />
  				<TextField className='margin-10' id="outlined-basic" label="AGE" variant="outlined" />
  				<br />
  				<TextField className='margin-10' id="outlined-basic" label="D.O.B" variant="outlined" />
  				<TextField className='margin-10' id="outlined-basic" label="CONTACT" variant="outlined" />
  				<br />
  				<TextField className='margin-10' id="outlined-basic" label="EMAIL" variant="outlined" />
			</form>
			<Button className='left-40' variant="contained" color="primary">
				Submit
			</Button>
		</div>
		)
}

export default Book;