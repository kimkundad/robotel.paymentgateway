import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Chip, fade, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  primary: {
    color: theme.palette.primary.main,
    backgroundColor: fade(theme.palette.primary.main, 0.08)
  },
  secondary: {
    color: theme.palette.secondary.main,
    backgroundColor: fade(theme.palette.secondary.main, 0.08)
  },
  error: {
    color: theme.palette.error.main,
    backgroundColor: fade(theme.palette.error.main, 0.08)
  },
  success: {
    color: theme.palette.success.main,
    backgroundColor: fade(theme.palette.success.main, 0.08)
  },
  warning: {
    color: theme.palette.warning.main,
    backgroundColor: fade(theme.palette.warning.main, 0.08)
  },
  info: {
    color: '#4A92C1',
    backgroundColor: fade('#4A92C1', 0.08)
  }
}));

const LabelStatus = ({
  className = '',
  color = 'secondary',
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Chip
      className={
        clsx(classes.root, {
          [classes[color]]: color
        }, className)
      }
      {...rest}
    />
  );
};

LabelStatus.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'success'])
};

export default LabelStatus;
