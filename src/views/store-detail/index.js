import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from 'src/components/Payment/Header';
import ButtonAdd from 'src/components/Payment/ButtonAdd';
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

const StoreDetail = () => {
  const classes = useStyles();

  const btnAdd = (
    <ButtonAdd
      variant="contained"
      // onClick={onClickSearch}
      title="เพิ่มร้านค้า"
    />
  )

  return (
    <Page
      className={classes.root}
      title="ข้อมูลร้านค้า"
    >
      <Header 
        title="ข้อมูลร้านค้า"
        btnAdd={btnAdd}
      />
      <Container maxWidth="lg" className={classes.container}>
        <Results />
      </Container>
    </Page>
  );
};

export default StoreDetail;
