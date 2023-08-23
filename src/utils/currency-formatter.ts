export type Currency = 'USD' | 'SGD' | 'CHF' | 'GBP' | 'EUR' | 'CNY' | 'MYR' | 'HKD' | 'AUD';

export const formatToCurrency = (amount: number, currency?: Currency, prefix?: string) => {
  const value = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD'
  }).format(amount);
  return value;
};
