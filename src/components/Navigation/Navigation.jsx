import React from 'react'
import PropTypes from 'prop-types'
import './Navigation.scss'
import {ReactComponent as Home} from '../../images/home.svg'
import {ReactComponent as Share} from '../../images/share.svg'
import {ReactComponent as Add} from '../../images/plus.svg'

const Navigation = ({onAdd}) => {
    return (
        <nav className='nav'>
            <Home className='nav__icon nav__icon--active home'/>
            <button className="add">
                <Add className='nav__icon' onClick={onAdd}/>
            </button>
            <Share className='nav__icon share'/>
        </nav>
    )
}

Navigation.propTypes = {

}

export default Navigation
