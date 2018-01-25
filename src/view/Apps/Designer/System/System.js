import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadInstances } from '../../../../state/sideEffects/actions';

const stateToProps = state => ({
  loading: state.instances.get('loading'),
  instances: state.instances.get('instances'),
});

const dispatchToProps = { loadInstances };

class System extends Component {
  componentWillMount() {
    const { systemID } = this.props.match.params;
    this.props.loadInstances(parseInt(systemID, 10));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.systemID !== nextProps.match.params.systemID) {
      const { systemID } = nextProps.match.params;
      this.props.loadInstances(parseInt(systemID, 10));
    }
  }

  render() {
    return (
      <div>
        {this.props.loading ? 'LOADING' : (
          this.props.instances.map(instance => (
            <div key={instance.get('id')}>
              <h5>
                {instance.get('name')}
              </h5>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default connect(stateToProps, dispatchToProps)(System);
