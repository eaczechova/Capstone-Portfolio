// MODAL FUNCTIONALITY

const cardCollection = document.querySelectorAll('.card');
const modalsCollection = document.querySelectorAll('.modal');

cardCollection.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        if(e.target.classList.contains('open')) {
            for(let i = 0 ; i < modalsCollection.length; i++) {
                if(i === index) {
                    modalsCollection[i].style.display = 'flex';
                } 
            } 
    }});  
});

  for(let i = 0 ; i < modalsCollection.length; i++) {
    modalsCollection[i].addEventListener('click', function(e) {
      let index = e.target.getAttribute('data-index');
      if(e.target.nodeName === 'SPAN') {
        modalsCollection[i].style.display = 'none';
      } else if (e.target.classList.contains('arrow-left')) {
        e.stopPropagation();
        modalsCollection[i].style.display = 'none';
        modalsCollection[i-1].style.display = 'flex';
      } else if (e.target.classList.contains('arrow-right')) {
        e.stopPropagation();
        modalsCollection[i].style.display = 'none';
        modalsCollection[i+1].style.display = 'flex';
      }
    });
  }

// FORM VALIDATION

const nameInput = document.getElementById('exampleInputName');
const mailInput = document.getElementById('exampleInputEmail1');
const subjectInput = document.getElementById('exampleInputSubject');
const messageInput = document.getElementById('exampleFormControlTextarea3');
const submitButton = document.querySelector('.submit-btn');

// Function on change

function isStringValid(userInput){
 return  /^[a-zA-Z]+$/.test(userInput);
}

function isEmailAddressValid (email) {
  return  /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

nameInput.addEventListener('change', function(e){
  let userInputText = e.target.value;
  let check = isStringValid(userInputText);
  if(!check) {
    const toolTip = document.createElement('span');
    toolTip.classList.add('tooltip');
    toolTip.innerHTML = 'Please enter only letters!';
    nameInput.parentElement.prepend(toolTip); 
  } else if (check && nameInput.parentElement.firstChild.classList.contains('tooltip') ) {
    nameInput.parentElement.removeChild(nameInput.parentElement.firstChild);
  }
});

mailInput.addEventListener('change', function(e){
  let userInputEmail = e.target.value;
  let check = isEmailAddressValid(userInputEmail);
  if(!check) {
    const toolTip = document.createElement('span');
    toolTip.classList.add('tooltip');
    toolTip.innerHTML = 'Please enter valid email address!';
    mailInput.parentElement.prepend(toolTip); 
  } else if (check && mailInput.parentElement.firstChild.classList.contains('tooltip') ) {
    mailInput.parentElement.removeChild(mailInput.parentElement.firstChild);
  }
});

// Function on submit 

submitButton.addEventListener('click', function() {

  const formElements = document.querySelectorAll('.form-element');

  formElements.forEach(function(el) {

    if(el.lastChild.value.length < 1 && !el.firstChild.classList.contains('tooltip')) {
      const toolTip = document.createElement('span');
      toolTip.classList.add('tooltip');
      toolTip.innerHTML = 'Please fill in the field!';
      el.prepend(toolTip);
    } else if (el.lastChild.value.length >=1 && el.firstChild.classList.contains('tooltip')) {
      el.removeChild(el.firstChild);
    }
  });
});