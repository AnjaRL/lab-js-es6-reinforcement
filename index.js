// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
let usersArray = require("./data");

const getFirstNames = (arr) => {
  const userFirstNames = []; //  scope is in the fuction locally
  for (let user of arr) {
    const { firstName } = user; // creating new array
    userFirstNames.push(firstName); // pushing into the array
  }
  console.log(userFirstNames);
  return userFirstNames;
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = (arr) => {
  const userFullNames = []; //  scope is in the fuction locally
  for (let user of arr) {
    const { firstName, lastName } = user; // creating new array
    userFullNames.push(`${firstName} ${lastName}`); // pushing into the array
  }
  console.log(userFullNames);

  return userFullNames;
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = (arr) => {
  const userCredit = []; //  scope is in the fuction locally
  for (let user of arr) {
    const { firstName, lastName, balance } = user;

    const userDetails = {
      firstName,
      lastName,
      balance,
    };
    //console.log(userDetails)
    userCredit.push(userDetails);
    console.log(userCredit);
  }

  // console.log( userCredit)

  return userCredit;
};

getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = (users) => {
  let femaleUsers = getFullNames(
    users.filter((user) => {
      return user.gender === "female";
    })
  );
  console.log(femaleUsers);
  //    return users.gender==='female');
  let maleUsers = getFullNames(
    users.filter((user) => {
      return user.gender === "male";
    })
  );
  console.log(maleUsers);
  return { femaleUsers, maleUsers };
};

genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = (data) => {
  console.log(data);

  const countByGender = {
    Female: data.femaleUsers.length,
    Male: data.maleUsers.length,
  };

  // issues with  understanding this syntax and why this isnt working
  console.log(countByGender);

  return countByGender;
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = (users) => {
  users.forEach((user) => {
    //     I want to convert the balance into number : i remove dollars and commas,
    let personBal = user.balance.replace("$", "").replace(",", "");
    // when I have my balance in number, I can compare it to 20 000
    if (personBal > 20000) {
      console.log(
        `Dear ${user.firstName}, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.`
      );
    }
  });
};
promo20(usersArray);
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = (users) => {
  for (let user of users) {
    user.isActive = true;
    console.log(users);
  }
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
