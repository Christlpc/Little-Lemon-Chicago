import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Main from './pages';
import Footer from './components/Footer';
import FooterColumn from './components/FooterColumn';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';

import { menuItems, socialMediaItems } from './constants/global';

function App() {
  return (
    <Router>
      <Header>
        <Logo/>
        <Nav items={menuItems} showBurger={true}/>
      </Header>
      <Main/>
      <Footer>
        <FooterColumn title="Navigation">
          <Nav items={menuItems}/>
        </FooterColumn>
        <FooterColumn title="Contact Us">
          <ContactForm />
        </FooterColumn>
        <FooterColumn title="Social Media Links">
          <SocialLinks items={socialMediaItems} />
        </FooterColumn>
      </Footer>
    </Router>
  );
}

export default App;
