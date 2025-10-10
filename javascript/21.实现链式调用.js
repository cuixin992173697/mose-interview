// js实现链式调用·
class Chain {
  constructor(value) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }
}

const a = new Chain(10);
const result = a.add(5).subtract(3).multiply(4).value;
console.log(result); // 输出 48
