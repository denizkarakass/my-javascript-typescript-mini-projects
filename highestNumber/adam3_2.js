const nums = 2103106258;
console.log(nums);

function higest5(num) {

    let num1 = num.toString();
    let num2 = parseInt(num1.length)
    let bigNum = 0 , sayac = 0, startSplice = 0

    for(let i=0; i<num2 - 4; i++){
       let num3 = nums.toString()
       let num4 = num3.slice(i,i+1)
       let num5 = parseInt(num4)
       sayac += 1


       if(num5>bigNum){
        bigNum = num5
         startSplice = sayac
       }

    }

    let numsString = nums.toString();

    let dizi = numsString.slice(startSplice - 1,startSplice +4)


    console.log(dizi)


}

higest5(nums);





//node adam3_2


