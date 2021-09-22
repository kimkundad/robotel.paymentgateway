import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn: {
        backgroundColor: theme.palette.sub.main,
        color: theme.palette.sub.dark,
        fontWeight: 600,
        '&:hover': {
            backgroundColor: theme.palette.sub.light,
            color: theme.palette.sub.dark,
        }
    },
}));

const ButtonAdd = ({
    title = "",
    variant = "contained",
    style,
    onClick,
    to,
    fullWidth,
    size = ""
}) => {
    const classes = useStyles();

    return (
        <>
            {to ? (
                <Button
                    color="primary"
                    variant={variant}
                    fullWidth={fullWidth}
                    style={style}
                    className={classes.btn}
                    size={size}
                >
                    {title}
                </Button>
            ) : (
                <Button
                    color="primary"
                    variant={variant}
                    fullWidth={fullWidth}
                    style={style}
                    onClick={onClick}
                    className={classes.btn}
                    size={size}
                >
                    {title}
                </Button>
            )}
        </>
    )
};

ButtonAdd.defaultProps = {
};

export default ButtonAdd;