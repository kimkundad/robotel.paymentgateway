import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    makeStyles,
    Grid,
    TextField,
    InputAdornment,
    SvgIcon,
    Switch,
    Button,
    Link,
    Typography,
    useMediaQuery,
    useTheme,
    Chip
} from '@material-ui/core';
import {
    Search as SearchIcon,
} from 'react-feather';
import PaymentTable from 'src/components/Payment/PaymentTable'
import LabelStatus from 'src/components/Payment/LabelStatus'
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { getQrTransaction } from 'src/slices/qrTransaction';
import { getTableNumber } from 'src/components/Payment/helpper';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const headers = [
    { name: 'วันที่' },
    { name: 'ร้านค้า' },
    { name: 'Transaction No.' },
    { name: 'ช่องทางการชำระเงิน' },
    { name: 'จำนวนเงิน', align: 'right' },
    { name: 'สถานะ' },
]

const statusList = [
    { value: '', label: 'สถานะทั้งหมด' },
    { value: 'รอการชำระ', label: 'รอการชำระ' },
    { value: 'ชำระเงินแล้ว', label: 'ชำระเงินแล้ว' },
    { value: 'ยกเลิก', label: 'ยกเลิก' },
]

const storeList = [
    { value: '', label: 'ร้านค้าทั้งหมด' },
    { value: 'เทสเตอร์ จำกัด', label: 'เทสเตอร์ จำกัด' },
    { value: 'กาญจนาการค้า', label: 'กาญจนาการค้า' },
    { value: 'อีซีโพสแอนด์โมบายจำกัด', label: 'อีซีโพสแอนด์โมบายจำกัด' },
    { value: 'M-commerc co., Ltd.', label: 'M-commerc co., Ltd.' },
    { value: 'ภัทรพูลจำเริญ จำกัด', label: 'ภัทรพูลจำเริญ จำกัด' },
]

const paymentList = [
    { value: '', label: 'ช่องทางการชำระเงินทั้งหมด' },
    { value: 'Promptpay', label: 'Promptpay' },
    { value: 'Credit Card (QR Code)', label: 'Credit Card (QR Code)' },
    { value: 'Allpay', label: 'Allpay' },
    { value: 'WeChat', label: 'WeChat' },
    { value: 'True Money', label: 'True Money' },
]

const statusColor = {
    รอการชำระ: "warning",
    ชำระเงินแล้ว: "success",
    ยกเลิก: "error"
}

const Results = ({
    className,
    ...rest
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.qrTransaction);

    const theme = useTheme();

    const [parameter, setParameter] = useState({
        Page: 1,
        PageSize: 10,
        Keyword: '',
        Status: '',
        Store: '',
        PaymentChannel: ''
    })
    const [items, setItems] = useState({});
    const [cells, setCells] = useState([]);
    
    useEffect(() => {
        dispatch(getQrTransaction(parameter));
    }, [dispatch])

    useEffect(() => {

    }, [reducer.isLoading])

    useEffect(() => {
        setItems(reducer.data);
    }, [reducer.data])

    useEffect(() => {
        if (items?.items) {
            setCells(renderCell(items?.items||[]))
        }
    }, [items]);

    const renderCell = (items) => {
        let result = []
        items.map((item) => {
          let r = [
            item.date,
            item.storeName,
            item.transactionNo,
            item.channel,
            getTableNumber(item.amount),
            () => (<LabelStatus
                label={item.status}
                style={{ width: 100 }}
                color={statusColor[item.status]}
            />)
          ]
          result.push(r)
        })
        return result
    }

    const onPageChange = (page) => {
        dispatch(getQrTransaction({
            ...parameter,
            Page: page
        }))
    }

    const onChageSearch = (e) => {
        setParameter({
            ...parameter,
            [e.target.name]: e.target.value
        })
    }
    
    const onClickSearch = () => {
        dispatch(getQrTransaction({
            ...parameter,
            Page: 1
        }))
    }

    return (<>
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Box p={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={3}>
                        <TextField
                            fullWidth
                            name="Keyword"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon
                                            fontSize="small"
                                            color="action"
                                        >
                                            <SearchIcon />
                                        </SvgIcon>
                                    </InputAdornment>
                                )
                            }}
                            onChange={onChageSearch}
                            // placeholder="ค้นหาด้วยชื่อผู้ติดต่อ หรือชื่อร้านค้า"
                            value={parameter.Keyword}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <TextField
                            fullWidth
                            name="Store"
                            onChange={onChageSearch}
                            label={parameter.Store && "ร้านค้า"}
                            value={parameter.Store}
                            variant="outlined"
                            select
                            SelectProps={{ native: true }}
                        >
                            {
                                storeList.map((m, i) => (
                                    <option key={i} value={m.value}>{m.label}</option>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <TextField
                            fullWidth
                            name="PaymentChannel"
                            onChange={onChageSearch}
                            label={parameter.PaymentChannel && "ช่องทางการชำระเงิน"}
                            value={parameter.PaymentChannel}
                            variant="outlined"
                            select
                            SelectProps={{ native: true }}
                        >
                            {
                                paymentList.map((m, i) => (
                                    <option key={i} value={m.value}>{m.label}</option>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <TextField
                            fullWidth
                            name="Status"
                            onChange={onChageSearch}
                            label={parameter.Status && "สถานะ"}
                            value={parameter.Status}
                            variant="outlined"
                            select
                            SelectProps={{ native: true }}
                        >
                            {
                                statusList.map((m, i) => (
                                    <option key={i} value={m.value}>{m.label}</option>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Button
                            color="secondary"
                            variant="contained"
                            fullWidth
                            onClick={onClickSearch}
                        >
                            ค้นหา
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
        <Box mt={2} />
        <PaymentTable
            headers={headers}
            items={cells}
            page={items}
            onPageChange={onPageChange}
            width="1000px"
        />
    </>)
};

Results.propTypes = {
    className: PropTypes.string,
};

Results.defaultProps = {
};

export default Results;
