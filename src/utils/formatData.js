import { works } from '../Constants/Works';

export const formatData = (data) => {
  for (let i = 0; i < data.length; i++) {
    data[i].acf.showonsite == 'Yes' ? '' : works.push(data[i]);
  }
  return works;
};
