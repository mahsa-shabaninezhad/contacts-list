import React from 'react'
import PropTypes from 'prop-types'
import './Contact.scss'
import {ReactComponent as Favorite} from '../../images/star.svg'


const contact = ({contact, onClick}) => {
    return (
        <div className="card" onClick={() => onClick(contact.id)}>
            <img className="card__img" src={contact.img} alt='' />
            <h3 className="card__title">{contact.name}</h3>
            <p className="card__favorite"><Favorite className="favorite-icon"/></p>
            <p className="card__address">{contact.address}</p>
            <p className="card__phone">{contact.phone}</p>
        </div>
    )
}

contact.propTypes = {
    contact: PropTypes.object,
    onClick: PropTypes.func
}

export default contact
