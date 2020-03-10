import TinyTable from './'
import { sortColumns } from './utils'
const mockDataset = [
  {
    subscriptionInfo: 'Ashik Nesin',
    customerInfo: 'cloud---entry',
    customerEmail: 'mail@ashiknesin.com',
    customerWebsite: 'https://nesin.io',
    nextRenewal: '17 Feb 2020',
    mrr: '$50.00 USD',
    createdOn: '22 Jan 2020',
    customField: 'Demo'
  }
]

const mockColumns = [
  {
    title: 'Customer Info',
    dataIndex: 'customerInfo',
    key: 'customerInfo'
  },
  {
    title: 'Subscription Info',
    dataIndex: 'subscriptionInfo',
    key: 'subscriptionInfo',
    fixed: 'left'
  },
  {
    title: 'Customer Email',
    dataIndex: 'customerEmail',
    key: 'customerEmail'
  },
  {
    title: 'Customer Website',
    dataIndex: 'customerWebsite',
    key: 'customerWebsite'
  },
  {
    title: 'Next Renewal',
    dataIndex: 'nextRenewal',
    fixed: 'right',
    key: 'nextRenewal'
  },
  {
    title: 'MRR',
    dataIndex: 'mrr',
    key: 'mrr'
  },
  {
    title: 'Created On',
    dataIndex: 'createdOn',
    key: 'createdOn',
    fixed: 'right'
  },
  {
    title: 'Custom Field',
    dataIndex: 'customField',
    key: 'customField'
  },
  {
    title: 'Custom Field',
    dataIndex: 'customField',
    key: 'customField'
  },
  {
    title: 'Fixed Column',
    dataIndex: 'customField',
    key: 'customField'
  },
  {
    title: 'Custom Field',
    dataIndex: 'customField',
    key: 'customField'
  },
  {
    title: 'Custom Field',
    dataIndex: 'customField',
    key: 'customField'
  },
  {
    title: 'Custom Field',
    dataIndex: 'customField',
    key: 'customField'
  },
  {
    title: 'CB Field',
    dataIndex: 'customField',
    key: 'customField',
    fixed: 'left'
  },
  {
    title: 'Custom Field',
    dataIndex: 'customField',
    key: 'customField'
  },
  {
    title: 'Custom Field',
    dataIndex: 'customField',
    key: 'customField'
  }
]

describe('TinyTable', () => {
  const sortedColumns = sortColumns(mockColumns)
    it('is truthy', () => {
    expect(TinyTable).toBeTruthy()
    })
    it('Check if sorted column length and data set length is same', () => {
    expect(sortedColumns).toHaveLength(mockColumns.length)
    })

    it('Check if it has two sticky left column', () => {
    expect(sortedColumns.filter(x => x.fixed === 'left')).toHaveLength(2)
    })

    it('Check if it has right sticky left column', () => {
    expect(sortedColumns.filter(x => x.fixed === 'right')).toHaveLength(2)
    })

    it('Check if whether it has all non-sticky  column', () => {
    expect(sortedColumns.filter(x => !x.fixed)).toHaveLength(12)
    })

    it('Check alignment priority of left fixed columns', () => {
    expect(sortedColumns[0].dataIndex).toBe('subscriptionInfo')
        expect(sortedColumns[1].dataIndex).toBe('customField')
    })

    it('Check alignment priority of right fixed columns', () => {
    expect(sortedColumns[sortedColumns.length - 1].dataIndex).toBe(
      'createdOn'
    )
        expect(sortedColumns[sortedColumns.length - 2].dataIndex).toBe(
      'nextRenewal'
    )
    })
})
