import React from 'react'
import css from "./Header.module.css"

const Header = () => {
    return (
        <header className={css.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Logo"/>
        </header>
    )
}

export default Header;