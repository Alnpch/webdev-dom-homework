let addForm = document.getElementById("add-form");
const nameInputElement = document.getElementById("name-input" );
const commentInputElement = document.getElementById("comment-input" );
import {initEventListeners}from "./dom.js";
import{data}from "./dom.js";
const commentsElement = document.getElementById("comments" );
import{renderComments}from "./render.js";
let comments = [];
export const fetchAndRenderComments = () => {
    let commentsLoading = document.createElement('div');
  commentsLoading.id = 'commentsLoading';
  commentsLoading.innerHTML = '<p>Комментарии загружается...</p>';
  commentsElement.parentNode.replaceChild(commentsLoading, commentsElement);
   return fetch("https://webdev-hw-api.vercel.app/api/v1/alina-pitskhelauri/comments", {
      method: "GET",
  }).then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((responseData) => {
    let appComments = responseData.comments.map((comment) => {
    return {
      name: comment.author.name,
      date: data (comment.date),
      text: comment.text,
      likesCounter: 0,
      
    }
    
      })
      comments = appComments;
      renderComments();
      initEventListeners();
      console.log(comments);
    });
    
  }).then(() => {
    return commentsLoading.parentNode.replaceChild(commentsElement, commentsLoading);
    
  }).catch((error) =>{
    
  alert('Кажется, у вас сломался интернет, попробуйте позже');
  console.warn(error);
  }); 
  };

 export const fetchAndRenderCommentsTwo = () => {
  
    return fetch("https://webdev-hw-api.vercel.app/api/v1/alina-pitskhelauri/comments", {
       method: "GET",
   }).then((response) => {
     const jsonPromise = response.json();
     
     jsonPromise.then((responseData) => {
     let appComments = responseData.comments.map((comment) => {
     return {
       name: comment.author.name,
       date: data (comment.date) ,
       text: comment.text,
       likesCounter: 0,
       
     }
     
       })
       comments = appComments;
       renderComments();
       initEventListeners();
       console.log(comments);
     });
     
   })
   }

 export  const postAndRenderComments = () => {
    let addFormLoading = document.createElement('div');
    addFormLoading.id = 'addFormLoading';
    addFormLoading.innerHTML = '<p>Комментарий загружается...</p>';
    addForm.parentNode.replaceChild(addFormLoading, addForm);

 return   fetch("https://webdev-hw-api.vercel.app/api/v1/alina-pitskhelauri/comments", {
       method: "POST",
       body: JSON.stringify({ 
       date: data () ,
       name: nameInputElement.value,
       text: commentInputElement.value,
       likesCounter: 0,
       
       })
   }).then((response) => {
     if (response.status === 201) {
       nameInputElement.value = "" ;
     commentInputElement.value = "" ;
       return response.json();
     }
     if (response.status === 500) {
       throw new Error('Сервер сломался, попробуй позже');
     } if (response.status === 400) {
       alert("Имя и комментарий должны быть не короче 3 символов");
     
     }
   }).then(() => {
    return fetchAndRenderCommentsTwo();
   
   }).then(() => {
     return addFormLoading.parentNode.replaceChild(addForm, addFormLoading);
   
   }).catch((error) =>{
     addFormLoading.parentNode.replaceChild(addForm, addFormLoading);
   alert('Кажется, у вас сломался интернет, попробуйте позже');
   console.warn(error);
   
   });
   } 
   