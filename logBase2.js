const logBase2 =  (n, base) => {
    let res = base;
    let cont = 1;
    if(n == 1){
        console.log('o logaritmo de '+ n + ' na base '+ base +' é '+0);
    }
    else{
        while(res != n && res < n){
            res = res * base;
            cont++;
        }
        if(res > n){
            console.log('Não há logaritmo para ' +n+ ' na base '+base);
            console.log('O logaritmo maior e mais próximo de '+n+' é '+cont);
            
            
        }
        else{
        console.log("o logaritmo de "+ n + " na base "+ base +" é "+ cont);
        }
    }
}
    
logBase2(256,2);