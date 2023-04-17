import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserList from './Components/UserList'
import AddUser from './Components/AddUser'
import SearchBar from './Components/SearchBar'

function App() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetchUsers();

  }, [])

  // Fetch function to fetch data
  const fetchUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const userData = response.data
    setUsers(userData)

  }

  // Add a user
  const addUser = (userData) => {

    const updatedUsers = [userData, ...users]
    setUsers(updatedUsers)

  }

  // search function
  const searchUser = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(search) || item.email.toLowerCase().includes(search)
    )

  };


  // console.log(users)

  return (

    <div className="flex flex-col sm:bg-gradient-to-br from-white to-teal-800 h-screen">
      <div className=''>
        <SearchBar users={users} search={search} setSearch={setSearch} />
      </div>
      <UserList users={searchUser(users)} />
      <AddUser addUser={addUser} />
    </div>
  )
}

export default App
