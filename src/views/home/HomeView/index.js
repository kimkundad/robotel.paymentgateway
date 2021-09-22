import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import CTA from './CTA';
import FAQS from './FAQS';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    history.push('/management/store-register-information')
  }, [])

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <FAQS />
    </Page>
  );
};

export default HomeView;
