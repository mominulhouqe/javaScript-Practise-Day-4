/* 
//23-5--> Use add and multiplication to calculate wood requirements
 
    fixed: per item wood requirements
    1. chair --> 3 cft;
    2 . table --> 10 cft;
    3. bed --->  50 cft
    vary : quantitty
*/

function woodCount(chair, table, bed){

    const ChairCounting = 3;
    const tableCounting = 10;
    const bedCounting = 50;

    const totalChair = chair * ChairCounting;
    const totalTable = table * tableCounting;
    const totalBed = bed * bedCounting;

    console.log("Chair = ",totalChair ,"," ,"Table = " ,totalTable ,"," ,"Bed", totalBed);

    const totalWood = totalChair + totalTable  + totalBed;
    
    return totalWood;

}

const myWood = woodCount(2, 3, 5);
console.log("Total Wood is = " ,myWood);
