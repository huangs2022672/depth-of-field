import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchContext: "",
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({searchContext: ""})
  }

  handleSearch(e) {
    this.setState({searchContext: e.target.value})
  }

  render() {
    return (
      <form
      className="global-search-form"
      onSubmit={this.handleSubmit}>
        <label><Link to="/explore"><i className="fa fa-search fa-lg"></i></Link>

          <input
            id="global-nav-search"
            type="text"
            value={this.state.searchContext}
            onChange={this.handleSearch}
            placeholder="Search"
          />
        </label>
      </form>
    )
  }
}

export default SearchBar;
