import React, {Component} from 'react';
import { Navbar } from '../../components';
import "./Applause.scss"

class Applause extends Component{
    render(){
        return (
            <div className="Applause">
                <img className="img" alt="cake" src="/images/applause.jpg"/>
                <Navbar/>
            </div>
        )
    }
}

export default Applause;