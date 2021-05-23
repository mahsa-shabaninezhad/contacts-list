import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './SideBar.scss'
import {ReactComponent as Menu} from '../../images/menu.svg'

const SideBar = ({name, email, code, contactsNum, partnersNum}) => {
    const [showSideBar, setShowSideBar] = useState(false)

    const handleSideBarvisibility = (e) => {
        console.log('it is clicking');
        setShowSideBar(!showSideBar)
    }
    let sideBarClass = showSideBar ? 'side-bar__content side-bar__content--active' : 'side-bar__content'
    return (
        <div className="side-bar" onClick={handleSideBarvisibility}>
            <button className="side-bar__toggler" onClick={handleSideBarvisibility}>
                <Menu className="icon side-bar__toggler__icon" />
            </button>
            <div className={sideBarClass}>
                <div className="side-bar__content__info">
                    <h1 className="name">{name}</h1>
                    <p className="email">{email}</p>
                    <p className="code">App code: {code}</p>
                </div>
                <div className="side-bar__content__accessibility">
                    <a href='#'>Contacts({contactsNum})</a>
                    <a href='#'>Partners({partnersNum})</a>
                    <button className="side-bar__content__btn">Settings</button>
                </div>
                <div className="side-bar__content__eraser">
                    <button className="side-bar__content__btn">Erase Database</button>
                    <button className="side-bar__content__btn">Erase Tags</button>
                </div>
                <button className="side-bar__content__btn log-out">Log Out</button>
            </div>
        </div>
    )
}

SideBar.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    code: PropTypes.number,
    contactsNum: PropTypes.number,
    partnersNum: PropTypes.number

}

export default SideBar
