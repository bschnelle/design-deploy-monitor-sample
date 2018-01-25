import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import { loadSystems } from '../../../state/sideEffects/actions';

import System from './System';

const stateToProps = state => ({
  loading: state.systems.get('loading'),
  systems: state.systems.get('systems'),
});

const dispatchToProps = { loadSystems };

/* eslint-disable jsx-a11y/anchor-is-valid */
class Designer extends Component {
  componentWillMount() {
    this.props.loadSystems();
  }

  render() {
    return (
      <div>
        <h1>Designer</h1>
        <div>
          {this.props.loading ? 'LOADING' : (
            this.props.systems.map(system => (
              <div key={system.get('id')}>
                <Link to={`/designer/${system.get('id')}`}>
                  {system.get('name')}
                </Link>
              </div>
            ))
          )}
        </div>
        <Switch>
          <Route path="/designer/:systemID" component={System} exact />
        </Switch>
      </div>
    );
  }
}

export default connect(stateToProps, dispatchToProps)(Designer);
