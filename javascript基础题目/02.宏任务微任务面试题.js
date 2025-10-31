// console.log("script start");
// let promise1 = new Promise(function (resolve) {
// 	console.log("promise1");
// 	resolve("resolve!"); // 注意这里
// 	console.log("promise1 end");
// }).then(function (res) {
// 	console.log("promise2");
// 	console.log(res); // 注意这里
// });
// setTimeout(function () {
// 	console.log("settimeout");
// });
// console.log("script end");


console.log("start");

setTimeout(() => {
	console.log("1");

	new Promise((resolve) => {
		console.log("2");

		resolve();
	}).then(() => {
		console.log("3");
	});

	new Promise((ressolve, reject) => {
		console.log("middle");
		reject();
	})
		.then(() => {
			console.log(4);  // 注意这里！！
		})
		.catch(() => {
			console.log("5");
			setTimeout(() => {
				console.log("6");
			});
		});
});

console.log("end");

// start
// end
// 1
// 2
// middle
// 3
// 5
// 6