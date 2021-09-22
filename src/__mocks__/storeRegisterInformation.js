import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/store-register-information').reply(() => {
  const dataStoreRegister = {
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
        isContact: false
      },
      {
        storeId: '2',
        date: '28/08/2021 10:01',
        name: 'วศิน กาญจนาวงษ์',
        storeName: 'กาญจนาการค้า',
        tel: '090-509-5654',
        channel: 'Promptpay, Tru Money',
        isContact: false
      },
      {
        storeId: '3',
        date: '27/08/2021 10:01',
        name: 'อธิคุณ อนัตพิศัย',
        storeName: 'อีซีโพสแอนด์โมบายจำกัด',
        tel: '093-345-9704',
        channel: 'True Money, Rabbit Line Pay, ShopeePay',
        isContact: false
      },
      {
        storeId: '4',
        date: '26/08/2021 10:01',
        name: 'มานะ วงศาโรศน์',
        storeName: 'M-commerc co., Ltd.',
        tel: '083-555-3435',
        channel: 'Promptpay',
        isContact: true
      },
      {
        storeId: '5',
        date: '25/08/2021 10:01',
        name: 'ภัทร พูลจำเริญ',
        storeName: 'ภัทรพูลจำเริญ จำกัด',
        tel: '080-999-9999',
        channel: 'Promptpay, True Money, Rabbit Line Pay, ShopeePay, Credit Card (QR Credit)',
        isContact: true
      },
      
    ]
  };

  return [200, { dataStoreRegister }];
});

mock.onGet('/api/store-register-information/1').reply(() => {
  const dataStoreRegisterDetail = {
    storeId: '1',
    date: '29/08/2021 10:01',
    name: 'ศิรินทรา เศรษฐิอนันต์',
    storeName: 'เทสเตอร์ จำกัด',
    tel: '083-903-2345',
    channel: 'Promptpay, True Money, Rabbit Line Pay, ShopeePay, Credit Card (QR Credit)',
    isContact: false,
    email: 'sirintra@gmail.com',
    storeType: 'นิติบุคคล',
    address: '589/7 9 ถ.รามอินทรา แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230',
    website: 'www.sample.com',
    emailStore: 'merchant@gmail.com',
    storeType2: 'ประเภทร้านค้า 1',
    branch1: 'เทสเตอร์ 1 จำกัด',
    branch2: 'เทสเตอร์ 2 จำกัด',
    service: 'QR Payment, Link Payment, ป้าย QR, COD',
    banks: [
      { 
        bankCode: '014',
        bankName: 'ไทยพาณิชย์',
        bankAccountName: 'เทสเตอร์ จำกัด',
        bankAccountNo: '020-2-09702-3',
        isMain: true,
        channel: 'PromptPay, Credit Card (QR Credit)',
        billerId: '4 Biller ID',
        isActive: true
      },
      { 
        bankCode: '004',
        bankName: 'กสิกร',
        bankAccountName: 'เทสเตอร์ จำกัด',
        bankAccountNo: '020-2-09702-3',
        isMain: false,
        channel: 'PromptPay, Credit Card (QR Credit)',
        billerId: '4 Biller ID',
        isActive: true
      },
      { 
        bankCode: '002',
        bankName: 'กรุงเทพ',
        bankAccountName: 'เทสเตอร์ จำกัด',
        bankAccountNo: '020-2-09702-3',
        isMain: false,
        channel: 'PromptPay',
        billerId: '1 Biller ID',
        isActive: true
      }
    ]
  }
  return [200, { dataStoreRegisterDetail }];
});