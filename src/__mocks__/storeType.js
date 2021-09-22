import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/store-type').reply(() => {
  const dataStoreType = {
    currentPage: 1,
    hasNext: false,
    hasPrevious: false,
    pageSize: 10,
    totalCount: 4,
    totalPages: 1,
    items: [
        {
            storeTypeId: '1',
            storeType: 'ประเภทร้านค้า 1',
            storeCount: 5,
            isActive: true
        },
        {
            storeTypeId: '2',
            storeType: 'ประเภทร้านค้า 2',
            storeCount: 1,
            isActive: true
        },
        {
            storeTypeId: '3',
            storeType: 'ประเภทร้านค้า 3',
            storeCount: 3,
            isActive: true
        },
        {
            storeTypeId: '4',
            storeType: 'ประเภทร้านค้า 4',
            storeCount: 4,
            isActive: true
        },
    ]
  };

  return [200, { dataStoreType }];
});
