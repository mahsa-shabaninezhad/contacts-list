import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './ContactDetails.scss'

import {ReactComponent as Favorite} from '../../images/star.svg'
import {ReactComponent as Delete} from '../../images/trash.svg'
import {ReactComponent as Edit} from '../../images/create.svg'
import {ReactComponent as Address} from '../../images/location_on.svg'
import {ReactComponent as Phone} from '../../images/phone.svg'
import {ReactComponent as Email} from '../../images/email.svg'
import {ReactComponent as Cake} from '../../images/cake.svg'
import {ReactComponent as Clear} from '../../images/clear.svg'

const ContactDetails = ({contactInfo, onClose, onDelete, onEdit}) => {
    const {name, email, phone, birthday, address, id, img} = contactInfo

    const handleDeleting = () =>{
        onDelete(contactInfo.id)
        onClose()
    }

    useEffect(() => {
        document.body.addEventListener('keydown', handleEnterKey)
        return () => {
            document.body.removeEventListener('keydown', handleEnterKey)
        }
    }, [])

    const handleEnterKey = (e) => {
        if(e.keyCode === 13){
            onClose()
        }
    }

    return (
        <div className="card-big" onClick={onClose} onKeyDown={handleEnterKey}>
            <div className='card-big__content' onClick={e => e.stopPropagation()}>
                <Clear className="card-big__content__icon close-icon" onClick={onClose}/>
                <img src={img} alt="" className="card-big__content__image" />
                <div className="editing-menu">
                    <Phone className="editing-menu__icon phone" title='Call' />
                    <Delete className="editing-menu__icon delete" title='Delete' onClick={handleDeleting}/>
                    <Edit className="editing-menu__icon edit" title='Edit' onClick={() => onEdit(id)}/> 
                    <Favorite className="editing-menu__icon favorite" title='Favorite'/>
                </div>
                <h1 className="card-big__content__contact-name">{name}</h1>
                <div className="contact-info">
                    <p className="card-big__phone"><Phone className='card-big__content__icon' title='Call'/> Phone: {phone}</p>
                    <p className="card-big__email"><Email className='card-big__content__icon' title='Email'/> Email: {email}</p>
                    <p className="card-big__birthday"><Cake className='card-big__content__icon' title='Birthday'/> Birthday: {birthday}</p>
                    <p className="card-big__addres"><Address className='card-big__content__icon' title='Address'/> Address: {address}</p>
                </div>

            </div>
        </div>
    )
}

ContactDetails.propTypes = {

}

export default ContactDetails
