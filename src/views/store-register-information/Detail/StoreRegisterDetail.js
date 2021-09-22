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
import { getStoreRegisterDetail } from 'src/slices/storeRegisterInformation';

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
  const reducer = useSelector((state) => state.storeRegisterInformation);

  useEffect(() => {
    dispatch(getStoreRegisterDetail(1));
  }, [dispatch])

  return (
    <>
      <Card>
        <CardContent>
          <FormHeader title="ข้อมูลการสมัคร" />
          <FormLabel mb={2} title="วันที่" description={reducer.detail?.date || ''} />
          <FormLabel mb={2} title="ชื่อผู้ติดต่อ" description={reducer.detail?.name || ''} />
          <FormLabel mb={2} title="ร้านค้า" description={reducer.detail?.storeName || ''} />
          <FormLabel mb={2} title="เบอร์โทร" description={reducer.detail?.tel || ''} />
          <FormLabel mb={1} title="อีเมล" description={reducer.detail?.email || ''} />
        </CardContent>
      </Card>

      <Box mt={2} />
      <Card>
        <CardContent>
          <Box mb={3}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5">ช่องทางการชำระเงินที่สมัคร</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mb={1}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary">{reducer.detail?.channel || ''}</Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Box mt={2} />
        <Card>
          <CardContent>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h5">ติดต่อแล้ว</Typography>
              </Grid>
              <Grid item>
                <Switch
                    checked={reducer.detail?.isContact}
                    color="primary"
                    edge="start"
                    name="isContact"
                    // onChange={(e) => handleToggle(item.storeId)}
                    value={reducer.detail?.isContact}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </>
  );
};

export default Detail;
