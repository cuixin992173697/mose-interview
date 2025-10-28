function sleep(time) {
  return new Promise(resolve => {
    console.log('开始等待');
    setTimeout(resolve, time);
  });
}

sleep(2000).then(() => {
  console.log('等待结束');
});
