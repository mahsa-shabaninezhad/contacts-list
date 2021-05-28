import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import './SearchContact.scss'
import {ReactComponent as Magnifier } from '../../images/magnifying-glass.svg'

const SearchContact = ({searchValue, onSearch, autoComplete, openContact}) => {
        const enterPressed = (e) => {
            if (e.keyChar === 13 || e.keyCode === 13) {
                // onSearch(autoComplete)
                openContact(autoComplete)
                onSearch('')
            }
        }

    return (
        <div className="search">
            <div className='search__autoComplete-box'>
                <label htmlFor="searchInput">{autoComplete}</label>
                <input 
                    id='searchInput'
                    className="search__input" 
                    type="email" 
                    placeholder="&#128269; Search by name" 
                    value={searchValue} 
                    onChange={e => onSearch(e.target.value)}
                    onKeyUp={enterPressed}
                />

            </div>
            
        </div>
    )
}

SearchContact.propTypes = {

}

export default SearchContact
