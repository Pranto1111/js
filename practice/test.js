function factorial(n)
{
    // result=1;
    // for(let i=n; i>=1; i--){
    //     result=result*i;
    // }
    // return result;
    i=n;
    fact=1;
    while(i>0)
    {
        fact=fact*i;
        i--;
    }
    return fact;
}

let r=factorial(5);
console.log(r);