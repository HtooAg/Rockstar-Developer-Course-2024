const users = [
	{ id: 1, name: "Alice", age: 21 },
	{ id: 2, name: "Bob", age: 14 },
	{ id: 3, name: "Chris", age: 19 },
	{ id: 4, name: "Dave", age: 35 },
];

const result = [...users, { id: 5, name: "John", age: 32 }];
console.log(result);

console.log(result.map((user) => user.name));
console.log(result.filter((user) => user.age >= 19));
console.log(result.filter((user) => user.age >= 19).map((user) => user.name));
