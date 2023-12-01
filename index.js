let form = document
  .querySelector("#formSubmit")
  .addEventListener("submit", mySubmit);
let data =JSON.parse(localStorage.getItem("reg")) || []

let fd = [];

function foods(val) {

  if (val) { 
    let x = fd.findIndex((el) => {
      return el == val;
    });

    // console.log(x)
    if (x!=-1) {
      fd.splice(x, 1);
    } 
    else {
      fd.push(val);
    }
  }
  // console.log(fd)
}

function mySubmit(e) {
  e.preventDefault();


  let f_name = document.querySelector("#firstName").value;
  let l_name = document.querySelector("#lastName").value;
  let add = document.querySelector("#address").value;
  let pin = document.querySelector("#pincode").value;

  const selectedGender = document.querySelector(
    `input[name="gridRadios"]:checked`
  );

  let gen = (document.querySelector("#gender").value = `${
    selectedGender ? selectedGender.value : null
  }`);

  let s = document.querySelector("#sel").value;
  if (s == "select country") {
    s = null;
  } else {
    s = document.querySelector("#sel").value;
  }

  let state = document.querySelector("#state").value;


  const param = {
    f_name,
    l_name,
    add,
    fd,
    pin,
    gen,
    s,
    state,
  };

  data.push(param)

  localStorage.setItem("reg",JSON.stringify(data))
  alert("Details Added ")
  window.location.reload()
  // console.log(data)
//   console.log(param);
}

// let tableData = JSON.parse(localStorage.getItem("reg")) || []
// console.log(tableData,tableData.length)

display(data)

function display(tableData){

  document.querySelector("#list").innerHTML = ""

  tableData?.forEach((el,i)=>{



    let tab = document.createElement("tr")

    let td0 = document.createElement("td")
    td0.textContent = i+1

    let td1 = document.createElement("td")
    td1.setAttribute("class","t1")
    td1.innerText = el.f_name;
    let td2 = document.createElement("td")
    td2.innerText = el.l_name;

    let td3 = document.createElement("td")
    td3.innerText = el.gen;

    let td4 = document.createElement("td")
    fdAll(el.fd);
    function fdAll(fdArray) {
      fdArray.forEach((item) => {
        let fdContent = document.createElement("p");
        fdContent.innerText = item;
        td4.appendChild(fdContent);
      });
    }



    let td5 = document.createElement("td")
    td5.innerText = el.pin;

    let td6 = document.createElement("td")
    td6.innerText = el.s;

    let td7 = document.createElement("td")
    td7.innerText = el.state;

    let td8 = document.createElement("td")
    td8.innerText = el.add;

tab.append(td0,td1,td2,td3,td4,td5,td6,td7,td8)
document.querySelector("#list").append(tab)

    
  });

}


