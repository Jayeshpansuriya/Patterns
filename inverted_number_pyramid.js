function invertedpyramid(n){
       
    for(let i=4;i>=1;i--){
            let row="";
            for(let j=1;j<=i;j++){
                row += j+" ";

            }
            console.log(row);

    }
}

invertedpyramid(4);