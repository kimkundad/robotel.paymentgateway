/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import {
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  ShoppingCart as ShoppingCartIcon,
  Folder as FolderIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  UserPlus as UserPlusIcon,
  AlertCircle as AlertCircleIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  Layout as LayoutIcon,
  Edit as EditIcon,
  DollarSign as DollarSignIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  Share2 as ShareIcon,
  Users as UsersIcon
} from 'react-feather';
import Logo from 'src/components/Logo';
import useAuth from 'src/hooks/useAuth';
import NavItem from './NavItem';

const sections = [
  {
    subheader: 'จัดการทั่วไป',
    items: [
      {
        title: 'ข้อมูลการสมัครของร้านค้า',
        href: '/management/store-register-information',
      },
      {
        title: 'ช่องทางการชำระเงิน',
        href: '/management/payment-channel',
      },
      {
        title: 'ประเภทร้านค้า',
        href: '/management/store-type',
      },
      {
        title: 'ข้อมูลร้านค้า',
        href: '/management/store-detail',
      }
    ]
  },
  {
    subheader: 'บัญชี',
    items: [
      {
        title: 'QR Transaction',
        href: '/account/qr-transaction',
      },
      {
        title: 'Funding Transfer & Settlement',
        href: '/account/funding-transfer',
      },
      {
        title: 'AR/PR',
        href: '/account/ar-pr',
      },
      {
        title: 'MDR & รอบการจ่ายเงิน',
        href: '/account/mdr',
      },
      {
        title: 'Tax Calculation',
        href: '/account/tax-calculation',
      },
    ]
  },
  // {
  //   subheader: 'Auth',
  //   items: [
  //     {
  //       title: 'Login',
  //       href: '/login-unprotected',
  //       icon: LockIcon
  //     },
  //     {
  //       title: 'Register',
  //       href: '/register-unprotected',
  //       icon: UserPlusIcon
  //     }
  //   ]
  // },
  // {
  //   subheader: 'Pages',
  //   items: [
  //     {
  //       title: 'Account',
  //       href: '/app/account',
  //       icon: UserIcon
  //     },
  //     {
  //       title: 'Error',
  //       href: '/404',
  //       icon: AlertCircleIcon
  //     }
  //   ]
  // }
];

function renderNavItems({
  items,
  pathname,
  depth = 0
}) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  title: {
    color: theme.palette.primary.dark
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      style={{ borderRight: '1px solid #D4DDE3'}}
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            p={2}
            display="flex"
            justifyContent="center"
          >
            <RouterLink to="/">
              {/* <Logo /> */}
              <Typography variant="h4" className={classes.title}>Payment Admin</Typography>
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={0}>
          {sections.map((section) => (
            <List
              key={section.subheader}
              subheader={(
                <ListSubheader
                  disableGutters
                  disableSticky
                >
                  {section.subheader}
                </ListSubheader>
              )}
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname
              })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
