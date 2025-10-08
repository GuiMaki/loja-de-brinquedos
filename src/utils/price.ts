export const formatRange = (range?: string) => {
  if (range === 'Até R$ 100') {
    return {
      min: 0,
      max: 100,
    };
  }

  if (range === 'De R$ 100 a R$ 200') {
    return {
      min: 100,
      max: 200,
    };
  }

  if (range === 'De R$ 200 a R$ 300') {
    return {
      min: 200,
      max: 300,
    };
  }

  if (range === 'De R$ 300 a R$ 400') {
    return {
      min: 300,
      max: 400,
    };
  }

  if (range === 'De R$ 400 a R$ 500') {
    return {
      min: 400,
      max: 500,
    };
  }

  if (range === 'Mais de R$ 500') {
    return {
      min: 500,
      max: undefined,
    };
  }

  return {
    min: undefined,
    max: undefined,
  };
};
