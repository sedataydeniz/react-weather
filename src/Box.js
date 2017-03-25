import React,{Component} from 'react';

export default class Box extends Component{
	render(){
	//	console.log(this.props.data)
		let d = JSON.stringify(this.props.data);
		let parse = JSON.parse(d);
		return <div>
			
			<div className="temperature">{parse.LocalObservationDateTime} </div>

		</div>
	}
}