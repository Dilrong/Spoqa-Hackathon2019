import React, {Component} from 'react';
import { Navbar } from '../../components';
import "./Firework.scss"

class Firework extends Component{
    render(){
        return (
            <div className="Firework">
                <img className="img" alt="cake" src="/images/firework.png"/>
                <Navbar/>
            </div>
        )
    }
}

export default Firework;