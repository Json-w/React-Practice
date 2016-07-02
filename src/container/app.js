import React, { Component } from 'react'
import HelloWorld from '../components/HelloWorld'
import Header from '../components/Header'
import AemInstances from '../components/AemInstances'

var mockData = [
	{
		"id":"i-cd432423",
		"private_ip_address":"10.43.12.43",
		"tags":{
			"AEM-ROLE":"publish",
			"AutoStartStop":"{\"start-time\":\"\",\"stop-time\":\"\",\"days\":\"\"}",
			"Name":"fsdkfjs",
			"Workspace":"W-2312434",
			"aws:autoscaling:groupName":"sujflkdsjklfjs",
			"aws:cloudformation:logical-id":"publishfd",
			"aws:cloudformation:stack-id":"jfkjsdklfjsdkjflsdf",
			"aws:cloudformation:stack-name":"jfklsjdfg"
		}
	}
	,
	{
		"id":"i-cd4324ds23",
		"private_ip_address":"10.43.12.43",
		"tags":{
			"AEM-ROLE":"publish",
			"AutoStartStop":"{\"start-time\":\"\",\"stop-time\":\"\",\"days\":\"\"}",
			"Name":"fsdkfjs",
			"Workspace":"W-2312434",
			"aws:autoscaling:groupName":"sujflkdsjklfjs",
			"aws:cloudformation:logical-id":"publishfd",
			"aws:cloudformation:stack-id":"jfkjsdklfjsdkjflsdf",
			"aws:cloudformation:stack-name":"jfklsjdfg"
		}
	}
];

class App extends Component{
	constructor(props){
		super(props);
		this.state = {url:'',data:[]};
	}
	loadInstancesFromServer(){
		$.ajax({
			url:this.props.url,
			dataType:'jsonp',
			success:function(data){
				this.setState({url:'',data:mockData})
			}.bind(this),
			error:function(xhr,status,err){
				console.log(err);
			}
		});
	}
	handleSearchSubmit(searchText){

	}
	componentDidMount(){
		this.loadInstancesFromServer();
	}
    render(){
        return (<div>
        		<Header onSearch={this.handleSearchSubmit}/>
        		<AemInstances data={this.state.data}/>
        	</div>);
    };

}

export default App;