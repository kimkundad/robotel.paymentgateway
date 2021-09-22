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
    Link
} from '@material-ui/core';
import {
    Search as SearchIcon,
} from 'react-feather';
import PaymentTable from 'src/components/Payment/PaymentTable'
import { useDispatch, useSelector } from 'react-redux';
import { getStoreRegisterInformation } from 'src/slices/storeRegisterInformation';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const headers = [
    { name: 'วันที่' },
    { name: 'ชื่อผู้ติดต่อ' },
    { name: 'ร้านค้า' },
    { name: 'เบอร์โทร' },
    { name: 'ช่องทางการชำระเงินที่สมัคร' },
    { name: 'ติดต่อแล้ว' },
]

const Results = ({
    className,
    ...rest
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.storeRegisterInformation);

    const [parameter, setParameter] = useState({
        Page: 1,
        PageSize: 10,
        Keyword: '',
    })
    const [items, setItems] = useState({});
    const [cells, setCells] = useState([]);
    
    useEffect(() => {
        dispatch(getStoreRegisterInformation(parameter));
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
            () => (
                <Link
                    variant="body2"
                    to={`/management/store-register-information/detail/${item.storeId}`}
                    component={RouterLink}
                >
                    {item.name}
                </Link>
            ),
            item.storeName,
            item.tel,
            item.channel,
            () => (<>
                <Switch
                    checked={item.isContact}
                    color="primary"
                    edge="start"
                    name="isContact"
                    // onChange={(e) => handleToggle(item.storeId)}
                    value={item.isContact}
                />
            </>),
            ]
            result.push(r)
        })
        return result
    }

    const onPageChange = (page) => {
        dispatch(getStoreRegisterInformation({
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
        dispatch(getStoreRegisterInformation({
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
                            placeholder="ค้นหาด้วยชื่อผู้ติดต่อ หรือชื่อร้านค้า"
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
