import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import './ContactList.scss'
import Contact from '../Contact/Contact';
import ContactDetails from '../ContactDetails/ContactDetails'
import {ReactComponent as ListView} from '../../images/list-bullet.svg'
import {ReactComponent as ThumbnailView} from '../../images/view-tile.svg'


const ContactList = ({contacts, search, onDeletingContact, onEditingContact, isEdited}) => {
    const [isThumbnail, setIsThumbnail] = useState(true)
    const [openContact,setOpenContact] = useState(false);

    const handleOpeningContact=(id) => {
        setOpenContact(prevState => {
          for (const person of contacts) {
            if (person.id === id) return person
        }})
    }

    const handleClosingContact = () => {
        setOpenContact(false)
    }
    
    useEffect(() => {
        
        
    }, [contacts])

    //sorting contacts by their name
    contacts.sort((a, b) => a.name >= b.name ? 1 : -1)
    const contactList = contacts
                        .filter(person => person.name.toLowerCase().startsWith(search.toLowerCase())) // filter contacts by user search value
                        .map(person => <Contact key={person.id} contact={person} isThumbnailView={isThumbnail} onClick={handleOpeningContact} onDelete={onDeletingContact} onEdit={onEditingContact} isEdited={isEdited}/>)

    return (
        <div className="contactList">
                <span>{`Contact(${contacts.length})`}</span>
            <div className="contactList__view">
                <ListView  
                    className={`list-view-icon ${!isThumbnail? 'contactList__view--active' : ''}`} 
                    onClick={e => setIsThumbnail(false)}/>
                <ThumbnailView  
                    className={`thumbnail-view-icon ${isThumbnail? 'contactList__view--active' : ''} `} 
                    onClick={e => setIsThumbnail(true)}/>
            </div>
            <div className="contactList__items">
                {contactList}
            </div>
            {openContact && 
            <ContactDetails 
                contactInfo={openContact} 
                onClose={handleClosingContact} 
                onDelete={onDeletingContact}
                onEdit={onEditingContact}
            />}
        </div>
    )
}

ContactList.propTypes = {

}

export default ContactList
