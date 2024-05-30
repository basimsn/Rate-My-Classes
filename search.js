let suggestions = [
  "107",
  "109",
  "111",
  "141",
  "151",
  "211",
  "251",
  "261",
  "294",
  "301",
  "341",
  "342",
  "351",
  "361",
  "362",
  "377",
  "394",
  "401",
  "407",
  "411",
  "412",
  "418",
  "422",
  "425",
  "427",
  "440",
  "442",
  "450",
  "454",
  "461",
  "466",
  "474",
  "477",
  "478",
  "479",
  "480",
  "483",
  "491",
  "494",
  "499", 
];

// getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user press any key and release
input.onkeyup = (e)=>{
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if(userData){
      emptyArray = suggestions.filter((data)=>{
          //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
      });
      emptyArray = emptyArray.map((data)=>{
          // passing return data inside li tag
          return data = '<li>'+ data +'</li>';
      });
      searchInput.classList.add("active"); //show autocomplete box
      showSuggestions(emptyArray);
      let allList = resultBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          allList[i].setAttribute("onclick", "select(this)");
      }
  }else{
      searchInput.classList.remove("active"); //hide autocomplete box
  }
}

function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = inputBox.value;
      listData = '<li>'+ userValue +'</li>';
  }else{
      listData = list.join('');
  }
  resultBox.innerHTML = listData;
}

// Modified select() function
function select(element) {
  let selectData = element.textContent;
  input.value = selectData;
  searchInput.classList.remove("active");
  
  // Redirect to the course page with the selected class number
  window.location.href = "course.html?class=" + selectData;
  // updateFrame(selectData);
  // console.log(selectData);
  
  const parsedCourseNumber = parseInt(selectData, 10);
  // console.log(parsedCourseNumber);
  // updateFrame(element.value);

}