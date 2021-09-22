// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:960px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1280px)': {
      fontSize: pxToRem(lg)
    }
  };
}

const FONT_PRIMARY = `Sarabun-Regular, sans-serif`; // Google Font
const FONT_PRIMARY_MEDIUM = `Sarabun-Medium, sans-serif`; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 })
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    letterSpacing: 0.5,
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    fontFamily: FONT_PRIMARY_MEDIUM
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12)
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize'
  }
};

export default typography;

// export default {
//   h1: {
//     fontWeight: 500,
//     fontSize: 35,
//     letterSpacing: '-0.24px',
//     fontFamily :`"Kanit-Medium", "Helvetica", "Arial", sans-serif`,
//   },
//   h2: {
//     fontWeight: 500,
//     fontSize: 29,
//     letterSpacing: '-0.24px',
//   },
//   h3: {
//     fontWeight: 500,
//     fontSize: 24,
//     letterSpacing: '-0.06px',
//   },
//   h4: {
//     fontWeight: 500,
//     fontSize: 20,
//     letterSpacing: '-0.06px',
//   },
//   h5: {
//     fontWeight: 500,
//     fontSize: 16,
//     letterSpacing: '-0.05px',

//   },
//   h6: {
//     fontWeight: 500,
//     fontSize: 14,
//     letterSpacing: '-0.05px',

//   },
//   subtitle1:{
//     fontWeight: 400,
//     fontSize: 16,
//     letterSpacing: '-0.05px',
//     fontFamily :`"Kanit-Regular", "Helvetica", "Arial", sans-serif`,
//   },
//   subtitle2:{
//     fontWeight: 400,
//     fontSize: 16,
//     letterSpacing: '-0.05px',
//     fontFamily :`"Kanit-Regular", "Helvetica", "Arial", sans-serif`,
//     color:'#687178'
//   },
//   overline: {
//     fontWeight: 500
//   },
//   fontFamily: `"Kanit-Medium", "Helvetica", "Arial", sans-serif`,
// };
