import React, {Component} from 'react';
import "./Columns.css";

class Columns extends Component {
    state = {
        columnNumber: null,
        rowHeight: null,
        color: "green"
    }
    componentWillReceiveProps(newProps){
        this.setState({
            color: newProps.color
        })
        console.log("Color in Columns:", this.state.color)
    }


    handleOnChange = (e) => {
      //pulling id and value from e.target
      const {id, value} = e.target;

      //setting the value to the state
        this.setState({
          [id]: value
        }) 
        console.log("onChange", this.state);
    }

    render() {
        const cols = {
            redCols: (
        <div className="columns-container">
                <div
                className="columns"
                style={{
                  height: `${this.state.rowHeight}px`,
                  backgroundColor: "#DE2D00"
                 }}>
            </div>
            <div
                className="columns"
                style={{
                  height: `${this.state.rowHeight}px`,
                  backgroundColor: "#DE2D00"
                 }}>
            </div>
            <div
                className="columns"
                style={{
                  height: `${this.state.rowHeight}px`,
                  backgroundColor: "#DE2D00"
                 }}>
            </div>
        </div>
            ),
            greenCols: (
            <div className="columns-container">
                        <div
                        className="columns"
                        style={{
                          height: `${this.state.rowHeight}px`,
                          backgroundColor: "#4AB054"
                         }}>
                    </div>
                    <div
                        className="columns"
                        style={{
                          height: `${this.state.rowHeight}px`,
                          backgroundColor: "#4AB054"
                         }}>
                    </div>
                    <div
                        className="columns"
                        style={{
                          height: `${this.state.rowHeight}px`,
                          backgroundColor: "#4AB054"
                         }}>
                    </div>
                </div>
                    ),
        }
        return (
            <div className="main-columns-container">
                <div className="columns-header-container">
                    <div className="columns-header">
                        <label htmlFor="columnNumber">Number of Columns</label>
                        <input 
                        type="text" 
                        id="columnNumber" 
                        onChange={this.handleOnChange}/>
                    </div>

                    <div className="row-header">
                        <label htmlFor="rowHeight">Row height</label>
                        <input 
                        type="text" 
                        id="rowHeight" 
                        onChange={this.handleOnChange}/>px
                    </div>
                </div>
                    {(this.state.color==="green") ? 
                    (cols.greenCols) :
                    (cols.redCols)
                        
                }
            </div>
        );
    }
}

export default Columns;
