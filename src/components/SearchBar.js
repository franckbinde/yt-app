import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onMyFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onMyFormSubmit} className="ui form">
        <div className="field search-field">
          <label>Video Search</label>
          <input
            onChange={onInputChange}
            type="text"
            value={term}
          />
        </div>
      </form>
    </div>
  );


}

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field search-field">
//             <label>Video Search</label>
//             <input
//               onChange={this.onInputChange}
//               type="text"
//               value={this.state.term}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
