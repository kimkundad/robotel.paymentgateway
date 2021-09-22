import React from 'react';
import {
  Box,
  Container,
  Grid,
  Hidden,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from 'src/components/Payment/Header';
import Detail from './StoreRegisterDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3)
  },
  container: {
    paddingTop: 85,
    paddingBottom: theme.spacing(2)
  }
}));

const StoreRegisterDetail = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="ข้อมูลการสมัครของร้านค้า"
    >
      <Header 
        title="รายละเอียด"
        to="/management/store-register-information"
      />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
            <Hidden smDown>
                <Grid item md={1} />
            </Hidden>

            <Grid item xs={12} sm={12} md={10}>
                <Detail />
            </Grid>

            <Hidden smDown>
                <Grid item md={1} />
            </Hidden>
        </Grid>
       
      </Container>
    </Page>
  );
};

export default StoreRegisterDetail;
