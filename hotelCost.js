function hotelCost(days)
{
    if (days <=10)
    {
        bill=days*100;
    }
    else if(days<=20)
    {
        firstTen=10*100;
        remain=days-10;
        remainBill=remain*80;
        bill=firstTen+remainBill;
    }
    else
    {
        firstTen=10*100;
        secondTen=10*80;
        remain=days-20;
        remainBill=remain*50;
        bill=firstTen+secondTen+remainBill;
        
    }
    return bill;
}


days=25;

if (days>=0)
{
    cost=hotelCost(days);
    console.log(cost);
}
else{
    console.log("please give correct value");
}