import React from 'react';
import DropDownList from './DropDownList';
import EmployeeDetail from './EmployeeDetail';
import data from '../data/data.json'

class Employee extends React.Component{
    constructor(props){
        super(props);
        this.employeeData = React.createRef();
        this.state = {
            label: 'Department',
            text: '',
            option:'',
            target:''
        }
    }
    
    handleChange = (e) => {
        let text = e.target.value,
        target = text;      
        this.setState({
            text: text,
            target: text
        });   
        console.log(target);
    }
  
    handleSelectedOption = (e) => {
        let option = e.target.value;
        this.setState({
            option: option
        });
    }

    getData = () => {
        this.employeeData.current.fetchData();
    }

    remove = () => {
        this.setState({
            option: '',
            text: 'Select an Option',
            target: 'Select an Option',
            initialState:false
        })
    }

    render(){
        return(
            <section className="c-department-layout">
                <section className="department">
                    <DropDownList value={data[0].department} dropdownChange={this.handleChange} text={this.state.text} target={this.state.target} />
                    <DropDownList value={data[1].employeeIds} text={this.state.text} option={this.state.option} dropdownChange={this.handleSelectedOption} />
                    <div className="element cta">
                        <button onClick={this.getData}>Get Details</button>
                        <button onClick={this.remove}>Clear</button>
                    </div>
                </section>
                <EmployeeDetail initialState={this.state.initialState} ref={this.employeeData} userId={this.state.option} data={this.state.data} />
            </section>
        );
    }
}
export default Employee;