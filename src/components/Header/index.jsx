import React from 'react'
import logo from '../../assets/images/logo.png';
import './Header.style.css';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const characterSelected = useSelector(
        (state) => state.characters.selectedCharacter
    );

    return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-user">{characterSelected ? characterSelected : 'User no selected'}</p>
    </header>
    )
}

export default Header;
