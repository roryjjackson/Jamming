// import React from 'react';
// import './SearchBar.css';

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.search = this.search.bind(this);
//     this.handleTermChange = this.handleTermChange.bind(this);
//   }

//   search() {
//     // console.log('search method has been called')
//     this.props.onSearch(this.state.term);
//   }

//   handleTermChange(event) {
//     // console.log('handletermchange method has been called')

//     this.setState({term: event.target.value});
//   }

//   render() {
//     return (
//       <div className="SearchBar">
//         <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
//         <button onClick={this.search} className="SearchButton" >SEARCH</button>
//       </div>
//     )
//   }
// }

// export default SearchBar;


import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
      </div>
    )
  }
}

export default SearchBar;
