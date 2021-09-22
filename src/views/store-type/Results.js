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
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {
    Search as SearchIcon,
} from 'react-feather';
import PaymentTable from 'src/components/Payment/PaymentTable'
import { useDispatch, useSelector } from 'react-redux';
import { getStoreType } from 'src/slices/storeType';
import numeral from 'numeral';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const headers = [
    { name: 'ประเภทร้านค้า', width: '300px' },
    { name: 'จำนวนร้านค้า', width: '150px', align: 'right' },
    { name: '' },
]

const headers2 = [
    { name: 'ประเภทร้านค้า' },
    { name: 'จำนวนร้านค้า', align: 'right' },
]

const Results = ({
    className,
    ...rest
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.storeType);

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.only('xs'));

    const [parameter, setParameter] = useState({
        Page: 1,
        PageSize: 10,
        Keyword: '',
    })
    const [items, setItems] = useState({});
    const [cells, setCells] = useState([]);
    
    useEffect(() => {
        dispatch(getStoreType(parameter));
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
    }, [xs])

    const renderCell = (items) => {
        let result = []
        items.map((item) => {
          let r = [
            item.storeType,
            () => (<Typography variant="body2">{numeral(item.storeCount).format('0,0')}</Typography>),
          ]
          if (!xs) {
            r = [...r, () => (<></>),];
          }
          result.push(r)
        })
        return result
    }

    const onPageChange = (page) => {
        dispatch(getStoreType({
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
        dispatch(getStoreType({
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
                            placeholder="ค้นหาด้วยประเภทร้านค้า"
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
            headers={xs ? headers2 : headers}
            items={cells}
            page={items}
            onPageChange={onPageChange}
        />
    </>)
};

Results.propTypes = {
    className: PropTypes.string,
};

Results.defaultProps = {
};

export default Results;
