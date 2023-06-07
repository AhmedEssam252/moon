// // tags
// const ul = document.querySelector(".ULtags"),
//  ul2 = document.querySelector(".ULtags2"),
//  ul3 = document.querySelector(".ULtags3"),

// input = document.querySelector(".InputText"),
// input2 = document.querySelector(".InputText2"),
// input3 = document.querySelector(".InputText3"),

// tagNumb = document.querySelector(".details span");

// let maxTags = 10,
// tags = [],
// tags2 = [],
// tags3 = [];


// countTags();

// function countTags(){
//     input.focus();
//     tagNumb.innerText = maxTags - tags.length;
// }

// function createTag(){
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     tags.slice().reverse().forEach(tag =>{
//         let liTag = `<li><input class="to" name="to[]" value='${tag}'>
//         <div class="bgclose"  onclick="remove(this, '${tag}')">
//             <img class="close" src="${RemoveTag}" alt="close" width="10" height="10">
//         </div></li>`;
//         ul.insertAdjacentHTML("afterbegin", liTag);
//     });
//     ul2.querySelectorAll("li").forEach(li => li.remove());
//     tags2.slice().reverse().forEach(tag =>{
//         let liTag = `<li><input class="cc" name="cc[]" value='${tag}'>
//         <div class="bgclose"  onclick="remove(this, '${tag}')">
//             <img class="close" src="${RemoveTag}" alt="close" width="10" height="10">
//         </div></li>`;
//         ul2.insertAdjacentHTML("afterbegin", liTag);
//     });
//     ul3.querySelectorAll("li").forEach(li => li.remove());
//     tags3.slice().reverse().forEach(tag =>{
//         let liTag = `<li><input class="bcc" name="bcc[]" value='${tag}'>
//         <div class="bgclose"  onclick="remove(this, '${tag}')">
//             <img class="close" src="${RemoveTag}" alt="close" width="10" height="10">
//         </div></li>`;
//         ul3.insertAdjacentHTML("afterbegin", liTag);
//     });
//     // countTags();
// }

// function remove(element, tag){
//     let index  = tags.indexOf(tag);
//     tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
//     element.parentElement.remove();
//     countTags();
// }

// function addTag(e){
//         let addTag = document.querySelector('.addTag');
//         addTag.onclick = ()=>{
//             let tag = e.target.value.replace(/\s+/g, ' ');
//             if(tag.length > 1 && !tags.includes(tag)){
//                 if(tags.length < 10){
//                     tag.split(',').forEach(tag => {
//                         if(e.target.classList[0] == 'InputText'){
//                             tags.push(tag);
//                         }if(e.target.classList[0] == 'InputText2'){
//                             tags2.push(tag);

//                         }if(e.target.classList[0] == 'InputText3'){
//                             tags3.push(tag);
//                         }
//                         createTag();
//                     });
//                 }
//             }
//             e.target.value = "";
//         }
// }
// input.addEventListener("keyup", addTag);
// input2.addEventListener("keyup", addTag);
// input3.addEventListener("keyup", addTag);



// const removeBtn = document.querySelector(".details .removeTag");
// removeBtn.addEventListener("click", () =>{
//     tags.length = 0;
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     countTags();
// });
