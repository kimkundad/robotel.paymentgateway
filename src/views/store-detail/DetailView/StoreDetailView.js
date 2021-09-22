import React, { useEffect, useState } from 'react';
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
import PaymentTable from 'src/components/Payment/PaymentTable';

const useStyles = makeStyles((theme) => ({
  root: {},
  boxBank: {
    borderRadius: 5,
    border: `1px solid ${theme.palette.text.primary}`,
    padding: 20,
  },
  tab: {
    border: `1px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.white,
    minWidth: 150,
    justifyContent: 'center',
    display: 'flex',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  tabActive: {
    border: `1px solid ${theme.palette.primary.dark}`,
    color: theme.palette.white,
    minWidth: 150,
    backgroundColor: theme.palette.primary.dark,
    justifyContent: 'center',
    display: 'flex',
    padding: '10px 20px',
  },
  textError: { 
    color: theme.palette.error.dark,
    display: 'inline-block',
    marginLeft: 7
  }
}));

const col = [
  { xs: 12, sm: 3, md: 2 },
  { xs: 12, sm: 9, md: 10 },
]

const headers = [
  { name: 'บัญชีรับเงิน' },
  { name: 'หมายเลขบัญชี' },
  { name: 'ช่องทางการชำระเงิน' },
  { name: 'Biller ID' },
  { name: 'การใช้งาน' }
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

  const [tab, setTab] = useState('detail');
  const [cells, setCells] = useState([]);

  useEffect(() => {
    dispatch(getStoreRegisterDetail(1));
  }, [dispatch])

  const renderCell = (items) => {
    let result = []
    items.map((item) => {
      let r = [
        () => (
            <Box display="flex" alignItems="center">
                <img
                    src={`/static/images/bank/${item.bankCode}.png`} 
                    style={{
                        height: 24,
                        width: 24,
                        marginRight: 10
                    }}
                />
                {item.bankName}
                {item.isMain && (
                  <Typography variant="subtitle2" className={classes.textError}>{`(บัญชีหลัก)`}</Typography>
                )}
            </Box>
        ),
        item.bankAccountNo,
        item.channel,
        item.billerId,
        () => (<>
            <Switch
                checked={item.isActive}
                color="primary"
                edge="start"
                name="isActive"
                // onChange={(e) => handleToggle(item.storeId)}
                value={item.isActive}
            />
        </>),
        ]
        result.push(r)
    })
    return result
  }

  useEffect(() => {
    setCells(renderCell((reducer.detail?.banks || [])))
  }, [reducer.detail?.banks]);

  return (
    <>
      <Grid container>
        <Grid item>
          <Box
            onClick={() => setTab('detail')}
            className={tab === 'detail' ? classes.tabActive : classes.tab}
          >
            <Typography variant="h5">ข้อมูลทั่วไป</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            onClick={() => setTab('bank')}
            className={tab === 'bank' ? classes.tabActive : classes.tab}
          >
            <Typography variant="h5">บัญชีรับเงิน</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={2} />

      {tab === 'detail' && (<>
        <Card>
          <CardContent>
            <FormHeader title="ข้อมูลผู้สมัคร" />
            <FormLabel mb={2} title="ชื่อผู้ติดต่อ" description={reducer.detail?.name || ''} />
            <FormLabel mb={2} title="เบอร์โทร" description={reducer.detail?.tel || ''} />
            <FormLabel mb={1} title="อีเมล" description={reducer.detail?.email || ''} />
          </CardContent>
        </Card>

        <Box mt={2} />
        <Card>
          <CardContent>
            <FormHeader title="ข้อมูลร้านค้า" />
            <FormLabel mb={2} title="ชื่อร้านค้า" description={reducer.detail?.storeName || ''} />
            <FormLabel mb={2} title="ประเภทองค์กร" description={reducer.detail?.storeType || ''} />
            <FormLabel mb={2} title="ชื่อเจ้าของร้าน/กรรมการ" description={reducer.detail?.name || ''} />
            <FormLabel mb={2} title="เบอร์เจ้าของร้าน/กรรมการ" description={reducer.detail?.tel || ''} />
            <FormLabel mb={2} title="อีเมลเจ้าของร้าน/กรรมการ" description={reducer.detail?.email || ''} />
            <FormLabel mb={2} title="ที่อยู่" description={reducer.detail?.address || ''} />
            <FormLabel mb={2} title="เว็บไซต์" description={reducer.detail?.website || ''} />
            <FormLabel mb={2} title="อีเมลร้านค้า" description={reducer.detail?.emailStore || ''} />
            <FormLabel mb={1} title="ประเภทกิจการ" description={reducer.detail?.storeType2 || ''} />
          </CardContent>
        </Card>

        <Box mt={2} />
        <Card>
          <CardContent>
            <FormHeader title="สาขา" />
            <FormLabel mb={2} title="สาขา 1" description={reducer.detail?.branch1 || ''} />
            <FormLabel mb={1} title="สาขา 2" description={reducer.detail?.branch2 || ''} />
          </CardContent>
        </Card>

        <Box mt={2} />
        <Card>
          <CardContent>
            <FormHeader title="บริการที่ต้องการใช้งาน" />
            <FormLabel mb={2} title="บริการ" description={reducer.detail?.service || ''} />
            <FormLabel mb={2} title="เชื่อมต่อกับ Website" description={reducer.detail?.website || ''} />
            <FormLabel mb={1} title="เชื่อมต่อกับ Application" description={reducer.detail?.website || ''} />
          </CardContent>
        </Card>
      </>)}

      {tab === 'bank' && (<>
        <Card>
          <CardContent>
            <FormHeader title="Biller ID" />
            <PaymentTable
              headers={headers}
              items={cells}
              width="500px"
              noPage
            />
          </CardContent>
        </Card>
        <Box mt={2} />
        <Card>
          <CardContent>
            <FormHeader title="บัญชีรับเงิน" />
            <Grid container spacing={3}>
              {(reducer.detail?.banks || []).map((m, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box key={i} className={classes.boxBank} display="flex">
                    <Box style={{ width: '20%' }} display="inline-block">
                      <Box display="flex" justifyContent="center">
                        <img
                          src={`/static/images/bank/${m.bankCode}.png`}
                          style={{
                            height: 30,
                            width: 30,
                            marginRight: 10
                          }}
                        />
                      </Box>
                    </Box>
                    <Box style={{ width: '80%' }} display="inline-block">
                      <Box mb={1}>
                        <Typography variant="subtitle2" color="textPrimary">
                          {m.bankName}
                          {m.isMain && (
                            <Typography variant="subtitle2" className={classes.textError}>{` (บัญชีหลัก)`}</Typography>
                          )}
                        </Typography>
                      </Box>
                      <Box mb={1}>
                        <Typography variant="subtitle2" color="textPrimary">{m.bankAccountName}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" color="textPrimary">{m.bankAccountNo}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

      </>)}
    </>
  );
};

export default Detail;
