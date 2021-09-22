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
    useTheme
} from '@material-ui/core';
import {
    Search as SearchIcon,
} from 'react-feather';
import PaymentTable from 'src/components/Payment/PaymentTable'
import LabelStatus from 'src/components/Payment/LabelStatus'
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { getFundingTransfer } from 'src/slices/fundingTransfer';
import { getTableNumber } from 'src/components/Payment/helpper';
import ButtonAdd from 'src/components/Payment/ButtonAdd';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const headers = [
    { name: 'วันที่กำหนดชำระ' },
    { name: 'Transaction No.' },
    { name: 'ชื่อร้านค้า' },
    { name: 'วิธีการชำระ' },
    { name: 'รายละเอียดผู้จ่าย' },
    { name: 'ชำระเข้าบัญชี' },
    { name: 'จำนวนเงิน', align: 'right' },
    { name: 'วันเวลาที่ชำระ' },
    { name: 'Ref. Payment' },
    { name: 'สถานะ' },
    { name: 'เพิ่มเติม' },
]

const statusList = [
    { value: '', label: 'สถานะทั้งหมด' },
    { value: 'Account approve', label: 'Account approve' },
    { value: 'Pending for settle', label: 'Pending for settle' },
    { value: 'Send to bank', label: 'Send to bank' },
    { value: 'Validate from bank', label: 'Validate from bank' },
    { value: 'Respon from bank', label: 'Respon from bank' },
    { value: 'Success', label: 'Success' },
    { value: 'Reject from bank', label: 'Reject from bank' },
]

const statusColor = {
    'Account approve': "primary",
    'Pending for settle': "warning",
    'Send to bank': "info",
    'Validate from bank': "secondary",
    'Respon from bank': "info",
    'Success': "success",
    'Reject from bank': "error",
}

const Results = ({
    className,
    ...rest
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.fundingTransfer);

    const theme = useTheme();

    const [parameter, setParameter] = useState({
        Page: 1,
        PageSize: 10,
        Keyword: '',
        Status: ''
    })
    const [items, setItems] = useState({});
    const [cells, setCells] = useState([]);
    
    useEffect(() => {
        dispatch(getFundingTransfer(parameter));
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
            item.paymentDate,
            item.transactionNo,
            item.storeName,
            item.payment,
            () => (<Box>
                <Typography variant="body2">{item.payerBank} | {item.payerAccount} |</Typography>
                <Typography variant="body2">{item.payerName}</Typography>
            </Box>),
            () => (<Box>
                <Typography variant="body2">{item.bankName} | {item.bankAccount} |</Typography>
                <Typography variant="body2">{item.bankType}</Typography>
            </Box>),
            getTableNumber(item.amount),
            item.date,
            item.refPayment,
            () => (<LabelStatus
                label={item.status}
                style={{ width: 150 }}
                color={statusColor[item.status]}
            />),
            () => (
                <ButtonAdd
                    variant="contained"
                    // onClick={onClickSearch}
                    title="ดูหลักฐานการชำระเงิน"
                    size="small"
                />
            )
          ]
          result.push(r)
        })
        return result
    }

    const onPageChange = (page) => {
        dispatch(getFundingTransfer({
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
        dispatch(getFundingTransfer({
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
                    <Grid item xs={12} sm={5} md={4}>
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
                    <Grid item xs={12} sm={4} md={4}>
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
            width="1700px"
        />
    </>)
};

Results.propTypes = {
    className: PropTypes.string,
};

Results.defaultProps = {
};

export default Results;
