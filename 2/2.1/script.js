const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('p')

const errlog = (text) => {throw new Error(text)}

button.addEventListener('click', (e) => {
  e.preventDefault()
  
  const inputValue = input.value
  
  try {
    if(inputValue === '') errlog('Пусто!')
    if(isNaN(inputValue)) errlog('Не число!')
    if(inputValue < 5) errlog('Меньше 5!')
    if(inputValue > 10) errlog('Больше 10!')
    else result.innerHTML = ''
  } catch (err) {
    result.innerHTML = err
}})