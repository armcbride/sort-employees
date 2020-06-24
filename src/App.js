import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Results from "./components/Results";
import SearchBox from "./components/Search";
import API from "./utils/API";
class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employees: [],
    filterUsers: [{}],
    search: '',

  };

  componentDidMount(){
    API.getEmp()
    .then(res => this.setState({employees: res.data.results}, ()=> console.log(this.state))).catch(err => console.log(err))
  };

  // handleSort(){
  //   list.sort(())
  // }

  handleInputChange = event => {
    let name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    }, () =>(console.log(this.state)));
  };
  

  // Map over this.state.employees and render a EmpCard component for each employee object
  render() {
    return (
      <Wrapper>
        <Title>Employees</Title>
       
        <div className="table">
        <SearchBox 
          handleInputChange = {this.handleInputChange}
          search = {this.state.search}
        />
        <table> 
        
        <thead>
        <tr>
          <th>
        <strong>First name</strong>
        </th>
        <th>
        <strong>Last name</strong>
        </th>
        <th>
        <strong>Phone</strong>
        </th>
        <th>
        <strong>Email</strong>
        </th>
        </tr>
      </thead>
      <tbody>
      {this.state.employees.filter(sort => sort.email.toLowerCase()
      .includes(this.state.search.toLowerCase())).map((employee, index)=> 
          <Results 
            key = {index}
            first = {employee.name.first} 
            last = {employee.name.last}
            phone = {employee.phone}
            email = {employee.email}
          />)}
          </tbody>
      </table>
        </div>
      
      </Wrapper>
    );
  }
}

export default App;
