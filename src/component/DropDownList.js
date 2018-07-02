import React from 'react';
import department from '../data/department.json';

let optionList, categorykeys;
    categorykeys = Object.keys(department);
class DropDownList extends React.Component{
    constructor(props){
        super(props);
        this.function1 = 
        this.state = {
            value: this.props.value,
            text: 'Select an Option',
            target: ''
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.text !== this.state.text){
            this.setState({
                text: nextProps.text
            })
        }
    }
    displayOption = () => {
        if((this.props.value) === 'Department'){
            optionList = categorykeys.map((ele, index) => <option keys={index.toString()} value={ele}>{ele}</option>)
        }
        else if((this.props.value) === 'Employee Ids'){
            let element = this.state.text,
            departmetKey = department[element];
           optionList = [...departmetKey].map((ele, index) => <option keys={index.toString()} value={ele.Id}>{ele.Id}</option>)
        }
        else {
            optionList = (
                null
            )
        }
    }
    render(){
        this.displayOption();
        console.log(this.props.target);
        return (
            <div className="element">
                <label value={this.props.value}>{this.props.value}</label>
                    <select value={this.props.target} option={this.props.option} onChange={this.props.dropdownChange}>
                        {optionList}
                    </select>
            </div>
        );
    }
}
export default DropDownList;