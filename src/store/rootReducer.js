import { combineReducers } from '@reduxjs/toolkit';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as chatReducer } from 'src/slices/chat';
import { reducer as formReducer } from 'redux-form';
import { reducer as kanbanReducer } from 'src/slices/kanban';
import { reducer as mailReducer } from 'src/slices/mail';
import { reducer as notificationReducer } from 'src/slices/notification';
import { reducer as storeRegisterInformationReducer } from 'src/slices/storeRegisterInformation';
import { reducer as paymentChannelReducer } from 'src/slices/paymentChannel';
import { reducer as storeTypeReducer } from 'src/slices/storeType';
import { reducer as storeDetailReducer } from 'src/slices/storeDetail';
import { reducer as qrTransactionReducer } from 'src/slices/qrTransaction';
import { reducer as fundingTransferReducer } from 'src/slices/fundingTransfer';
import { reducer as mdrReducer } from 'src/slices/mdr';
import { reducer as arPrReducer } from 'src/slices/arPr';
import { reducer as taxCalculationReducer } from 'src/slices/taxCalculation';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  chat: chatReducer,
  form: formReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
  notifications: notificationReducer,
  storeRegisterInformation: storeRegisterInformationReducer,
  paymentChannel: paymentChannelReducer,
  storeType: storeTypeReducer,
  storeDetail: storeDetailReducer,
  qrTransaction: qrTransactionReducer,
  fundingTransfer: fundingTransferReducer,
  mdr: mdrReducer,
  arPr: arPrReducer,
  taxCalculation: taxCalculationReducer,
});

export default rootReducer;
