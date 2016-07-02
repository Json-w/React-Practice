import React,{Component} from 'react';
import {Card, CardTitle, CardText, CardActions,Button} from 'react-mdl'

class AemInstances extends Component{
	render(){
		var cardNodes = this.props.data.map(function(aemInstance){
				return (
					<Card shadow={0} className="customCard" key={aemInstance.id}>
	    			<CardTitle expand style={{color: '#fff', background: 'bottom right 15% no-repeat #46B6AC'}}>
	    			{aemInstance.tags.Name}
	    			</CardTitle>
	    			<CardText>
				        <span>id:{aemInstance.id}</span>
				        <span>ip:{aemInstance.private_ip_address}</span>
	    			</CardText>
					</Card>);
		});
		return(
			<div className="aemInstances">
				{cardNodes}
			</div>
			);
	}
}

export default AemInstances;