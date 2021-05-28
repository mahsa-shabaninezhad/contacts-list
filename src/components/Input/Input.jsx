import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

const Input = ({value, type, onChange, label, hasError, isRequierd }) => {
    return (
        <div className="form-control">
            <label htmlFor="">
                {label}
            </label>
            <input className={hasError && isRequierd? 'border--red' : ''} type={type} value={value} onChange={e => onChange(e.target.value)} />
        </div>
    )
}

Input.propTypes = {

}

export default Input
