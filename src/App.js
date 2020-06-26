import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Results from "./components/Results";
import SearchBox from "./components/Search";
import API from "./utils/API";
import "./App.css"
class App extends Component {
  // Setting this.state.employee to the employees json array
  state = {
    employees: [],
    filterUsers: [{}],
    search: '',

  };

  componentDidMount(){
    API.getEmp()
    .then((res) =>{
      const employeeData = res.data.results.map((employee)=>({
        ...employee,
        thumbnail: employee.picture.thumbnail,
        name: employee.name.first + ' ' + employee.name.last,
        phone: employee.phone,
        email: employee.email,
      }));
      console.log(employeeData);
      this.setState({employees: employeeData}, ()=> console.log(this.state))
    })
    .catch(err => console.log(err))
  };
    

  NameSortAsc(){
    this.setState({
      employees: this.state.employees.sort((a,b)=> (a.name > b.name ? 1: -1))
    });
  };

  NameSortDesc(){
    this.setState({
      employees: this.state.employees.sort((a,b)=> (a.name < b.name ? 1: -1))
    });
  };
  

  PhoneSort(){
    this.setState({
      employees: this.state.employees.sort((a,b)=> (a.phone > b.phone ? 1: -1))
    });
  };

  EmailSort(){
    this.setState({
      employees: this.state.employees.sort((a,b)=> (a.email > b.email ? 1: -1))
    });
  };

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
       
        <div align= "center" className="table" class="table">
        <SearchBox 
          handleInputChange = {this.handleInputChange}
          search = {this.state.search}
        />
        <table align="center"> 
        
        <thead>
        <tr>
          <th>
        <strong>Image</strong>
        </th>

        <th>
          <strong>
          Name
          </strong>
        </th>
        <th>
        <strong onClick={() => {this.PhoneSort();}}>Phone</strong>
        </th>
        <th>
        <strong onClick={() => {this.EmailSort();}}>Email</strong>      ||
        ascend <input type="radio" aria-label="Radio button for alphabetical order" onClick={() => {this.NameSortAsc();}}/> ||
        descend <input type="radio" aria-label="Radio button for reverse alphabetical order" onClick={() => {this.NameSortDesc();}}/> ||
        </th>
        </tr>
      </thead>
      <tbody>
      {this.state.employees.filter(
        (employee) => 
        employee.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase()) ||
        employee.phone
        .toLowerCase()
        .includes(this.state.search.toLowerCase()) ||
        employee.email
        .toLowerCase()
        .includes(this.state.search.toLowerCase())
    )
        .map((employee, index)=> 
          <Results 
            key = {index}
            image = {employee.picture.thumbnail} 
            name = {employee.name}
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
