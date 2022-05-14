function budgetCalculator(watch,mobile,laptop)
{
    cost=(watch*100)+(mobile*150)+(laptop*500);
    return cost;
}

watch=2;
mobile=3;
laptop=1;

if(watch>=0 && mobile>=0 && laptop>=0)
{
    total=budgetCalculator(watch,mobile,laptop);
    console.log(total);
}