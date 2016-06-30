import React,{Component} from 'react'
//Todo:how to import css file? it not works on use the bundle.js in memory.
import style from './style.css'

class Header extends Component{
    render(){
        return(
            //Todo:css not work.
            <div className={style.pageHeader}>
                <h1>Example page header <small>Subtext for header</small></h1>
            </div>
        );
    }
}

export default Header