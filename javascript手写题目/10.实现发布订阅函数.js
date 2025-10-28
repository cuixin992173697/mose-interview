class EventEmitter {
  constructor() {
    this.events = {};
  }

  //  订阅
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // 取消订阅
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  // 订阅一次
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }

  // 发布
  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(...args));
  }
}

// 测试
const bus = new EventEmitter();

function handler(data) {
  console.log('收到消息:', data);
}

bus.on('message', handler); // 发出事件
bus.emit('message', '你好，世界！'); // 输出: 收到消息: 你好，世界！

bus.off('message', handler); // 取消订阅
bus.emit('message', '这条不会被处理'); // 无输出

bus.once('onceEvent', msg => console.log('只触发一次:', msg));
bus.emit('onceEvent', '第一次'); // 输出: 只触发一次: 第一次
bus.emit('onceEvent', '第二次'); // 无输出
