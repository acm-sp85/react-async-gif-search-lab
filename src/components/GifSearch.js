
import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            textValue : ''
         }
    }


    handleChange = (event) => {
        this.setState({textValue: event.target.value});
    }
    handleSubmit = (event) => {
        // const toSearch = 
        event.preventDefault();
        this.props.handleSearch(this.state.textValue)
      }


    render() { 

        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="search" value={this.state.textValue} onChange={this.handleChange}></input>
                    <input type="submit" value="submit" ></input>
                </form>
            </div>
         );
    }
}
 
export default GifSearch;