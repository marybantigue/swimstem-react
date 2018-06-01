import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewTeam } from '../store/actions/teams';

const initialTeamState = {
  name: '',
  shortName: '',
  location: '',
  otherCoaches: []
};

class TeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialTeamState;
  }

  handleNewTeam = event => {
    event.preventDefault();
    console.log('handling new team');
    postNewTeam(this.state);
    this.setState(initialTeamState);
    this.props.history.push('/team');
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleNewTeam}>
        {/* {this.props.errors.team && (
          <div className="alert alert-danger">{this.props.errors.team}</div>
        )} */}
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
            <label htmlFor="name">Team Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              value={this.state.shortName}
              name="shortName"
              onChange={this.handleChange}
            />
            <label htmlFor="name">Short Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              value={this.state.location}
              name="location"
              onChange={this.handleChange}
            />
            <label htmlFor="name">Location</label>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     errors: state.errors
//   };
// }

// export default connect(mapStateToProps, { postNewTeam })(TeamForm);

export default TeamForm;
