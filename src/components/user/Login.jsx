import React from "react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <React.Fragment >
                <h3>Login</h3>
                <hr />
                <form>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" onChange={this.onChange}
                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.onChange}
                        className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
                    </div>

                    <button type="submit" className="btn btn-primary"
                    onClick={() => this.props.myAlert("Welcome")}>Submit</button>
                </form>
            </React.Fragment>
        );
    }
}
