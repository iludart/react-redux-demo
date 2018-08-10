import React, { Component } from "react";

export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    render() {
        return (
            <React.Fragment>
              <div className='filter'>
                <h6>Filter</h6>
              </div>
            </React.Fragment>
        );
    }
}
