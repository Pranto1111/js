function megaFriend(list)
{
    max='';
    for(var i=0; i<list.length ; i++)
    {
        if(max.length<list[i].length)
        {
            max=list[i];
        }

    }
    return max;
}


list=['rahim','khulna','chittagong','dhaka','rangamati-bandarban'];
max=megaFriend(list);
console.log(max);