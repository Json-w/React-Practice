import React,{Component} from 'react'
import SearchBar from '../SearchBar'

class Header extends Component{
    render(){
        return(
            <div className="page-header customer-header logo">
                <h1>*** <small>***** ****</small></h1>
                <SearchBar onSearch={this.props.onSearch}/>
            </div>
        );
    }
}

export default Header