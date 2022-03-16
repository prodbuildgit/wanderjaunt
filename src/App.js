import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';

const App = () => {
  const SERVER = 'https://gist.githubusercontent.com/chancock09/6d2a5a4436dcd488b8287f3e3e4fc73d/raw/fa47d64c6d5fc860fabd3033a1a4e3c59336324e/employees.json'
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees()
      .then(res => {
        setEmployees(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const getEmployees = async () => {
    return axios.get(SERVER)
      .then(response => {
        return response
      })
      .catch(err => {
        console.log(err)
      })
  }

  const showEmployees = (employees) => {
    const heads = employees.filter(employee => {
      return employee.manager_id === null
    }).sort((a, b) => {
      if (a.name === b.name) { return 0 }
      return a.name.split(" ")[1] < b.name.split(" ")[1] ? -1 : 1
    })

    const getChild = (employees, head) => {
      return employees.filter(employee => {
        return employee.manager_id === head.id
      }).sort((a, b) => {
        if (a.name === b.name) { return 0 }
        return a.name.split(" ")[1] < b.name.split(" ")[1] ? -1 : 1
      }).map(child => (
        <ul key={child.id}>
          <li>
            {`${child.title}: ${child.name}`}
            {getChild(employees, child)}
          </li>
        </ul>
      ))
    }

    return (
      <ul>
        {heads.length && (
          heads.map(head => (
            <li key={head.id}>
              {`${head.title}: ${head.name}`}
              {getChild(employees, head)}
            </li>
          ))
        )}
      </ul>
    )
  }

  return (
    <div>
      {employees.length ? (
        showEmployees(employees)
      ) : (
        <div>No data!</div>
      )
      }
    </div>
  )
}

export default App;
