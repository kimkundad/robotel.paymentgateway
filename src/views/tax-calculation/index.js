import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from 'src/components/Payment/Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3)
  },
  container: {
    paddingTop: 85
  }
}));

const TaxCalculation = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Tax Calculation"
    >
      <Header
        title="Tax Calculation"
      />
      <Container maxWidth="lg" className={classes.container}>
        <Results />
      </Container>
    </Page>
  );
};

export default TaxCalculation;
