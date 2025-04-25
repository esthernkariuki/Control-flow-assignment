
const days=["Mon","Tue","Fri","Sat"];
const getDays=(days)=>{
    for(i=0;i<days.length;i++){
        switch (days[i]) {
            case "Mon":
                console.log(`Your delivery is Groceries`);
                break;
            case "Tue":
                console.log(`Your delivery is Electronics`);
                break;
            case "Fri":
                console.log(`Your delivery is Pens`);
                break;
            default:
                console.log(`unknown delivery`);
        }
    }
};

getDays(days);


//Given an array of book statuses, write a program that checks each status and prints "Ready to lend" if the status is "available", and "Checked out" otherwise.
const bookStatuses = ["available", "borrowed", "available", "borrowed"];
const getBookStatus=(bookStatuses)=>{
    bookStatuses.forEach((status) => {
        switch (status) {
            case "available":
                console.log(`Ready to lend`);
                break;
            case "borrowed":
                console.log(`Checked out`);
                break;
            default:
                console.log(`Unknown status`);
                break;
        }
    });
};
getBookStatus(bookStatuses);


//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
const customerAges = [15, 22, 18, 12, 30];
const checkCustomerAges=(customerAges)=>{
    customerAges.forEach((age) => {
        if (age >= 18) {
            console.log(`Your age is ${age} then you are an Adult`);
        } else {
            console.log(`Your age is ${age} then you are a Minor`);
        }
    });
};
checkCustomerAges(customerAges);






//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
const countdown=(lives)=>{
    let attempts = lives;
    while (attempts > 0) {
        console.log(`You have ${attempts} lives left`);
        attempts--;
    }
    console.log(`Game Over`);
};
countdown(5);

//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
const userFeedback = ["Great service!", " satisfied", "Will recommend", "Not happy with the product"];
const printFeedback=(userFeedback)=>{
    let i = 0;
    do {
        console.log(userFeedback[i]);
        i++;
    } while (i < userFeedback.length);
};
printFeedback(userFeedback);


//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
const userLoginStatuses = ["logged in", "logged out", "logged in", "logged out"];
const checkLoginStatus=(userLoginStatuses)=>{
    userLoginStatuses.forEach((status) => {
        switch (status) {
            case "logged in":
                console.log(`Welcome back!`);
                break;
            default:
                console.log(`Please log in`);
                break;
        }
    });
};
checkLoginStatus(userLoginStatuses);

//Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high"
const ticketPriorities = ["low", "medium", "high", "low", "extremely low"];
const processTicketPriorities=(ticketPriorities)=>{
    ticketPriorities.forEach((priority) => {
        switch (priority) {
            case "low":
                console.log(`Address within 3 days`);
                break;
            case "medium":
                console.log(`Address within 1 day`);
                break;
            case "high":
                console.log(`Address immediately`);
                break;
            default:
                console.log(`Unknown priority`);
                break;
        }
    });
};
processTicketPriorities(ticketPriorities);

//Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
const quizCountdown=(seconds)=>{
    let countdown = seconds;
    while (countdown > 0) {
        console.log(`Time left: ${countdown} seconds`);
        countdown--;
    }
    console.log(`Time's up!`);
};
quizCountdown(10);