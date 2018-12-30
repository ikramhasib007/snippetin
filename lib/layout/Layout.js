import {Fragment} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Layout = (props) => (
  <Fragment>
    <Header/>
      {props.children}
    <Footer/>
  </Fragment>
)

export default Layout;