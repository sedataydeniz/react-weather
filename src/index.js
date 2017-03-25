import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Box from './box.js';
import $ from 'jquery';
import scss from '../sass/style.scss'

export class App extends Component{
	constructor(props){
		super(props);
		
		this.loadData(this);
		this.state = {data:null,buttonLabel:'Güncelle'};
	}


	updateClickHandle(){
		this.loadData(this);
		this.setState({buttonLabel:"Yükleniyor..."})
	}

	loadData(t){
		
		let url = 'http://apidev.accuweather.com/currentconditions/v1/318251.json?language=tr&apikey=hoArfRosT1215';
			
			$.get(url,null,function (data){
				
				let d = data[0];
			//	d.Temperature.Metric.Value = Math.floor(Math.random() * 40) 
			//	console.log(data[0]);
				t.setState({data:d,buttonLabel:'Güncelle'});
				
			},"json");
	} 

	render(){
			
			return <Box buttonLabel={this.state.buttonLabel} data={this.state.data} updateHandle={this.updateClickHandle.bind(this)} />
	}
}

ReactDOM.render(<App />, document.getElementById('app') )