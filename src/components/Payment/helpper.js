import React from 'react';
import {
    Typography,
} from '@material-ui/core';
import numeral from 'numeral';

export const getTableNumber = (number) => {
    if (number == null) return ''
    if (number < 0)
      return <Typography variant="body2" style={{ color : '#EE2424' }}>({numeral(Math.abs(number)).format('0,0.00')})</Typography>
    return <Typography variant="body2">{numeral(number).format('0,0.00')}</Typography>
}