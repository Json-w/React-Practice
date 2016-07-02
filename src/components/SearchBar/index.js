import React,{Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state={searchText:'',url:''}
	}
	handleTextChange(e){
		this.setState({searchText:e.target.value,url:'new url'});
	}
	handleSubmit(e){
		e.preventDefault();
		var searchText = '';
		this.props.handleSearchSubmit({searchText:searchText,url:''});
	}	
	render(){
		return(
			    <div className="search-bar">
					<form onSubmit={this.handSubmit}>
						<input type="text" placeholdr="Search..." onChange={this.handleTextChange}/>
						<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
					</form>
				</div>
			);
	}
}

export default SearchBar

