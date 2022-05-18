import { employees } from '../../data'
import Employee from '../Employee/index'
import './index.scss'
import { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  return (
    <div className="wrapper">
      <div className="cards_wrap">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            name={employee.name}
            title={employee.title}
            description={employee.description}
            imgUrl={employee.imgUrl}
            linkedInUrl={employee.linkedInUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default EmployeeList
