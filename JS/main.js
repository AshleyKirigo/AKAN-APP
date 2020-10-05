function getAkanName () {
  let yearofBirth = document.getElementById("year-input").value
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value)
  let genders = document.getElementsByName("gender");

  // function for gender
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }
  
  let myGenderValue = getGender();
  console.log(myGenderValue);

  //function for validation
  function monthValidator () {
    if (monthOfBirth < 1 or monthOfBirth > 12){
      return false
    } else {
      return true;
    }
  }
  function dayValidator () {
    if (monthOfBirth===2 , number(yearOfBirth)%4===0) {
      if (dayOfBirth > 28 or dayOfBirth < 1) {
        return false;
      }else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      }else if (monthOfBirth === 2 && dayofBirth < 1) {
        return false;
      }else {
        return true;
      }
    }else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    }else {
      return true;
    }
  }
  
  //variables
  let monthV = monthValidator();
  let dayV = dayValidator();

  //Formula to get the day of birth
  let dayOFWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7;

  //Arrays for AKAN names
  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];
  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" 
  ];
   
  //Condition statements
  if (myGenderValue == "male" && monthV && dayV){
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "Born on Sunday: Akan name is" + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "Born on Monday: Akan name is" + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
     case 3:
        document.getElementById('result').textContent = "Born on Tuesday: Akan name is" + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "Born on Wednesday: Akan name is" + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "Born on Thursday: Akan name is" + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
      case 6
        document.getElementById('result').textContent = "Born on Friday: Akan name is" + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "Born on Saturday: Akan name is" + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
    }
  }else if(myGenderValue == "female" && monthV && dayV) {
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "Born on Sunday: Akan name is" + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
     case 2:
        document.getElementById('result').textContent = "Born on Monday: Akan name is" + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
     case 3:
        document.getElementById('result').textContent = "Born on Tuesday: Akan name is" + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
     case 4:
        document.getElementById('result').textContent = "Born on Wednesday: Akan name is" + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
     case 5:
        document.getElementById('result').textContent = "Born on Thursady: Akan name is" + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
     case 6:
        document.getElementById('result').textContent = "Born on Friday: Akan name is" + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
     case 7:
        document.getElementById('result').textContent = "Born on Saturday: Akan name is" +femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Your Akan name:";
        return false;
        break;
    }
  }else{
    alert("Invalid month or day");
  }
}