//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((value) => value.json())
  .then((post) => {


    //create page styling for each block with post data
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    const postTitle = document.createElement('h2');
    postTitle.innerText = 'Post Details';
    wrapper.appendChild(postTitle);

    const postInfo = document.createElement('div');
    postInfo.classList.add('post-info');
    wrapper.appendChild(postInfo);

    //create universal function for displaying all information about post
    function postData (user, div) {
      for (const key in user) {
        if ( typeof user[key] !== 'object' ) {
          const p = document.createElement('p');
          p.innerText = `${key}: ${user[key]}`;
          div.appendChild(p);
        }
      }
    }

    //call the function and pass the arguments
    postData(post, postInfo);

    //create title for comments
    const commentsTitle = document.createElement('h3');
    commentsTitle.innerText = 'Comments';
    wrapper.appendChild(commentsTitle);

    //request comments for a specific post by its ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((value) => value.json())
    .then((comments) => {

      //create a container for all comments
      const commentsWrapper = document.createElement('div');
      commentsWrapper.classList.add('comments-wrapper');
      wrapper.appendChild(commentsWrapper);

      //iterate over each comment and create a separate container for a specific comment
      for (const comment of comments) {
        const commentContainer = document.createElement('div');
        commentContainer.classList.add('comment-container');
        commentsWrapper.appendChild(commentContainer);

        postData(comment, commentContainer);
      }
    });

});
