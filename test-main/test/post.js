// Function to load existing posts from local storage
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear the container before displaying new posts
  
    // Get posts from localStorage (if any)
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
  
      const postName = document.createElement('div');
      postName.classList.add('name');
      postName.textContent = post.name;
  
      const postContent = document.createElement('div');
      postContent.classList.add('content');
      postContent.textContent = post.content;
  
      postDiv.appendChild(postName);
      postDiv.appendChild(postContent);
      postsContainer.appendChild(postDiv);
    });
  }
  
  // Function to handle post submission
  function submitPost() {
    const isSignedUp = localStorage.getItem('isSignedUp'); // Check if user is signed up
    if (!isSignedUp) {
      alert('Please sign up first before posting!');
      return;
    }
  
    const name = document.getElementById('name').value;
    const content = document.getElementById('post-content').value;
  
    if (name === '' || content === '') {
      alert('Please fill out both fields!');
      return;
    }
  
    // Create a new post object
    const newPost = {
      name,
      content,
    };
  
    // Get existing posts from localStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    // Add new post to the list
    posts.push(newPost);
  
    // Save updated posts to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
  
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('post-content').value = '';
  
    // Reload posts to display the updated list
    loadPosts();
  }
  
  // Function to handle signup
  function signup() {
    const signupName = document.getElementById('signup-name').value;
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;
  
    if (signupName === '' || signupEmail === '' || signupPassword === '') {
      alert('Please fill in all fields!');
      return;
    }
  
    // Save signup data (in this case, just set the signup status to true)
    localStorage.setItem('isSignedUp', true);
  
    // Hide the signup form and show the post form
    document.getElementById('signup-form').style.display = 'none';
    document.querySelector('.post-form').style.display = 'flex';
  
    alert('Signup successful! You can now post.');
  }
  
  // Load posts when the page is loaded
  window.onload = function() {
    // If user is signed up, show the post form
    if (localStorage.getItem('isSignedUp')) {
      document.getElementById('signup-form').style.display = 'none';
      document.querySelector('.post-form').style.display = 'flex';
    }
  
    loadPosts();
  };
  // Function to handle post submission
function submitPost() {
    const isSignedUp = localStorage.getItem('isSignedUp'); // Check if user is signed up
    if (!isSignedUp) {
      alert('Please sign up first before posting!');
      return;
    }
  
    const name = document.getElementById('name').value;
    const content = document.getElementById('post-content').value;
  
    if (name === '' || content === '') {
      alert('Please fill out both fields!');
      return;
    }
  
    // Create a new post object
    const newPost = {
      name,
      content,
    };
  
    // Get existing posts from localStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    // Add new post to the list
    posts.push(newPost);
  
    // Save updated posts to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
  
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('post-content').value = '';
  
    // Reload posts to display the updated list
    loadPosts();
  }
  




