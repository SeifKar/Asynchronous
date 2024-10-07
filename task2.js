// Task 02: Awaiting a Call
async function awaitCall() {
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
      console.error('Error fetching data:', error); // Log any errors
    }
  }
  
  // Example usage
  awaitCall();
  
