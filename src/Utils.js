import React, { /*Component*/ } from 'react';
import "./index.css";

export const Button = ({onClick, value, style}) => {
    return  <input type="button" value={value} onClick={onClick} style={{color: 'white', backgroundColor: '#3dce3d', fontSize: '16px', height: '35px', flex: 1, ...style}}></input>
}

export const TextField = ({onChange, value}) => <input type="text" value={value} onChange={onChange} style={{color: 'black', fontSize: '16px' ,height: '30px', width: '500px', flex: 4}}/>

export const SearchField = ({}) => {
    return <input type ="text" id="searchInput"></input>
}