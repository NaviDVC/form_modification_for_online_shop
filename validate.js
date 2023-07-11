const form = document.getElementById("ordering");
const userName = form.elements["name"];
const city = form.elements["city"];
const post = form.elements["post"];
const count = form.elements["number"];
const comment = form.elements["comment"];

const NAME_ERROR = "Please enter your name";
const RADIO_ERROR = "Please choose your gender";
const CITY__ERROR = "Please choose your city";
const POST_ERROR = "Please enter post office number";
const COUNT_ERROR = "Please enter a valid quantity"

function showError(el, message) {
  const errorPlaceHolder = el.parentNode.querySelector("small");

  errorPlaceHolder.textContent = message;

  el.classList.add("error");
}

function showSuccess(el) {
  const errorPlaceHolder = el.parentNode.querySelector("small");

  errorPlaceHolder.textContent = "";

  el.classList.remove("error");
}

function validateName(el, message) {

    if (el.value !== "") {
  
      showSuccess(el);
      return true;
  
    } else {
  
      showError(el, message);
      return false;
  
    }
  
  }

  function validateCity(el, message) {

    if (el.value !== "") {
  
      showSuccess(el);
      return true;
    } else {
  
      showError(el, message);
      return false;
    }
  
  }

  function validatePost(el, message) {

    if (el.value !== "") {
  
      showSuccess(el);
      return true;
    } else {
  
      showError(el, message);
      return false;
    }
  
  }

  function validateCount (el, message) {
    const countInt = parseInt(el.value);
    if (countInt > 0) {
        showSuccess(el);
        return true;
    } else {
        showError(el, message);
        return false;
    }
  }



  form.addEventListener("submit", (event) => {

    event.preventDefault();
  
    
  
    const isNameValid = validateName(userName, NAME_ERROR);
  
    const isCityChecked = validateCity(city, CITY__ERROR);
    
    const isPostChecked = validatePost(post, POST_ERROR);

    const isCountValid = validateCount(count, COUNT_ERROR);
  
    let nameValue = userName.value;
    let cityValue = city.value;
    let postValue = post.value;
    let countValue = count.value;
    let commentValue = comment.value;

    if (isNameValid && isCityChecked && isPostChecked && isCountValid && commentValue !== ''){
        if(confirm(`Hello, ${nameValue}!\n
          Please, check your order information:\n
          City: ${cityValue}!\n
          Post office number: ${postValue}!\n
          Quantity: ${countValue}!\n
          Comment: ${commentValue}`)){
            location.reload();
          }
    } else if (isNameValid && isCityChecked && isPostChecked && isCountValid) {

      if (confirm(`Hello, ${nameValue}!\n
      Please, check your order information:\n
      You want to buy ${window.name}\n
      City: ${cityValue}!\n
      Post office number: ${postValue}!\n
      Quantity: ${countValue}!`)) {
        location.reload();
      }
   
      
  }
  });