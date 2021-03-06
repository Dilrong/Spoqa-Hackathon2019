import React, {Component} from 'react';
import { Copyright, Header, Firework } from '../../components';
import { observer, inject } from 'mobx-react';
import { ReactMic } from 'react-mic';
import Webcam from "react-webcam";
import "./Cake.scss"

@inject('store')
@observer
class Cake extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isWind : false,
            count: 0
        };
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
    };

    onData = (recordedBlob) => {
        console.log('chunk of real-time data is: ', recordedBlob.size);
        if(recordedBlob.size >= 969){
            this.setState({count: this.state.count+1})
            if(this.state.count === 10)
                this.setState({isWind: true})
        }else{
            this.setState({count: 0})
        }
    }
    
    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
    }

    onApplause(){
        const applause1 = new Audio("/audios/applause.mp3");
        const applause2 = new Audio("/audios/applause1.mp3");
        const applause3 = new Audio("/audios/applause2.mp3");
        const applause4 = new Audio("/audios/applause3.mp3");
        const applause5 = new Audio("/audios/applause4.mp3");

        let x = Math.floor((Math.random() * 5) + 1);

        if(x === 1){
            applause1.play()
        }else if(x === 2){
            applause2.play()
        }else if(x === 3){
            applause3.play()
        }else if(x === 4){
            applause4.play()
        }else{
            applause5.play()
        }
    }

    render(){
    const song = new Audio("/audios/birtdaySound.mp3");
    const firework = new Audio("/audios/firework.mp3");

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
          };
        return (
            <div className="CakePage">
                {this.state.isWind? (<div/>):(<img className="img-fire1" alt="fire" src="/images/fire.gif"/>)}
                {this.state.isWind? (<div/>):(<img className="img-fire2" alt="fire" src="/images/fire.gif"/>)}
                {this.state.isWind? (<div/>):(<img className="img-fire3" alt="fire" src="/images/fire.gif"/>)}
                {this.props.store.prototype.isApplause? (<img className="img-applause" alt="applause" src="/images/applause.gif"/>):(<div/>)}
                {this.props.store.prototype.isFirework? (<img className="img-firework" alt="firework" src="/images/firework.gif"/>):(<div/>)}
                <img className="img-cake" alt="cake" src="/images/cake.png" onClick={()=>{
                    if(this.state.isWind === true){
                        this.setState({isWind:false})
                    }else{
                        this.setState({isWind:true})
                    }
                }}/>
                <Header/>
                <Webcam
                    audio={false}
                    height={700}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={'100%'}
                    videoConstraints={videoConstraints}
                />
                {this.props.store.prototype.isFirework? (<Firework/>):(<div/>)}
                <ReactMic
                    record={true}
                    className="sound-wave"
                    onStop={this.onStop}
                    onData={this.onData}
                    strokeColor="#000000"
                    backgroundColor="#ffffff" />
                <div className="Navbar">
                <button className="Navbar__Button" onClick={() => {
                    song.play()}}><img alt="song" src="/images/song.png"/></button>
                <button className="Navbar__Button" onClick={() => {
                    this.props.store.prototype.isFirework=true; 
                    firework.play();
                    setTimeout(()=>{this.props.store.prototype.isFirework=false}, 4150);
                    }}><img alt="song" src="/images/firework.png"/></button>
                <button className="Navbar__Button" onClick={() => {
                    this.props.store.prototype.isApplause=true; 
                    this.onApplause()
                    setTimeout(()=>{this.props.store.prototype.isApplause=false}, 2000);
                    }}><img alt="song" src="/images/applause.png"/></button>
                </div>
                <Copyright text="Spoqa Hackathon. ㅁㅆㅁㅌ"/>
            </div>
        )
    }
}

export default Cake;