// В index.html
// 1 отримати масив об'єктів з endpointа https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули



fetch('https://jsonplaceholder.typicode.com/users')
  .then((value) => value.json())
  .then((users) => {


    //create wrapper
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    //create container for each user
    for (const user of users) {
      const div = document.createElement('div');
      div.innerHTML = `<p>Id: ${user.id}</p>
                  <p>Name: ${user.name}</p>`;
      div.classList.add('user');

      //create button
      const btn = document.createElement('button');
      btn.innerText = `more`;
      btn.onclick = function () {
        window.open(`user-details.html?userId=${user.id}`, '_blank'); //link to next page
      };
      wrapper.appendChild(div);
      div.appendChild(btn);
    }

  });
