// Fetch posts from a fake API and log them
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log('Posts:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
