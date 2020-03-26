// const say = (str: string) => {
//   console.log(str);
// };
// say("Hello");

// Lookup Types

type Person = {
  name: string;
  age: number;
  location: string;
};

type age = Person["age"]; // inferenced as number
type name = Person["name"]; // inferenced as string
type nameOrAge = Person["age"] | Person["name"]; // inferenced as number | string
// type nameOrAge = Person["age" | "name"];

// keyof operator (inddex type query operator)
// `keyof T` is the union of known, public property names of T

type PersonKey = keyof Person; // inferenced as "name" | "age" | "location"

const personProp: PersonKey = "location";

//keyof operator examples
function get<T, K extends keyof T>(obj: T, propertyName: K): T[K] {
  return obj[propertyName];
}

let x: { foo: number; bar: string } = { foo: 10, bar: "hello" };

let foo = get(x, "foo");

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(n => o[n]);
}

let y: { foo: number; bar: string } = { foo: 20, bar: "good" };

let foobar = pluck(x, ["foo", "bar"]);

// Mapped Types

// booleanified
// type BooleanifiedPerson = {
//   name: boolean;
//   age: boolean;
//   location: boolean;
// };

type BooleanifiedPerson = {
  [P in "name" | "age" | "location"]: boolean;
};

type BooleanifiedPerson2 = {
  [P in keyof Person]: boolean;
};

type Person2 = {
  [P in "name" | "age" | "location"]: Person[P];
};

type Booleanify<T> = {
  [P in keyof T]: boolean;
};

type BooleanifiedPerson3 = Booleanify<Person>;
