// GET REQUEST
function getTodos() {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
    params: {
      _limit: 5
    }
  })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.put('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo',
      completed: true
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  
  function removeTodo() {
    axios({
      method: 'delete',
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  
  
  function getData() {
    console.log('Simultaneous Request');
    
    // URLs for the two GET requests
    const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
    const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
  
    // Make two GET requests simultaneously
    axios.all([
      axios.get(url1),
      axios.get(url2)
    ])
    .then(axios.spread((response1, response2) => {
      // Handle the responses for both requests here
      console.log('Response from Request 1:', response1.data);
      console.log('Response from Request 2:', response2.data);
    }))
    .catch(error => {
      // Handle errors here
      console.error(error);
    });
  }
  
  getData(); // Call the function to initiate the simultaneous requests
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  // Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // You can modify the request config here (e.g., add headers)
    console.log('Request Interceptor:', config);
    return config;
  },
  function (error) {
    // Handle request errors
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // You can modify the response data here
    console.log('Response Interceptor:', response);
    return response;
  },
  function (error) {
    // Handle response errors
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

// Now, you can make your Axios requests as usual
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    console.log('Response Data:', response.data);
  })
  .catch(function (error) {
    console.error('Request Failed:', error);
  });

  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);