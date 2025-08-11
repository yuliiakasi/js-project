//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.


const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => response.json())
  .then(user => {

    // console.log(user);

    //create universal function for displaying all information about user
    function userData (user, div) {
      for (const key in user) {
        if ( typeof user[key] !== 'object' ) {
          const p = document.createElement('p');
          p.innerText = `${key}: ${user[key]}`;
          div.appendChild(p);
        }
      }
    }

    //create page styling for each block with user data
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const userAddress = document.createElement('div');
    userAddress.classList.add('user-address');

    const userCompany = document.createElement('div');
    userCompany.classList.add('user-company');

    wrapper.append(userInfo, userAddress, userCompany);

    //call the function and pass the arguments
    userData(user, userInfo);
    userData(user.address, userAddress);
    userData(user.company, userCompany);

    //create element user geo
    const geo = document.createElement('p');
    const lat = user.address.geo.lat;
    const lng = user.address.geo.lng;
    geo.innerText = `Geo: lat: ${lat}, lng: ${lng}`;
    userAddress.appendChild(geo);

    //create button which open the list of the user's posts
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = 'Post of current user';
    wrapper.appendChild(btn);

    //add event on button
    btn.onclick = function () {
      //if selector with className=info-posts created,
      //stop executing the function to avoid creating a duplicate
      if (document.querySelector('.info-posts')) {
        return;
      }

      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((value) => value.json())
        .then((posts) => {

          //create container for all posts
          const infoPosts = document.createElement('div');
          infoPosts.classList.add('info-posts');
          wrapper.appendChild(infoPosts);

          // add a click handler to the infoPosts container
          // if the click was on a button with the 'post-details' class, open the post details page.
          infoPosts.addEventListener('click', (e) => {
            if (e.target.classList.contains('post-details')) {
              const postId = e.target.dataset.postId;
              window.open(`post-details.html?postId=${postId}`, '_blank');
            }
          })

          //create each card of posts
          for (const post of posts) {
            const userPosts = document.createElement('div');
            userPosts.classList.add('user-posts');
            userPosts.innerHTML = `<p>${post.title}</p>`;

            const postDetails = document.createElement('button');
            postDetails.classList.add('post-details');
            postDetails.innerText = `More`;
            postDetails.dataset.postId = post.id;

            userPosts.appendChild(postDetails);
            infoPosts.appendChild(userPosts);

          }
        });
    }

  });
