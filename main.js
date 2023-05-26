let conteiner = document.querySelector('.conteiner')

for(let i = 0;i < 100;i++){
 
  let b = document.createElement('p')
  let arr = Math.floor(Math.random() * 100)
 if(arr < 20 ){
  b.textContent = arr
 }
conteiner.append(b)
}