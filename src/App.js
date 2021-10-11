import './App.css';
import FormSubmit from './components/FormSubmit/FormSubmit';
import CreateContactList from './components/PhoneList/PhoneList';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <FormSubmit title={'Name'} phone={'Number'} />
      <Filter />
      <CreateContactList title={'Contacts'} />
    </div>
  );
}

export default App;
