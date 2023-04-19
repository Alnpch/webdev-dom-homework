let addForm = document.getElementById("add-form");
const nameInputElement = document.getElementById("name-input" );
const commentInputElement = document.getElementById("comment-input" );
import {initEventListeners}from "./dom.js";
import{data}from "./dom.js";
const commentsElement = document.getElementById("comments" );
import{renderComments}from "./render.js";



export function getCommentsLoading(comments) {
    
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
}
//2get
export function getComments(comments) {
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
export function postComments() {
    return   fetch("https://webdev-hw-api.vercel.app/api/v1/alina-pitskhelauri/comments", {
        method: "POST",
        body: JSON.stringify({ 
        date: data () ,
        name: nameInputElement,
        text: commentInputElement,
        likesCounter: 0,
        
        })
    })
}
   