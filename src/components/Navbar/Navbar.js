import React from 'react';
import './Navbar.scss';

const song = new Audio("/audios/birtdaySound.mp3");
const firework = new Audio("/audios/firework.mp3");
const applause = new Audio("/audios/applause.mp3");

const Navbar = () => (
    <div className="Navbar">
        <button className="Navbar__Button" onClick={() => {song.play()}}>🎹</button>
        <button className="Navbar__Button" onClick={() => {firework.play()}}>🎉</button>
        <button className="Navbar__Button" onClick={() => {applause.play()}}>👏</button>
    </div>
)

export default Navbar;