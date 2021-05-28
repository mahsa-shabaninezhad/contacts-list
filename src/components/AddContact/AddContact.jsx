import React from 'react'
import PropTypes from 'prop-types'
import Form from '../Form/Form'


const AddContact = ({contactInfo, onSave}) => {

    return <Form contactInfo={contactInfo} onSave={onSave}/>
}

AddContact.propTypes = {
    contactInfo: PropTypes.object,
    onSave: PropTypes.func
}

export default AddContact
