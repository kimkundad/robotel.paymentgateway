import mock from 'src/utils/mock';

mock.onGet('/api/tax-calculation').reply(() => {
  const dataTaxCalculation = {
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
        transaction: 'INV-20210829007',
        amount1: 10900,
        amount2: 10000,
        amount3: 200,
        taxAmount: 700
      },
      {
        storeId: '2',
        date: '28/08/2021 10:01',
        transaction: 'INV-20210829006',
        amount1: 10800,
        amount2: 10000,
        amount3: 100,
        taxAmount: 700
      },
      {
        storeId: '3',
        date: '27/08/2021 10:01',
        transaction: 'INV-20210829005',
        amount1: 1120,
        amount2: 1000,
        amount3: 50,
        taxAmount: 70
      },
      {
        storeId: '4',
        date: '26/08/2021 10:01',
        transaction: 'INV-20210829004',
        amount1: 21450,
        amount2: 20000,
        amount3: 150,
        taxAmount: 1400
      },
      {
        storeId: '5',
        date: '26/08/2021 10:01',
        transaction: 'INV-20210827003',
        amount1: 10900,
        amount2: 10000,
        amount3: 200,
        taxAmount: 700
      },
      
    ]
  };

  return [200, { dataTaxCalculation }];
});
