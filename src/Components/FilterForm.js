import React from "react";

class FilterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterInput: "",
            isFiltered: true,
        };
    }

    handleChange = (event) => {
        this.setState({filterInput: event.target.value})
    };

    handleKeyPress = (event) => {
        event.preventDefault();        
        this.props.filterTodo(this.state.filterInput);
        if(this.state.filterInput === "")
        {
            this.props.resetFilter();
        }
    };

    render(){
        return(
            <form onKeyUpCapture={event => this.handleKeyPress(event)}>
                <label><h3 className="container">Filter List:</h3></label>
                <input 
                    type="text" 
                    placeholder="Filter List" 
                    value={this.state.filterInput}
                    onChange={event => this.handleChange(event)}
                />
            </form>
        );
    }

}

export default FilterForm;