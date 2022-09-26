function loopInRange(a,b){
    var output="";
    var awal=a;
    while (awal<b) {
        output+=`${awal}, `;
        awal++;
    }
    output+=awal;
    console.log(output);
}

loopInRange(4,8);