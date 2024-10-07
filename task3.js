// Task 03: Handling Errors with Async/Await
async function awaitCallWithErrorHandling() {
    try {
      // Simulating an API call
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      // Check if the response is okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json(); // Parse the JSON response
      console.log(data); // Log the data
    } catch (error) {
      console.error('Oops! Something went wrong. Please try again later.'); // User-friendly error message
      console.error('Detailed error:', error); // Detailed error for debugging
    }
  }
  
  // Example usage
  awaitCallWithErrorHandling();
  