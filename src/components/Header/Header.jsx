import classes from './Header.module.scss'
import logo from './../../assets/images/logo.svg'
import themeWhite from './../../assets/images/themeWhite.svg'
import themeDark from './../../assets/images/themeDark.svg'
import { useEffect } from 'react'
const Header = ({resetApp,theme, setTheme}) => {

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')

    }

    useEffect(() => {
        const root = document.querySelector(':root') ;
        const components = [
            'background',
            'body-background',
            'border-background',
            'disabled-border-background',
            'text-color',
            'hover-text-color',
            'focus-color',
            'focus-background',
            'focus-border-background',
            'focus-text-color',
            'img-url-selector',
        ]
        components.forEach((component) => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme})`
            )
        })
        localStorage.setItem('app-theme', theme)

    },[theme])

    return(
        <div className="header">
            <div className={classes.header__content}>
                <div className='header-content__logo'>
                    <a onClick={() => resetApp()} href="##">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className={classes.header_content__theme}>
                    { theme === 'light'
                      ?  <img onClick={() => changeTheme()} src={themeWhite} alt="theme" />
                      :  <img onClick={() => changeTheme()} src={themeDark} alt='theme'/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header