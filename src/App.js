import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './globalStyle';

import Routes from './Routes';

import { Template } from './components/MainComponents';

import Header from './components/partials/header';
import Footer from './components/partials/footer';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Template>

        <Header />
        <Routes />
        <Footer />

      </Template>
    </BrowserRouter>
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