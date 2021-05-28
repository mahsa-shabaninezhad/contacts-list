import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import './Form.scss'

import {ReactComponent as Address} from '../../images/location_on.svg'
import {ReactComponent as Phone} from '../../images/phone.svg'
import {ReactComponent as Email} from '../../images/email.svg'
import {ReactComponent as Cake} from '../../images/cake.svg'
import {ReactComponent as Save} from '../../images/check.svg'
import {ReactComponent as Person} from '../../images/person.svg'

const Form = ({contactInfo, onSave}) => {
console.log(contactInfo);
    const {id} = contactInfo
    const [name, setName] = useState(contactInfo.name)
    const [email, setEmail] = useState(contactInfo.email)
    const [phone, setPhone] = useState(contactInfo.phone)
    const [birthday, setBirthday] = useState(contactInfo.birthday)
    const [address, setAddress] = useState(contactInfo.address)
    const [img, setImg] = useState(contactInfo.img)
    const [handleErr, setHandleErr] = useState(false)

    const info = [{
        label:<Person className='form-control__icon' title='Name'/>,
        onChange: (name) => setName(name),
        type: 'text',
        value: name,
        required: true
    },
    {
        label:<Phone className='form-control__icon' title='Call'/>,
        onChange: (phone) => setPhone(phone),
        type: 'text',
        value: phone,
        required: true
    },
    {
        label:<Email className='form-control__icon' title='Email'/>,
        onChange: (email) => setEmail(email),
        type: 'email',
        value: email,
        required: false
    },
    {
        label:<Cake className='form-control__icon' title='Birthday'/>,
        onChange: (birthday) => setBirthday(birthday),
        type: 'text',
        value: birthday,
        required: false
    },
    {
        label:<Address className='form-control__icon' title='Address'/>,
        onChange: (address) => setAddress(address),
        type: 'text',
        value: address,
        required: false
    },
    ]

    const handleSave = () => {
        if(name !== '' && phone !== ''){
            onSave({name, email, phone, birthday, address, img, id})
        }else{
            setHandleErr(!handleErr)
        }
    }

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            if(name !== '' && phone !== '') {
            onSave({name, email, phone, birthday, address, img, id})
            }else{
            setHandleErr(!handleErr)
            }
        }
    }

    return (
        <div className="form-card" onKeyDown={handleEnterKey}>
            <div className='form-card__content' onClick={e => e.stopPropagation()}>
                <Save className="form-card__content__icon save-icon" onClick={handleSave} />
                <div className="form-card__content__img-box">
                    <img src={img} alt="" className="form-card__content__image" />
                    <input type="file" />
                </div>
                <div className="form-card__content__inputs">
                    {info.map(item =>  <Input value={item.value} onChange={item.onChange} label={item.label} hasError={handleErr} isRequierd={item.required}/>)}
                </div>
            </div>
        </div>
    )
}

Form.propTypes = {
    contactInfo: PropTypes.object,
    onSave: PropTypes.func
}

export default Form
