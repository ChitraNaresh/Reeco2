// apiService.js
import dataVal from './data.json';

const fetchData = async (endpoint) => {
  // Simulate an asynchronous request (e.g., using Promise)
  console.log(dataVal)
  return new Promise((resolve) => {
    setTimeout(() => {
      // Assuming your endpoint corresponds to a key in mockData
      const data = dataVal[endpoint];
      resolve(data);
    }, 500); // Simulate a 500ms delay for the mock API call
  });
};

export default fetchData
