import React from 'react';
import './Navbar.scss';

const song = new Audio("/audios/birtdaySound.mp3");
const firework = new Audio("/audios/firework.mp3");
const applause = new Audio("/audios/applause.mp3");

const Navbar = () => (
    <div className="Navbar">
        <button className="Navbar__Button" onClick={() => {song.play()}}><img alt="song" src="/images/song.png"/></button>
        <button className="Navbar__Button" onClick={() => {firework.play()}}><img alt="firework" src="/images/firework.png"/></button>
        <button className="Navbar__Button" onClick={() => {applause.play()}}><img alt="firework" src="/images/applause.png"/></button>
    </div>
)

export default Navbar;