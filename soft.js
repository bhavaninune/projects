
// Simulated user data
const user = {
    username: 'exampleUser',
    lastActivityTime: null,
    posts: [],
  };
  
  // Function to update the user's lastActivityTime
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  // Function to create a post
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.posts.push(post);
        resolve();
      }, 1000);
    });
  }
  
  // Function to delete the last post
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.posts.length > 0) {
          user.posts.pop();
          resolve();
        } else {
          reject("No posts to delete");
        }
      }, 1000);
    });
  }
  
  // Function to perform the entire process
  function processPosts() {
    // Create an array of promises for creating a post and updating lastActivityTime
    const promises = [createPost({ title: 'Post 1' }), updateLastUserActivityTime()];
  
    // Use Promise.all to wait for both promises to resolve
    Promise.all(promises)
      .then(() => {
        console.log('All posts:', user.posts);
        console.log('Last Activity Time:', user.lastActivityTime);
  
        // Delete the last post and log the updated posts
        return deleteLastPost();
      })
      .then(() => {
        console.log('Post deleted. Updated posts:', user.posts);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  // Call the function to start the process
  processPosts();
  




