let form = document
  .querySelector("#formSubmit")
  .addEventListener("submit", mySubmit);


let fd = [];

function foods(val) {

  if (val) {
    let x = fd.findIndex((el) => {
      return el == val;
    });

    console.log(x)
    if (x!=-1) {
      fd.splice(x, 1);
    } 
    else {
      fd.push(val);
    }
  }
  console.log(fd)
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

  console.log(param);
}
