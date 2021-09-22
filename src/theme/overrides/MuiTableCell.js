import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    ...typography.body2,
    borderBottom: '',
    padding: '12px 16px',
  },
  head: {
    padding: '10px 14px',
    color:  palette.text.primary,
    fontWeight: 'medium',
    border: `0px`,
    borderBottom: `1px solid ${palette.border.main}`,
    fontWeight: 600,
  },
  body: {
    color: palette.text.secondary,
    fontWeight: 'medium',
    borderBottom: `1px solid ${palette.border.main}`,
  }
};
