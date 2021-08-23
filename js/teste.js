function reqListener () {
    let json = JSON.parse(this.responseText);
    console.log(json);
    document.getElementById("json").innerHTML = json[0].email;
  };
  
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "http://localhost:8080/api/user/find", true);
oReq.send();


