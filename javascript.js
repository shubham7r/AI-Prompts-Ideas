

function copyText(element){
    const textToCopy = element.parentElement.querySelector("p").innerText;
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function request(){
    alert("This feature is not available yet..");
}

function search(element) {
  var myDropdown = document.getElementById("searchOption");
  console.log(myDropdown.style.display);
    if (myDropdown.style.display=='none') {
      myDropdown.style.display='block';
      element.setAttribute("aria-pressed", "true");
    }
    else{
      element.setAttribute("aria-pressed", "false");
      myDropdown.style.display='none';
    }
  
  }

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("searchOption");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    
  }
}