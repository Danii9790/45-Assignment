let number =[1,2,3,4,5,6,7,8,9];

for(let oneNumber of number){
    let Ordinal_Ending:string;
    if(oneNumber===1){
Ordinal_Ending="st"
    }
    else if(oneNumber===2){
        Ordinal_Ending="nd"
    }
    else if(oneNumber===3){
        Ordinal_Ending="rd"
    }
    else{Ordinal_Ending="th"}
console.log(`${oneNumber}${Ordinal_Ending}`)
}