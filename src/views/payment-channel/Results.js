import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    makeStyles,
    Switch
} from '@material-ui/core';
import PaymentTable from 'src/components/Payment/PaymentTable';
import { useDispatch, useSelector } from 'react-redux';
import { getPaymentChannel } from 'src/slices/paymentChannel';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const headers = [
    { name: 'ธนาคาร' },
    { name: 'ช่องทางการชำระเงิน' },
    { name: 'การใช้งาน' },
]

const Results = ({
    className,
    ...rest
}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.paymentChannel);

    const [parameter, setParameter] = useState({
        Page: 1,
        PageSize: 10,
    })
    const [items, setItems] = useState({});
    const [cells, setCells] = useState([]);

    useEffect(() => {
        dispatch(getPaymentChannel(parameter));
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
                </Box>
            ),
            item.channel,
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

    const onPageChange = (page) => {
        dispatch(getPaymentChannel({
            ...parameter,
            Page: page
        }))
    }

    return (<>
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
