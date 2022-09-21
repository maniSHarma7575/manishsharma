import * as React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import './index.css'
import Landing from '../components/Landing';

const Layout = ({containerChildren}) => {
  return(
    <>
      <Header title={`Manis`}/>
      <Container>
        {containerChildren}
      </Container>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  containerChildren: PropTypes.node
}

export default Layout;