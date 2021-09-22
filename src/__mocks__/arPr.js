import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/ar-pr').reply(() => {
  const dataArPr = {
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
        channel: 'Promptpay, True Money, Rabbit Line Pay, ShopeePay, Credit Card (QR Credit)',
        isContact: false,
        transactionNo: 'INV-20210829007',
        payment: 'โอน-QR',
        paymentDate: '29/08/2021',
        bankAccount: '6523897415',
        bankName: 'KBANK',
        bankType: 'TCC',
        ap: null,
        ar: 10000,
        amount: 95000
      },
      {
        storeId: '2',
        date: '28/08/2021 10:01',
        name: 'วศิน กาญจนาวงษ์',
        storeName: 'กาญจนาการค้า',
        tel: '090-509-5654',
        channel: 'Promptpay, Tru Money',
        isContact: false,
        transactionNo: 'INV-20210829006',
        payment: 'โอน-QR',
        paymentDate: '29/08/2021',
        bankAccount: '6523897415',
        bankName: 'KBANK',
        bankType: 'TCC',
        ap: -10000,
        ar: null,
        amount: 85000
      },
      {
        storeId: '3',
        date: '27/08/2021 10:01',
        name: 'อธิคุณ อนัตพิศัย',
        storeName: 'อีซีโพสแอนด์โมบายจำกัด',
        tel: '093-345-9704',
        channel: 'True Money, Rabbit Line Pay, ShopeePay',
        isContact: false,
        transactionNo: 'INV-20210829005',
        payment: 'Credit card',
        paymentDate: '28/08/2021',
        bankAccount: '6523897415',
        bankName: 'KBANK',
        bankType: 'TCC',
        ap: null,
        ar: 1000,
        amount: 95000
      },
      {
        storeId: '4',
        date: '26/08/2021 10:01',
        name: 'มานะ วงศาโรศน์',
        storeName: 'M-commerc co., Ltd.',
        tel: '083-555-3435',
        channel: 'Promptpay',
        isContact: true,
        transactionNo: 'INV-20210829004',
        payment: 'เงินสด',
        paymentDate: '27/08/2021',
        bankAccount: '6523897415',
        bankName: 'KBANK',
        bankType: 'TCC',
        ap: -5000,
        ar: null,
        amount: 94000
      },
      {
        storeId: '5',
        date: '25/08/2021 10:01',
        name: 'ภัทร พูลจำเริญ',
        storeName: 'ภัทรพูลจำเริญ จำกัด',
        tel: '080-999-9999',
        channel: 'Promptpay, True Money, Rabbit Line Pay, ShopeePay, Credit Card (QR Credit)',
        isContact: true,
        transactionNo: 'INV-20210829003',
        payment: 'โอน-QR',
        paymentDate: '27/08/2021',
        bankAccount: '6523897415',
        bankName: 'KBANK',
        bankType: 'TCC',
        ap: -1000,
        ar: null,
        amount: 99000
      },
      
    ]
  };

  return [200, { dataArPr }];
});
