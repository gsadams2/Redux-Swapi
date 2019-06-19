import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    console.log("working yo");
    this.props.getCharacters();
  }

  render() {
    // if (this.props.fetching) {
    //   // return something here to indicate that you are fetching data
    //   {
    //     <h1>I'M FUCKING LOADING.... </h1>;
    //   }
    // }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  erro: state.charsReducer.error,
  fetched: state.charsReducer.fetched
});
export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
