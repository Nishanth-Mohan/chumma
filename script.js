//a) Get all the countries from Asia continent /region using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    var res = output.filter((element)=>element.region === "Asia");
    var result = res.map((element)=>(element.name.common));
    console.log("Countries from Asia :"+ result);
}

//b) Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    var res = output.filter((element)=>element.population<200000);
    var result = res.map((element)=>element.name.common);
    console.log("countries with a population of less than 2 lakhs: " +result);
}

// c) Print the following details name, capital, flag, using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    output.forEach(element => {
        console.log("country name:"+ element.name.common,", capital:"+ element.capital,", flag :"+ element.flag);
    });
}

// d) Print the total population of countries using reduce function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    var res = output.map((ele)=>ele.population);
    var result = res.reduce((acc,ele)=>acc+ele);
    console.log("Total population of all countries: " + result);
}

// e) Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var output = JSON.parse(request.response);
    var res = output.filter((ele)=>ele.currencies && ele.currencies.USD);
    res.forEach((ele)=>{console.log("country that uses US dollars as currency :" +ele.name.common)});

}