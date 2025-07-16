function pyramid(n){
    for(let i=1;i<=n;i++){
        const space = ' '.repeat(n-i);
        const star = "* ".repeat(i);

        console.log(space + star);
    }

}

pyramid(5);