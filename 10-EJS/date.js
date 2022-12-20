
exports.getDate=function(){

    var today=new Date();
    var options={
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
    };
    
    
    var currentDate=today.toLocaleDateString("en-US",options);

    return currentDate;
}

exports.getDay=function (){

    var today=new Date();
    var options={
    weekday:"long"
    };
    
    
    var currentDate=today.toLocaleDateString("en-US",options);

    return currentDate;
}