export const random = (first: number, last: number, step: number = 1) => {
  const response = [];
  for (let i = first; i <= last; i += step) {
    response.push(i);
  }
  return response;
};

export const cleanString = (input: string) => {
  return input.replace(/[^a-zA-Z ]/, '');
};

export const generateKey = (seed: string) => {
  const idx = seed.lastIndexOf('/');
  if (idx) {
    return cleanString(seed.substring(idx + 1));
  } else {
    return cleanString(seed);
  }
};
