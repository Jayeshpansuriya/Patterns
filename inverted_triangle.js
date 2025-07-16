function invertedTriangle(n){
    for(let i=1;i<=n;i++){
        console.log("*".repeat(n+1-i));
    }
}

invertedTriangle(5);