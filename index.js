
setInterval(() => {
    // Declare holiday dates
    let newyears = new Date("December 31, 2021, 23:59:59").getTime();
    let christmas = new Date("December 25, 2021, 00:00:00").getTime();
    let thankgiving = new Date('November 25, 2021, 00:00:00').getTime();
    let halloween = new Date("October 31, 2021, 00:00:00").getTime();
    let laborday = new Date('September 6, 2021, 00:00:00').getTime();
    let today = new Date().getTime();


    //Calculate time difference
    let newyearsTimeLeft = newyears - today
    let christmasTimeLeft = christmas - today;
    let thanksgivingTimeLeft = thankgiving - today;
    let halloweenTimeLeft = halloween - today;
    let labordayTimeLeft = laborday - today;

    // new years calculations
    let newYearsdays = Math.floor(newyearsTimeLeft / (1000 * 60 * 60 * 24));
    let newYearshours = Math.floor(
      (newyearsTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let newYearsminutes = Math.floor((newyearsTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let newYearsseconds = Math.floor((newyearsTimeLeft % (1000 * 60)) / 1000);


    // christmas calcs
    let christmasdays = Math.floor(christmasTimeLeft / (1000 * 60 * 60 * 24));
    let christmashours = Math.floor(
      (christmasTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let christmasminutes = Math.floor(
      (christmasTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    let christmasseconds = Math.floor((christmasTimeLeft % (1000 * 60)) / 1000);

    // thanksgiving calcs
    let thanksgivingdays = Math.floor(thanksgivingTimeLeft / (1000 * 60 * 60 * 24));
    let thanksgivinghours = Math.floor(
      (thanksgivingTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let thanksgivingminutes = Math.floor(
      (thanksgivingTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    let thanksgivingseconds = Math.floor((thanksgivingTimeLeft % (1000 * 60)) / 1000);

    //halloween calcs
    let halloweendays = Math.floor(halloweenTimeLeft / (1000 * 60 * 60 * 24));
    let halloweenhours = Math.floor(
      (halloweenTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let halloweenminutes = Math.floor(
      (halloweenTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    let halloweenseconds = Math.floor((halloweenTimeLeft % (1000 * 60)) / 1000);

    //laborday calcs
    let labordays = Math.floor(labordayTimeLeft / (1000 * 60 * 60 * 24));
    let laborhours = Math.floor(
      (labordayTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let laborminutes = Math.floor(
      (labordayTimeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    let laborseconds = Math.floor((labordayTimeLeft % (1000 * 60)) / 1000);

    //grab html elements
    newyearsresults = document.getElementById("newyears");
    christmasresults = document.getElementById("christmas");
    thanksgivingresults = document.getElementById("thanksgiving");
    halloweenresults = document.getElementById("halloween");
    labordayresults = document.getElementById("laborday");



    //append data into html elements
    newyearsresults.innerHTML = `${newYearsdays} days, ${newYearshours} hours, ${newYearsminutes} minutes, ${newYearsseconds} seconds left until New Years!`;  

    christmasresults.innerHTML = `${christmasdays} days, ${christmashours} hours, ${christmasminutes} minutes, ${christmasseconds} seconds left until Christmas!`;  

    thanksgivingresults.innerHTML = `${thanksgivingdays} days, ${thanksgivinghours} hours, ${thanksgivingminutes} minutes, ${thanksgivingseconds} seconds left until Thanksgiving!`;  

    halloweenresults.innerHTML = `${halloweendays} days, ${halloweenhours} hours, ${halloweenminutes} minutes, ${halloweenseconds} seconds left until Halloween!`;  

    labordayresults.innerHTML = `${labordays} days, ${laborhours} hours, ${laborminutes} minutes, ${laborseconds} seconds left until Labor Day!`;  
}, 1000);



console.log(christmasDay);