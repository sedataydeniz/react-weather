import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Box from './box.js';
import $ from 'jquery';

export class App extends Component{
	constructor(props){
		super(props);
		
		this.loadData(this);
		this.state = {data:null};
	}


	loadData(t){
		let url = 'http://apidev.accuweather.com/currentconditions/v1/318251.json?language=en&apikey=hoArfRosT1215';

			$.get(url,null,function (data){
				
				data = data;
				console.log(data[0]);
				t.setState({data:data[0]});
				
			},"json");
	}

	render(){
			
			return <Box data={this.state.data} />
	}
}

ReactDOM.render(<App />, document.getElementById('app') )