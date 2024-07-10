var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");

var bookmarks = []
if(localStorage.getItem("bookmark") !=null){
  bookmarks=JSON.parse(localStorage.getItem("bookmark"))}

function bookmarksList() {
 var product={
    name:siteName.value,
    Url:siteURL.value,
 }
 bookmarks.push(product)
localStorage.getItem("bookmark",JSON.stringify(bookmarks))
 displayBookmark()
  }



function displayBookmark() {
 var temp=""
 for(var i=0;i<bookmarks.length;i++){
    temp += `
    <tr>
      <td>`+i+`</td>
      <td>`+bookmarks[i].name+`</td>              
      <td>
        <button class="btn btn-visit" data-index="`+bookmarks[i].Url+`">
          <i class="fa-solid fa-eye pe-2"></i>Visit
        </button>
      </td>
      <td>
        <button onclick="deleteb(`+i+`)" class="btn btn-delete pe-2" >
          <i class="fa-solid fa-trash-can"></i>
          Delete
        </button>
      </td>
  </tr>
  `;
  document.getElementById("tableContent").innerHTML=temp
 }
  }

function deleteb(index){
bookmarks.splice(index,1)
displayBookmark()

}

