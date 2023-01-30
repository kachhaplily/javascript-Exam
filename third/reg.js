const Submitdata=(event)=>{
    let frm = document.forms["from"];
    console.log(frm)
    let myregData = {}
    for (let i = 0; i < frm.length; i++) {
        switch (frm.elements[i].type) {
            case 'checkbox': myregData[frm.elements[i].name] = frm.elements[i].value=true;
            
                break;
            default:
                myregData[frm.elements[i].name] = frm.elements[i].value;
                break;
        }
    }
console.log(myregData);
fetchapifun("register",myregData)
event.preventDefault();
}

fetchapifun=(apitype,data)=>{
    fetch(`https://real-pear-fly-kilt.cyclic.app/accounts/${apitype}`,{
        method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
    }}).then(y=>y.json()).then(y=> 
        localStorage.setItem("usertoken",y.jwtToken))
}

Login=(event)=>{
    let loginfrm=document.forms["logindata"];
    let myLoginData = {}
    for (const iterator of loginfrm) {
        myLoginData[iterator.name]=iterator.value;
        
    }
    fetchapifun("authenticate",myLoginData)
    console.log(myLoginData);
    window.location.assign("home.html")
    event.preventDefault();
}

create=()=>{
    document.getElementById("regpage").style.display="block";
    document.getElementById("loginpage").style.display="none"
}
loginoage=()=>{
    document.getElementById("regpage").style.display="none";
    document.getElementById("loginpage").style.display="block"
}



