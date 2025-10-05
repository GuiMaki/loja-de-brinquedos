export const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const normalize = (value: string) => {
  return value.replace(/\D/g, '');
};

export const formatNumber = (num: number): string => {
  if (num < 1000) {
    return num.toString();
  } else if (num < 1_000_000) {
    // milhares
    const formatted = (num / 1000).toFixed(1);
    return `${formatted.replace('.', ',')} mil`;
  } else {
    // milhões
    const formatted = (num / 1_000_000).toFixed(1);
    return `${formatted.replace('.', ',')} mi`;
  }
};
