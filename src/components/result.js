import React, { Component } from 'react'
const axios = require('axios')


class Result extends Component {
	
	state={
		data: []
	}

	constructor(props){

    	super(props);
    	axios.get(`http://localhost:8080/search?source=${this.props.source}&destination=${this.props.destination}&date=${this.props.date}`).then(res => {
      		console.log('haha')
      		console.log(res.data)
      		this.setState({data: res.data})
    	})
    }

    render() {
	return(
		<div>
			{ this.state.data.map(data => <p> { data.source } </p> )}
		</div> 
		)}
}

export default Result;