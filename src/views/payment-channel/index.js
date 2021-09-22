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

const PaymentChannel = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="ช่องทางการชำระเงิน"
    >
      <Header
        title="ช่องทางการชำระเงิน"
      />
      <Container maxWidth="lg" className={classes.container}>
        <Results />
      </Container>
    </Page>
  );
};

export default PaymentChannel;
