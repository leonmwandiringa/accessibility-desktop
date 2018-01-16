const $ = require('jquery');
const fs = require("fs");
let filen = "storage/contacts.txt";
let ini = 0;

let appendStuf = (name, surname)=>{
   
    let roww = '<tr><td>'+ ini + '</td><td>'+ name +'</td><td>' 
    + surname +'</td></tr>';
    $("#tablecont").append(roww);

};

$("#appendstf").click((e)=>{
    ini++;
    let name = $("input[name='name']").val();
    let surname = $("input[name='surname']").val();
    if(name == "" || surname == ""){
        alert("enter all fields");
        e.preventDefault();

    }else{
        fs.appendFile(filen , ini +','+ name +','+ surname +'\r\n')
        appendStuf(name, surname);
    }
    
});
function loadAndDisplayContacts() {  
   
    //Check if file exists
    if(fs.existsSync(filen)) {
       let data = fs.readFileSync(filen, 'utf8').split('\n');
       
       data.forEach((contact, index) => {
          let [ name, email ] = contact.split(',');
        //   addEntry
          appendStuf(name, email);
       })
    
    } else {
       console.log("File Doesn\'t Exist. Creating new file.");
       fs.writeFile(filename, '', (err) => {
          if(err)
             console.log(err);
       })
    }
 }

 loadAndDisplayContacts();
 

