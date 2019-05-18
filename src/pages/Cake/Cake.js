import React, {Component} from 'react';
import { Navbar } from '../../components';
import "./Cake.scss"

class Cake extends Component{
    render(){
        return (
            <div className="CakePage">
                <img className="img" alt="cake" src="/images/cake.jpg"/>
                <Navbar/>
            </div>
        )
    }
}

export default Cake;