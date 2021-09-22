import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/store-detail').reply(() => {
  const dataStoreDetail = {
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
          storeType: 'ประเภทร้านค้า 1'
        },
        {
          storeId: '2',
          date: '28/08/2021 10:01',
          name: 'วศิน กาญจนาวงษ์',
          storeName: 'กาญจนาการค้า',
          tel: '090-509-5654',
          channel: 'Promptpay, Tru Money',
          isContact: false,
          storeType: 'ประเภทร้านค้า 1'
        },
        {
          storeId: '3',
          date: '27/08/2021 10:01',
          name: 'อธิคุณ อนัตพิศัย',
          storeName: 'อีซีโพสแอนด์โมบายจำกัด',
          tel: '093-345-9704',
          channel: 'True Money, Rabbit Line Pay, ShopeePay',
          isContact: false,
          storeType: 'ประเภทร้านค้า 3'
        },
        {
          storeId: '4',
          date: '26/08/2021 10:01',
          name: 'มานะ วงศาโรศน์',
          storeName: 'M-commerc co., Ltd.',
          tel: '083-555-3435',
          channel: 'Promptpay',
          isContact: true,
          storeType: 'ประเภทร้านค้า 1'
        },
        {
          storeId: '5',
          date: '25/08/2021 10:01',
          name: 'ภัทร พูลจำเริญ',
          storeName: 'ภัทรพูลจำเริญ จำกัด',
          tel: '080-999-9999',
          channel: 'Promptpay, True Money, Rabbit Line Pay, ShopeePay, Credit Card (QR Credit)',
          isContact: true,
          storeType: 'ประเภทร้านค้า 4'
        },
        
      ]
    };

  return [200, { dataStoreDetail }];
});
