
/*
Simon Tsui
SoftDev pd7
K21 -- Onions, Bell Peppers, and Celery, Oh My!
2019-04-30
*/

var csv_file = "school-demographic.csv"

d3.csv(csv_file).then(function (data) {

    var minoritySchools = data.map(function (school) {
        var totalOfMinority = parseInt(school['hispanic_num']) + parseInt(school['black_num']) + parseInt(school['asian_num']);
        return [school['Name'], school['schoolyear'], totalOfMinority, school['total_enrollment']];
    });


    console.log(minoritySchools);


    var minority = document.getElementById("minority");
    minority.innerHTML = 'There was ${minoritySchools}'
});
