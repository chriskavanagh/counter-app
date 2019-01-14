import React, { Component } from 'react'

export class Prompt extends Component {
    state = {
        employees: []
    };

    addEmployee = () => {
        const { employees } = this.state;
        const name = prompt("The name: ")
        const salary = prompt("The salary: ")
        let employee = {name:name, salary:salary}
        //const employees = [...this.state.employee]
        this.setState({
            employees: [...employees, employee]
        })
     }

     resetEmployees = () => {
       this.setState({
         employees: []
       })
     }

  render() {
      //const { name, salary } = this.state.employees;
    return (
      <div className="container">
          {this.state.employees.map((emp, i) => (              
            <li key={i}>
                <h2>Employee Name: {emp.name}</h2>
                <h2>Salary: {emp.salary}</h2>
            </li>
          ))}          
          <button
            className="btn btn-primary"
            onClick={this.addEmployee}>
            Add record
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={this.resetEmployees}>
            Reset
          </button>
      </div>
    )
  }
}

export default Prompt;

