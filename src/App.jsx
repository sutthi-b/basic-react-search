import './App.css'
import { useState, useEffect } from 'react'
import  UserList  from './components/UserList'
import Header from './components/Header'
//mock data
import userData from './userData'

function App() {
  const [showData, setShowData] = useState(userData)
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText === '') {
      setShowData(userData);
    } else {
      setShowData(() => {
        return (
          userData.filter((user) => {
            const checkName = `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchText);
            return checkName;
          }
          )
        )
      })
    }
    console.log(searchText);
    console.log(showData);
  },[searchText])

  return (
    <div className='container'>
      <Header  setSearchText={setSearchText}/>
      <UserList showData={showData} />
    </div>
  )
}

export default App
