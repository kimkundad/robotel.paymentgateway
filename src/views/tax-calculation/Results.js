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
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { getTaxCalculation } from 'src/slices/taxCalculation';
import { getTableNumber } from 'src/components/Payment/helpper';
import numeral from 'numeral';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const headers = [
    { name: 'วันที่และเวลา', width: '15%' },
    { name: 'Transaction No.', width: '15%' },
    { name: 'ยอดสินค้า/บริการ', width: '15%', align: 'right' },
    { name: 'ยอดสินค้า/บริการ', width: '15%', align: 'right' },
    { name: 'ค่าใช้จ่ายอื่นๆ', width: '10%', align: 'right' },
    { name: 'ภาษี', width: '10%', align: 'right' },
    { name: '', width: '20%' }
]

const headers2 = [
    { name: 'วันที่และเวลา', width: '15%' },
    { name: 'Transaction No.', width: '15%' },
    { name: 'ยอดสินค้า/บริการ', width: '15%', align: 'right' },
    { name: 'ยอดสินค้า/บริการ', width: '15%', align: 'right' },
    { name: 'ค่าใช้จ่ายอื่นๆ', width: '10%', align: 'right' },
    { name: 'ภาษี', width: '10%', align: 'right' },
]

const Results = ({
    className,
    ...rest
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.taxCalculation);

    const theme = useTheme();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'));

    const [parameter, setParameter] = useState({
        Page: 1,
        PageSize: 10,
        Keyword: '',
    })
    const [items, setItems] = useState({});
    const [cells, setCells] = useState([]);
    
    useEffect(() => {
        dispatch(getTaxCalculation(parameter));
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

    useEffect(() => {
        if (items?.items) {
            setCells(renderCell(items?.items||[]))
        }
    }, [mdUp])

    const renderCell = (items) => {
        let result = []
        items.map((item) => {
          let r = [
            item.date,
            item.transaction,
            getTableNumber(item.amount1),
            getTableNumber(item.amount2),
            getTableNumber(item.amount3),
            getTableNumber(item.taxAmount)
          ]

          if (mdUp) {
            r = [...r, () => (<Box></Box>)];
          }
          result.push(r)
        })
        return result
    }

    const onPageChange = (page) => {
        dispatch(getTaxCalculation({
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
        dispatch(getTaxCalculation({
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
                    <Grid item xs={12} sm={6} md={4}>
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
            headers={mdUp ? headers : headers2}
            items={cells}
            page={items}
            onPageChange={onPageChange}
            width="850px"
        />
    </>)
};

Results.propTypes = {
    className: PropTypes.string,
};

Results.defaultProps = {
};

export default Results;
