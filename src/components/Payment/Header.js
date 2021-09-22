import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Grid,
    makeStyles,
    Typography,
    Link,
    SvgIcon
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronLeft as ChevronLeftIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.white,
        width: '100%',
        padding: '20px 24px',
        boxShadow: theme.shadows[5],
        position: 'fixed',
        top: 64,
        zIndex: 1000
    },
    root2: {
        backgroundColor: theme.palette.white,
        width: '100%',
        padding: '12px 24px',
        boxShadow: theme.shadows[5],
        position: 'fixed',
        top: 64,
        zIndex: 1000
    },
    title: {
        color: theme.palette.primary.dark,
        '&:hover': {
            textDecoration: 'none'
        }
    },
    boxBtn: {
        [theme.breakpoints.up('lg')]: {
            paddingRight: 255
        }
    }
}));

const Header = ({
    className,
    title = "",
    btnAdd,
    to
}) => {
    const classes = useStyles();

    return (
        <>
            {btnAdd ? (
            <Box className={classes.root2} display="flex" alignItems="center">
                <Box display="flex" justifyContent="flex-start" flexGrow={1}>
                    {
                        to ? (
                            <Link
                                variant="h4"
                                className={classes.title}
                                to={to}
                                component={RouterLink}
                            >
                                <Box display="flex" alignItems="center">
                                    <SvgIcon style={{ marginRight: 5 }}>
                                        <ChevronLeftIcon />
                                    </SvgIcon>
                                {title}
                                </Box>
                            </Link>
                        ) : <Typography variant="h4" className={classes.title}>{title}</Typography>
                    }
                </Box>
                <Box display="flex" justifyContent="flex-end" className={classes.boxBtn}>
                    {btnAdd}
                </Box>
            </Box>
            ) : (
                <Box className={classes.root}>
                    {
                        to ? (
                            <Link
                                variant="h4"
                                className={classes.title}
                                to={to}
                                component={RouterLink}
                            >
                                <Box display="flex" alignItems="center">
                                    <SvgIcon style={{ marginRight: 5 }}>
                                        <ChevronLeftIcon />
                                    </SvgIcon>
                                {title}
                                </Box>
                            </Link>
                        ) : <Typography variant="h4" className={classes.title}>{title}</Typography>
                    }
                </Box>
            )}
        </>
    )
};

Header.propTypes = {
    className: PropTypes.string,
};

Header.defaultProps = {
};

export default Header;