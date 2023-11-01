var ho=['Nguyen', 'Tran'];
var dem=['Van', 'Thi'];
var ten=['A','B','C','D','E'];
var std=[];


function generateName (){
    return ho[Math.floor(Math.random()*2)] + " " + 
    dem[Math.floor(Math.random()*2)] + " " + 
    ten[Math.floor(Math.random()*5)] 
}

for(i=0; i<20; ++i){
    let name=generateName();
    std.push(
        {
            'ten': name,
            'tuoi' : Math.floor(Math.random()*35)+20,
            'email' : name + '@gmail.com',
            'dia chi': 'Ha Noi',
            'sdt': '012394343'
        }
    )
}



document.addEventListener('DOMContentLoaded',function(){
    let data=`
    <tr>
        <th>STT</th>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>Dia Chi</th>
        <th>Email</th>
        <th>Sdt</th>
    </tr>
    `


    for(i=0; i<20; ++i){
       data+=`
        <tr>
            <td>${i+1}</td>
            <td>${std[i]['ten']}</td>
            <td>${std[i]['tuoi']}</td>
            <td>${std[i]['dia chi']}</td>
            <td>${std[i]['email']}</td>
            <td>${std[i]['sdt']}</td>

        </tr>
        `
    }
    document.getElementById('managerStd').innerHTML = data
   
})