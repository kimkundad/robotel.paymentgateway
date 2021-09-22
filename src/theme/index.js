import _ from 'lodash';
import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core';
import { THEMES } from 'src/constants';
import { softShadows, strongShadows } from './shadows';
import typography from './typography';
import overrides from './overrides';
import palette from './palette'

const baseOptions = {
  direction: 'ltr',
  typography,
  overrides: {
    ...overrides,
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    },
    MuiInputBase: {
      input: {
        color: palette.text.primary,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: '#5A9E9B',
        },
      },
    },
    // MuiList:{
    //   root:{
    //     border:' 1px solid #D4DDE3',
    //     // borderRadius: '4px'
    //   }
    // },
    MuiListItem: {
      container: {
        '&:hover': {
          backgroundColor: '#F4F6F8',
          color: '#5B6978'
        }
      }
    },
    // MuiListItemText: {
    //   root: {
    //     primary: {
    //       '&:hover': {
    //         // backgroundColor: '#F4F6F8',
    //         color: '#5B6978'
    //       }
    //     }
    //   }
    // }
  }
};

const white = '#FFFFFF';
const black = '#000000';

const themesOptions = [
  {
    name: THEMES.LIGHT,
    palette: {
      black : '#000000',
      white : '#FFFFFF',
      primary: {
        contrastText: white,
        dark: '#0B3E45',
        main: '#50B59E',
        light: '#116A76'
      },
      secondary: {
        contrastText: white,
        dark: '#0B3E45',
        main: '#116A76',
        light: '#DBF4F2'
      },
      sub: {
        main: '#DAF4D9',
        dark: '#116A76',
        light: '#CAE0CB'
      },
      error: {
        contrastText: white,
        dark: '#D00404',
        main: '#D44848',
        light: colors.red[400]
      },
      text: {
        primary: '#333333',
        secondary: '#687178',
        link: colors.blue[600],
      },
      link: colors.blue[800],
      icon: colors.blueGrey[600],
      background: {
        default: '#FFFFFF',
        paper: white
      },
      divider: '#FFFFFF',
      border: {
        main: '#D4DDE3'
      },
    },
    shadows: softShadows
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions,
      { direction: config.direction }
    )
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
}
