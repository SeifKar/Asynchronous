// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value); // Log the current value
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
  
  // Example usage
  const valuesArray = ['Apple', 'Banana', 'Cherry'];
  iterateWithAsyncAwait(valuesArray);
  