import React, {Component} from 'react';
import "./Columns.css";

class Columns extends Component {
    state = {
        columnNumber: null,
        rowHeight: null,
        color: "green",
        columnColors: {
            "green": "#4AB054",
            "red": "#DE2D00"
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({color: newProps.color})
        console.log("Color in Columns:", this.state.color)
    }

    handleOnChange = (e) => {

        //pulling id and value from e.target
        let {id, value} = e.target;

        //if id is "columnNumber", then parse into integer first
        if (id === "columnNumber") {
            value = parseInt(value);

            if (value > 47) {
               return alert("Pick a value less than 48");
            }
        }

        //setting the value to the state
        this.setState({[id]: value})
        console.log("onChange", this.state);
    }
    renderColumn = () => {
        console.log ("renderColumn");
        //Render columns based on column number from state
        let columnArray = [];

        //Setting a default number of columns to 3
        let numberOfColumns = this.state.columnNumber ? this.state.columnNumber : 3
        const column = (
                <div
                    className="columns"
                    style={{
                    height: `${this.state.rowHeight}px`,
                    backgroundColor: `${this.state.columnColors[this.state.color]}`
                }}></div> )

        for( let i = 0; i < numberOfColumns ; i++) {
            columnArray.push(column);
        }

        return columnArray;
    }

    render() {

              
        return (
            <div className="main-columns-container">
                <div className="columns-header-container">
                    <div className="columns-header">
                        <label htmlFor="columnNumber">Number of Columns</label>
                        <input type="number" 
                        id="columnNumber" 
                        onChange={this.handleOnChange}
                        />
                    </div>

                    <div className="row-header">
                        <label htmlFor="rowHeight">Row height</label>
                        <input 
                        type="number" 
                        id="rowHeight" 
                        onChange={this.handleOnChange}/>px
                    </div>
                </div>
                {/* Renders Columns */}
                <div className="columns-container">
                    {this.renderColumn()}
                </div>
            </div>
        );
    }
}

export default Columns;
