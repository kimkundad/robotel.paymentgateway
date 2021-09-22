import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/payment-channel').reply(() => {
  const dataPaymentChannel = {
    currentPage: 1,
    hasNext: false,
    hasPrevious: false,
    pageSize: 10,
    totalCount: 6,
    totalPages: 1,
    items: [
        {
            bankCode: '014',
            bankName: 'ไทยพาณิชย์',
            channel: 'Promptpay, Credit Card (QR Credit), Ailpay, WeChat',
            isActive: true
        },
        {
            bankCode: '025',
            bankName: 'กรุงศรี',
            channel: 'Promptpay, Credit Card (QR Credit), Ailpay, WeChat',
            isActive: true
        },
        {
            bankCode: '002',
            bankName: 'กรุงเทพ',
            channel: 'Promptpay, Credit Card (QR Credit), UnionPay, JCB, Ailpay, WeChat',
            isActive: true
        },
        {
            bankCode: '004',
            bankName: 'กสิกร',
            channel: 'Promptpay',
            isActive: true
        },
        {
            bankCode: '006',
            bankName: 'กรุงไทย',
            channel: 'Promptpay',
            isActive: true
        },
        {
            bankCode: '011',
            bankName: 'ทหารไทยธนชาต',
            channel: 'Promptpay',
            isActive: true
        },
    ]
  };

  return [200, { dataPaymentChannel }];
});
