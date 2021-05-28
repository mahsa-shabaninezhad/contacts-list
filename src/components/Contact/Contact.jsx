import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './Contact.scss'
import {ReactComponent as Favorite} from '../../images/star.svg'
import {ReactComponent as Edit} from '../../images/create.svg'
import {ReactComponent as Delete} from '../../images/delete.svg'



const Contact = ({contact, isThumbnailView, onClick, onDelete, onEdit, isEdited}) => {
    const [edited, setEdited] = useState('')
    useEffect(() => {
        if(isEdited.id === contact.id){
            setEdited('edited')
        }
    }, [contact, isEdited])

    return (
        <div className={`card ${isThumbnailView? 'card--thumbnail-view': 'card--list-view'}`} onClick={() => onClick(contact.id)}>
            <img className="card__img" src={contact.img} alt='' />
            <span className="card__edited-tag">{edited}</span>
            <div className="card__content">
                <h3 className="card__title"><nobr>{contact.name}</nobr></h3>
                <span className="card__favorite"><Favorite className="favorite-icon"/></span>
                <p className="card__address"><nobr>{contact.address}</nobr></p>
                <p className="card__phone">{contact.phone}</p>
            </div>
            <div className="card__editing-menu" onClick={e => e.stopPropagation()}>
                <Edit className="edit" onClick={() => onEdit(contact.id)}/>
                <Delete className="delete" onClick={() => onDelete(contact.id)}/>
            </div>

        </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.object,
    onClick: PropTypes.func
}

export default Contact
