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


  // async function async1() {
  //   console.log('async1 start');
  //   await async2();
  //   console.log('async1 end');   // await 之后 → 微任务
  // }

  // async function async2() {
  //   console.log('async2');
  // }

  // console.log('script start');

  // setTimeout(() => {
  //   console.log('setTimeout');   // 宏任务
  // }, 0);

  // async1();

  // new Promise((resolve) => {
  //   console.log('promise');
  //   resolve();
  // }).then(() => {
  //   console.log('then');          // 微任务
  // });

  // console.log('script end');


	// script start
	// async1 start
	// async2
	// promise
	// script end
	// async1 end
	// then
	// setTimeout





console.log("start");

setTimeout(() => {
	console.log("1");

	new Promise((resolve) => {
		console.log("2");

		resolve();
	}).then(() => {
		console.log("3");
	});

	new Promise((resolve, reject) => {
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