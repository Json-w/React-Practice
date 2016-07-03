import React,{Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state={searchText:'',url:''}
		//this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleTextChange(e){
		//can splice the search url at here.
		this.setState({searchText:e.target.value,url:'new url'});
		console.log('searchText',this.state.searchText);
	}
	handleSubmit(e){
		e.preventDefault();
		var searchText = this.state.searchText.trim();
		var url = this.state.url.trim();
		this.props.onSearch({searchText:searchText,url:url});
		// this.setState({searchText:'',url:''});
	}	
	render(){
		return(
			    <div className="search-bar">
					<form onSubmit={this.handleSubmit.bind(this)}>
						{/* differnt event handler binding between es6 and older. */}
						<div className='input-group'>
							<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							<input type="text" placeholder="Search..." onChange={this.handleTextChange.bind(this)}/>
						</div>
					</form>
				</div>
			);
	}
}

export default SearchBar

