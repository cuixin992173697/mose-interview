// 1.继承
interface A {
  x: number;
}

interface B extends A {
  y: number;
}

const obj: B = { x: 1, y: 2 };

type A1 = { x: number };
type B1= A1 & { y: number };

const obj1: B1 = { x: 1, y: 2 };

// 2.联合类型
type C = 'a' | 'b' | 'c'; // interface 做不到

// 3.声明合并
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = { name: 'Alice', age: 18 }; // interface 合并成功

// type Person = { name: string };
// type Person = { age: number }; // ❌ 会报错，type 不允许重复定义

// 4.实现类
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  name = 'dog';
  speak() {
    console.log('wang');
  }
}

// type 也可以实现，只要是对象类型
type CatType = {
  name: string,
  speak(): void
};

class Cat implements CatType {
  name = 'cat';
  speak() {
    console.log('miao');
  }
}

// 使用建议

// 1.对象类型或类实现 → 优先 interface

// 便于声明合并、扩展、类实现

// 2.复杂类型、联合类型、交叉类型、原始类型别名 → 使用 type

// type StringOrNumber = string | number

// 3.两者可以互换的场景

// 简单对象类型可以用 interface 或 type 都行

// 如果项目规范统一某一种，保持一致性即可
