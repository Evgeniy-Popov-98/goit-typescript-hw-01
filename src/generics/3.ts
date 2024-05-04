type FirstType = { name: string };

type SecondType = { age: number };

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge<FirstType, SecondType>({ name: "Maks" }, { age: 27 });
