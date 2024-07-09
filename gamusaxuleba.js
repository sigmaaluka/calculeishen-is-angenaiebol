function asaxva(tag){
    let insideTag = tag.innerHTML;
    console.log(insideTag);
    
   if(document.getElementById("answer").innerHTML =="0"){
    
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").innerHTML += insideTag;}

    
   
   else{
    document.getElementById("answer").innerHTML +=insideTag;
   } 

}


