// 红绿灯打印，红灯3s一次，黄灯2s一次，绿灯1s一次，要求按顺序打印
function red() {
  console.log('red');
}
function yellow() {
  console.log('yellow');
}
function green() {
  console.log('green');
}

function light(fn, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      fn();
      resolve();
    }, time);
  });
}

async function trafficLight() {
  while (true) {
    await light(red, 3000);
    await light(yellow, 2000);
    await light(green, 1000);
  }
}

trafficLight();
