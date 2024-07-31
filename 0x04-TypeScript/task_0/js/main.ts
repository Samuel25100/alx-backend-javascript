interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Samuel',
  lastName: 'Gebreselassie',
  age: 26,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Nahom',
  lastName: 'Zeleke',
  age: 25,
  location: 'Addis Ababa',
};

const studentsList: Array<Student> = [student1, student2];
const table = document.createElement('table');
const body = document.createElement('tbody');

studentsList.forEach((row: Student): void => {
  const line = document.createElement('tr');

  const firstName = document.createElement('td');
  firstName.textContent = row.firstName;

  const lastName = document.createElement('td');
  lastName.textContent = row.lastName;

  const age = document.createElement('td');
  age.textContent = row.age;

  const location = document.createElement('td');
  location.textContent = row.location;

  line.appendChild(firstName);
  line.appendChild(lastName);
  line.appendChild(age);
  line.appendChild(location);
  body.appendChild(line);
});

table.appendChild(body);
document.body.appendChild(table);
