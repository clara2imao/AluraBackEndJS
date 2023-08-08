let a=[10,-1,0.5,-98 ,9 ,5 ,-1,13 ,0 ,0]
let b;
let i;

function substiuirVetor(){
    for(i=0; i<a.length;i=i+1 ){
        if (a[i]<=0){
            a[i]=1;
        }
        console.log(`X[${i}]=${a[i]}`);
    }
}
substiuirVetor();
 