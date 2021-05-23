import { useState } from 'react';
import './App.scss';
import ContactDetails from './components/ContactDetails/ContactDetails';
import Contact from './components/Contact/Contact';
import SideBar from './components/SideBar/SideBar';
import data from './data'

function App() {
  const [openContact,setOpenContact] = useState(false);
  
  const handleOpeningContact=(id) => {
    setOpenContact(prevState => {
      for (const person of data) {
        if (person.id === id) return person
    }})
  }

  const handleClosingContact = () => {
    setOpenContact(false)
  }

  const contactList = data.map(person => <Contact key={person.id} contact={person} onClick={handleOpeningContact} />)
  return (
    <div className="App">
      <SideBar 
        name="John Doe" 
        email='johndoe@email.com'  
        code='1904'
        contactsNum='38'
        partnersNum='14'
      />
      <div className="contactList">
        {contactList}
      </div>
      {openContact && <ContactDetails contactInfo={openContact} close={handleClosingContact}/>}
    </div>
  );
}

export default App;
