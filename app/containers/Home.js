import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as HomeActions from '../actions/login';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
