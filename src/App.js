import { useState } from 'react';
import './App.scss';
import ContactDetails from './components/ContactDetails/ContactDetails';
import SideBar from './components/SideBar/SideBar';
import data from './data'
import SearchContact from './components/SearchContact/SearchContact';
import Navigation from './components/Navigation/Navigation';
import ContactList from './components/ContactList/ContactList';
import EditContact from './components/EditContact/EditContact';
import AddContact from './components/AddContact/AddContact';

function App() {
  const [contacts, setContacts] = useState(data)
  const [searchVal, setSearchVal] = useState('')
  const [autoComplete, setAutoComplete] = useState ('')
  const [openContactOnSearch, setOpenContactOnSearch] = useState(false)
  const [editingContact, setEditingContact] = useState(false)
  const [addNewContact, setAddNewContact] = useState(false)

  const newContact = {
        id: Math.floor(Math.random()*1000)+1,
        name: '',
        email: '',
        phone: '',
        img: '',
        birthday: '',
        address: '',
    }

  const handleUserSearchForContact = (searchValue) => {
    setSearchVal(searchValue)
    for (const contact of contacts) {
      if(searchValue !== '' && contact.name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())){
        setAutoComplete(contact.name.toLocaleLowerCase()) 
        break
      }else{
        setAutoComplete('')
      }
    }
  }

  const handleOpeningContactOnSearch= (contactName) => {
    for (const contact of contacts) {
      if(contact.name.toLocaleLowerCase() === contactName){
        console.log(contactName);
        setOpenContactOnSearch(contact)
      }
    }
  }

  const handleDeletingContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const handleEditingContact = (id) => {
    setEditingContact(...contacts.filter(contact => contact.id === id))
  }

  const handleSavingEditedData = (editedInfoObj) =>{
    const {id} = editedInfoObj
    setContacts(contacts.map(contact => {
      if(contact.id === id){
        return {...contact, ...editedInfoObj}
      }
      return contact
    }))
    setEditingContact(false)
  }

  const handleOpeningNewContact = () => {
    setAddNewContact(true)
  }

  const handleNewContanct = (newContactInfoObj) => {
    setContacts([...contacts, newContactInfoObj])
    setAddNewContact(false)
  }

  return (
    <div className="App">
      <SearchContact 
        className="search-box" 
        searchValue={searchVal} 
        autoComplete={autoComplete} 
        onSearch={handleUserSearchForContact}
        openContact = {handleOpeningContactOnSearch}
      />
      <SideBar 
        className="Side-bar-btn"
        name="John Doe" 
        email='johndoe@email.com'  
        code='1904'
        contactsNum='38'
        partnersNum='14'
      />
      <ContactList 
        contacts={contacts} 
        search={searchVal} 
        onDeletingContact={handleDeletingContact}
        onEditingContact={handleEditingContact} 
        isEdited={editingContact}
      />
      {openContactOnSearch && 
      <ContactDetails 
        contactInfo={openContactOnSearch} 
        onClose={() => setOpenContactOnSearch(false)} 
        onDelete={handleDeletingContact} 
        onEdit={handleEditingContact} 
      />}
      {editingContact && <EditContact contactInfo={editingContact} onSave={handleSavingEditedData}/>}
      <Navigation onAdd={handleOpeningNewContact}/>
      {addNewContact && <AddContact contactInfo={newContact} onSave={handleNewContanct}/>}
    </div>
  );
}

export default App;
