const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

const getAccount = async (value) => {
  return await fetch(`https://api.github.com/users/${value}`).then(
    res => res.json()
  );
}

const getPlaceholderData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/users').then(
    res => res.json()
  )
}

const renderGithubAccount = (data) => {
  return `<div class="response-container">
            <img src="${data.avatar_url}">
            <p> Имя: <span>${data.name}</span></p>
            <p> О себе: <span>${data.bio}</span></p>
            <p> Кол-во репозиториев: <span>${data.public_repos}</span></p>
          </div>`
}

const renderPlaceholder = (data) => {
  return `<div class="response-container">
            <p> Имя: <span>${data.name}</span></p>
            <p> Ник: <span>${data.username}</span></p>
            <p> Email: <span>${data.email}</span></p>
            <p> Телефон: <span>${data.phone}</span></p>
            <p> Сайт: <span>${data.website}</span></p>
          </div>`
}

loadBtn.addEventListener("click", async (e ) => {
  e.preventDefault();
  
  resultsContainer.innerHTML = ''

  const searchValue = searchInput.value.trim().toLowerCase();

  let account = await getAccount(searchValue);
  let jsonPlaceholder = await getPlaceholderData()

  resultsContainer.innerHTML = renderGithubAccount(account)
  jsonPlaceholder.map(item => {
    resultsContainer.innerHTML += renderPlaceholder(item)
  })
});
