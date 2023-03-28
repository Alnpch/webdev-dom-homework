const buttonElement = document.getElementById("add-button");
const commentsElement = document.getElementById("comments" ); 
const nameInputElement = document.getElementById("name-input" );
const commentInputElement = document.getElementById("comment-input" );
const likes = document.querySelectorAll('.likes'); 


const initEventListeners = () => {
const likeElements = document.querySelectorAll('.like-button'); 
const deleteButtonElements = document.querySelectorAll('.delete-button');

for (const likeElement of likeElements) {
  
  likeElement.addEventListener('click', ({target: t}) => {
    likeElement.classList.toggle('-active-like');
    const index = [...document.querySelectorAll('.like-button')].indexOf(t); 
    const count = document.querySelectorAll('.likes-counter')[index]; 
    likeElement.classList.contains('-active-like') ? count.innerHTML++ : count.innerHTML--;
  })
}
for (const deleteButtonElement of deleteButtonElements) {
  deleteButtonElement.addEventListener('click', () => {
    const index = deleteButtonElement.dataset.index;
    comments.splice(index, 1);
    renderComments();
    
  })
}

}

const comments = [{
name: 'Глеб Фокин',
date:'12.02.22 12:18',
text: 'Это будет первый комментарий на этой странице',
likesCounter: 3,
},
{name: 'Варвара Н.',
date:'13.02.22 19:22',
text:'Мне нравится как оформлена эта страница! ❤',
likesCounter:75, 
},
];
const renderComments = () =>{
const commentsHtml = comments.map((comment, index) => {
return ` <li class="comment">
      <div class="comment-header">
        <div>${comment.name}</div>
        <div>${comment.date}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text">
         ${comment.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes">
          <span class="likes-counter">${comment.likesCounter}</span>
          <button class="like-button"></button>
        <button data-index='${index}' class="delete-button">Удалить</button>
        </div>
      </div>
    </li>`;
}).join(''); 
commentsElement.innerHTML = commentsHtml;
}

let myDate = new Date(); 
const months = ["01", "02", "03", "04", "05", "06",
"07", "08", "09", "10", "11", "12"];
let year = String(myDate.getFullYear()).slice(2);
let day = myDate.getDate();
if (day < 10) {
  day = '0' + day;
}
let hour = myDate.getHours();
if (hour < 10) {
  hour = '0' + hour;
}
let minute = myDate.getMinutes();
if (minute < 10) {
  minute = '0' + minute;
}
let newDate = day  + "." + months[myDate.getMonth()] + "." 
+ year + " " + hour + ":" +  minute;


buttonElement.addEventListener("click", () => {
  nameInputElement.classList.remove('error');

  if (nameInputElement.value === '' ) {
    nameInputElement.classList.add('error');
    return;
  }

  commentInputElement.classList.remove('error');

  if (commentInputElement.value === '' ) {
    commentInputElement.classList.add('error');
    return;
  }
  comments.push({
name: nameInputElement.value,
date: newDate,
text: commentInputElement.value,
likesCounter: 0,
  });
  
 renderComments();
 initEventListeners();
    
    nameInputElement.value = "" ;
    commentInputElement.value = "" ; 
 


});
 renderComments();
initEventListeners();
