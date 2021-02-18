import API from "../API";
import React, { Component } from "react"
import EmployeeSearch from "./EmployeeSearch"
import EmployeeInfo from "./EmployeeInfo"
import "./employeeStyle.css";

class EmployeeResults extends Component {

    //setting initial state
    //search starts as empty string
    //employess and filteredEmployess are empty arrays
    //reference the order for employees. Random by default
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    };

    //initialization, when page is first loaded
    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(err => console.log(err))
    }

    //if "name" is clicked employee shown by asc/desc order
    sortByName = () => {
        const filtereds = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorteds)
            this.setState({
                filteredEmployees: sorteds,
                order: "desc"
            })
        } else {
            const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorteds)
            this.setState({
                filteredEmployees: sorteds,
                order: "asc"
            })
        }
    }
    //when input is changing it will dynamically show the associates names that match in the screen
    handleInputChange = event => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
        )
        this.setState({
            //change state of filteredEmployes to hold all employees that match users
            //search, passed down in this state

            filteredEmployees,
        });
    };


    //API call triggered when page refreshed and application loaded 
    employeeSearch = () => {
        API.getUsers()
            .then(res => this.setState({

                //change state to hold data from API call, passed through props
                filteredEmployees: res.data.results,
                employees: res.data.results
            }))
            .catch(err => console.log(err))
    }

    //handle search btn action
    handleSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Enter a name")
        }
        const { employees, search } = this.state;

        //filter object, look for the value input by the user
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
    }

    render() {
        return (
            <div>
                <EmployeeSearch
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.handleInputChange} />
                <EmployeeInfo results={this.state.filteredEmployees}
                    sortByName={this.sortByName}
                />
            </div >
        )
    }
}

export default EmployeeResults