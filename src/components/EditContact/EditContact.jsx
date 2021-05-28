import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './EditContact.scss'
import Form from '../Form/Form'

const EditContact = ({contactInfo, onSave}) => {
    return <Form contactInfo={contactInfo} onSave={onSave}/>
}

EditContact.propTypes = {
    contactInfo: PropTypes.object,
    onSave: PropTypes.func
}

export default EditContact
