function ajax(){
    console.log("hi")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var Jitems = response.items;
            var output = "";
            
            for(var i=0;i<Jitems.length;i++){
                
                output += "<tr>"
                output += "<td>"+Jitems[i].SerialNo+"<td>";
                output += "<td>"+Jitems[i].Name+"<td>";
                output += "<td>"+Jitems[i].Quantity+"<td>";
                output += "<td>"+Jitems[i].Unit+"<td>";
                output += "<td>"+Jitems[i].Department+"<td>";
                output += "<td>"+Jitems[i].Note+"<td>";
                // output += "<td>"+Jitems[i].Name+"<td>";

            }

            document.getElementById("employee_table").innerHTML=output;
        }
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}