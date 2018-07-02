import React from 'react';

const url = userId => `https://reqres.in/api/users/${userId}`
class EmployeeDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userId: '',
            requestFailed: false,
            data: '',
            initialState: this.props.initialState
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.initialState !== this.state.initialState){
            this.setState({
                initialState:nextProps.initialState
            })
        }
        if(nextProps.userId !== this.state.userId){
            this.setState({
                userId: nextProps.userId
            })
        }
    }
    fetchData(){
        fetch(url(this.state.userId))
        .then(response => {
            if (!response.ok) {
                throw Error("Network request failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d => {
            this.setState({
                data: d,
                initialState: true
            })
        }, () => {
            this.setState({
                requestFailed: true
            })
        })
    }

    render(){
        if(this.state.initialState) {
            if (this.state.requestFailed) return <p>Failed!</p>
            if (this.state.data)
            return(
                <section className="c-employee-detail">
                    <section className="c-employee-image">
                        <img src={this.state.data.data.avatar} alt={this.state.data.data.first_name} />
                    </section>
                    <section className="c-employee-decsription">
                        <div className="c-employee-Id">ID: {this.state.data.data.id}</div>
                        <div className="c-employee-name">Name: {this.state.data.data.first_name} {this.state.data.data.last_name}</div>
                    </section>
                </section>
            )
            else {
                return(
                    null
                )
            }
        }
        else {
            return(
                null
            )
        }
    }
}
export default EmployeeDetail;