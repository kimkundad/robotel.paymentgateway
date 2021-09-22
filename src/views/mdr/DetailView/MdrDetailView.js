import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Grid,
  Typography,
  Switch
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getMdrDetail } from 'src/slices/mdr';
import numeral from 'numeral';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const col = [
    { xs: 12, sm: 3, md: 2 },
    { xs: 12, sm: 9, md: 10 },
]

const FormHeader = ({ title = '' }) => {
    return (
      <Box mb={3}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">{title}</Typography>
          </Grid>
        </Grid>
      </Box>
    )
}

const FormLabel = ({ title = '', description = '', mb }) => {
    return (
      <Box mb={mb}>
        <Grid container>
          <Grid item {...col[0]}>
            <Typography variant="subtitle2">{title}</Typography>
          </Grid>
          <Grid item {...col[1]}>
            <Typography variant="body2" color="textSecondary">{description}</Typography>
          </Grid>
        </Grid>
      </Box>
    )
}
  

const Detail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state.mdr);

  useEffect(() => {
    dispatch(getMdrDetail(1));
  }, [dispatch])

  return (
    <>
      <Card>
        <CardContent>
          <FormHeader title="ร้านค้า" />
          <FormLabel mb={2} title="ชื่อร้านค้า" description={reducer.detail?.storeName || ''} />
        </CardContent>
      </Card>

      <Box mt={2} />
      <Card>
        <CardContent>
          <FormHeader title="MDR" />
          {(reducer.detail?.banks||[]).map((m, i) => (
            <Box mb={2} key={i}>
              <Grid container>
                <Grid item {...col[0]}>
                  <Typography variant="subtitle2">{m?.bankName||''}</Typography>
                </Grid>
                <Grid item {...col[1]}>
                    {(m?.mdr||[]).map((r, j) => (
                        <Box mb={1} key={j}>
                            <Typography variant="body2" color="textSecondary">{r}</Typography>
                        </Box>
                    ))}
                </Grid>
            </Grid>
            </Box>
          ))}
        </CardContent>
      </Card>

      <Box mt={2} />
      <Card>
        <CardContent>
          <FormHeader title="รอบการจ่ายเงิน" />
          <Box mb={1}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary">{numeral(reducer.detail?.paymentTerm||0).format('0,0')}</Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Detail;
