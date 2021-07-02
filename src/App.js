import React from 'react';
import { connect } from 'react-redux';

const App = () => {
  return (
    <>
      
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);