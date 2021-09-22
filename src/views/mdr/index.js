import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from 'src/components/Payment/Header';
import Results from './Results';
import ButtonAdd from 'src/components/Payment/ButtonAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3)
  },
  container: {
    paddingTop: 85
  }
}));

const Mdr = () => {
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
      title="MDR & รอบการจ่ายเงิน"
    >
      <Header
        title="MDR & รอบการจ่ายเงิน"
        btnAdd={btnAdd}
      />
      <Container maxWidth="lg" className={classes.container}>
        <Results />
      </Container>
    </Page>
  );
};

export default Mdr;
