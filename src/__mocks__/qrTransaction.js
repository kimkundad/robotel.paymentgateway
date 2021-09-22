import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/qr-transaction').reply(() => {
  const dataQrTransaction = {
    currentPage: 1,
    hasNext: false,
    hasPrevious: false,
    pageSize: 10,
    totalCount: 5,
    totalPages: 1,
    items: [
        {
          storeId: '1',
          date: '29/08/2021 10:01',
          name: 'ศิรินทรา เศรษฐิอนันต์',
          storeName: 'เทสเตอร์ จำกัด',
          tel: '083-903-2345',
          channel: 'Promptpay',
          isContact: false,
          storeType: 'ประเภทร้านค้า 1',
          transactionNo: 'RBTL202010-000099',
          amount: 10000,
          status: 'รอการชำระ'
        },
        {
          storeId: '2',
          date: '28/08/2021 10:01',
          name: 'วศิน กาญจนาวงษ์',
          storeName: 'กาญจนาการค้า',
          tel: '090-509-5654',
          channel: 'Credit Card (QR Code)',
          isContact: false,
          storeType: 'ประเภทร้านค้า 1',
          transactionNo: 'RBTL202010-000098',
          amount: 10000,
          status: 'ชำระเงินแล้ว'
        },
        {
          storeId: '3',
          date: '27/08/2021 10:01',
          name: 'อธิคุณ อนัตพิศัย',
          storeName: 'อีซีโพสแอนด์โมบายจำกัด',
          tel: '093-345-9704',
          channel: 'Allpay',
          isContact: false,
          storeType: 'ประเภทร้านค้า 3',
          transactionNo: 'RBTL202010-000097',
          amount: 10000,
          status: 'ชำระเงินแล้ว'
        },
        {
          storeId: '4',
          date: '26/08/2021 10:01',
          name: 'มานะ วงศาโรศน์',
          storeName: 'M-commerc co., Ltd.',
          tel: '083-555-3435',
          channel: 'WeChat',
          isContact: true,
          storeType: 'ประเภทร้านค้า 1',
          transactionNo: 'RBTL202010-000096',
          amount: 10000,
          status: 'ชำระเงินแล้ว'
        },
        {
          storeId: '5',
          date: '25/08/2021 10:01',
          name: 'ภัทร พูลจำเริญ',
          storeName: 'ภัทรพูลจำเริญ จำกัด',
          tel: '080-999-9999',
          channel: 'True Money',
          isContact: true,
          storeType: 'ประเภทร้านค้า 4',
          transactionNo: 'RBTL202010-000095',
          amount: 10000,
          status: 'ยกเลิก'
        },
        
      ]
    };

  return [200, { dataQrTransaction }];
});
