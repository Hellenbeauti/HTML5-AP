
var t =[]
N = prompt('Nhap so luong phan tu N');
for(i=0; i<N; i++){
    t.push(prompt());
}


for(i=0;i<N-1;i++)
        for( j=i;j<N;j++){
            if(t[i]<t[j]){
                   temp=t[i];
                t[i]=t[j];
                t[j]=temp;
            }
        }

for(i=0; i<t.length; ++i){
    alert(t[i]);
}

let tong=parseInt(0);
for(i=0; i<t.length; ++i){
    tong +=parseInt(t[i]);

}
alert('Tong mang la ' + tong);



