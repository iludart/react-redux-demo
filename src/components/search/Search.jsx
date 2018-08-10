import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          people: null,
          search: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        this.setState({ [name]: value });
    }

    filter(people, search) {
      return people.filter(p => p.name.includes(search));
    }

    render() {
        return (
            <React.Fragment >
                <h3>Search Books <input type='search' name='search' onChange={this.handleChangeSearch}></input></h3>
                <hr />
                <div className='search-content'>
                  
                  {/* Filter Panel */}
                  {/* Results */}
                </div>

                {this.state.people && this.filter(this.state.people, this.state.search).map((p, i) => {
                  return <div key={i}>{p.name}</div>
                })}
            </React.Fragment>
        );
    }
}
