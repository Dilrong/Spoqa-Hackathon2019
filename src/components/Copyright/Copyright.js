import React from 'react';
import './Copyright.scss';

const Copyright = ({text}) => (
    <div className="copyrightContainer">
        <span className="copyright">{text}</span>
    </div>
);

export default Copyright;