import React from 'react';
import {
  Box,
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

const StoreRegisterInformation = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="ข้อมูลการสมัครของร้านค้า"
    >
      <Header 
        title="ข้อมูลการสมัครของร้านค้า"
      />
      <Container maxWidth="lg" className={classes.container}>
        <Results />
      </Container>
    </Page>
  );
};

export default StoreRegisterInformation;
