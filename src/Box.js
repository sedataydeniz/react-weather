import React,{Component} from 'react';

export default class Box extends Component{
	constructor(props){
		super(props);

	}

	componentWillMount(){


	}

	componentDidMount(){
		
		let d = JSON.stringify(this.props.data);
		let parse = JSON.parse(d);
	}
	

	renderObject(){
		if(this.props.data){
			let temp = this.props.data.Temperature.Metric.Value;
			let date = new Date(this.props.data.LocalObservationDateTime);
			
			console.log(this.props.data)
			return <div>
				<div className="location">İSTANBUL HAVA DURUMU</div>
				<div className="temp">{temp}<span>&deg;</span></div>
				<div className="date">{date.toDateString()}</div>
			</div>

		}	
		return <div>Yükleniyor...</div>
	}
 

	render(){
	//	console.log(this.props.data)
		
	

		return <div className="weather">
			
			<div className="weather-panel">{this.renderObject(this.props.data)}</div>
			<button onClick={this.props.updateHandle}>{this.props.buttonLabel}</button>
		</div>
	}
} 