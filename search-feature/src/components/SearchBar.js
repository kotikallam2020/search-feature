import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = e => {
        console.log(e, e.target.value);
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
        
  render() {
    return (
      <div className="ui segment">
        <form onSubmit= {this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input onChange={ e => this.setState({term: e.target.value})} className="field" type="text" />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
