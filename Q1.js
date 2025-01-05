/* 
1.
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
‘systemAnalytics’.
*/

// 第1-2題共用資料
const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    customerID: "123",
    note: "note1",
    profession: "engineer",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    customerID: "456",
    note: "note2",
    profession: "student",
  },
  {
    firstName: "Natasha",
    lastName: "Romanoff",
    customerID: "789",
    note: "note3",
    profession: "systemAnalytics",
  },
  {
    firstName: "Bruce",
    lastName: "Banner",
    customerID: "101",
    note: "note4",
    profession: "freelancer",
  },
  {
    firstName: "Thor",
    lastName: "Odinson",
    customerID: "202",
    note: "note5",
    profession: "productOwner",
  },
];

/*
 Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this
 array and print it out.
*/
function sortUserName(users) {
  users.sort((a, b) => {
    const nameA = a.firstName + a.lastName + a.customerID;
    const nameB = b.firstName + b.lastName + b.customerID;
    return nameA.localeCompare(nameB);
  });

  console.log(users);
}

sortUserName(users);

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/
function sortByType(users) {
  const professionOrder = [
    "systemAnalytics",
    "engineer",
    "productOwner",
    "freelancer",
    "student",
  ];

  users.sort((a, b) => {
    return (
      professionOrder.indexOf(a.profession) -
      professionOrder.indexOf(b.profession)
    );
  });

  console.log(users);
}

// 調用函數
sortByType(users);
