// function fn() {
// 	return function () {
// 		console.log("Done");
// 	};
// }

// const result = fn();
// result();

// console.log(fn()());

const fn = () => () => {
	console.log("Done");
};
fn()();
