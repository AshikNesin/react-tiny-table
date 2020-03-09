const dataset = [
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
];

module.exports = Array.from({ length: 100 }).map(x => dataset[0]);
