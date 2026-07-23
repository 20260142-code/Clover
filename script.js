// Clover script


// ページ切替

function showPage(id){

  document.querySelectorAll(".page")
  .forEach(function(page){

    page.classList.remove("active");

  });


  document.getElementById(id)
  .classList.add("active");

}





// データ保存（仮）

let cloverData = {

  study:[],
  videos:[],
  friends:[],
  messages:[]

};





// プロフィール

function saveProfile(){

  let name =
  document.getElementById("nameInput").value;


  if(name){

    document.getElementById("userName")
    .textContent=name;

  }


}







// 学習記録

function saveStudy(){

  let name =
  document.getElementById("studyName").value;


  let minutes =
  document.getElementById("studyMinutes").value;


  if(!name || !minutes){

    return;

  }


  cloverData.study.push({

    name:name,
    minutes:Number(minutes)

  });


  document.getElementById("studyList")
  .innerHTML +=

  `
  <div class="item">

  ${name}

  ${minutes}分

  </div>
  `;


}







// 動画投稿

function postVideo(){

  let title =
  document.getElementById("videoTitle").value;


  let text =
  document.getElementById("videoDescription").value;


  if(!title){

    return;

  }


  cloverData.videos.push(title);


  document.getElementById("videoCount")
  .textContent =
  cloverData.videos.length;


  document.getElementById("videoList")
  .innerHTML +=

  `
  <div class="item">

  <h3>${title}</h3>

  <p>${text}</p>

  コメント欄

  </div>
  `;


}







// 友達申請

function requestFriend(){

  let mail =
  document.getElementById("friendEmail").value;


  if(!mail){

    return;

  }


  cloverData.friends.push(mail);


  document.getElementById("friendList")
  .innerHTML +=

  `
  <div class="item">

  ${mail}

  申請済み

  </div>
  `;


}







// Cloverth

function sendMessage(){

  let text =
  document.getElementById("chatInput").value;


  if(!text){

    return;

  }


  cloverData.messages.push(text);


  document.getElementById("chatMessages")
  .innerHTML +=

  `
  <div class="chat-message">

  ${text}

  </div>
  `;


  document.getElementById("chatInput")
  .value="";


}
