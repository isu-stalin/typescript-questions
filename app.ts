interface User {
    name: string;
    age: number;
    email?: string;
  }
  
  const user: User = {
    name: "Ali",
    age: 30,
    email: "ali@example.com",
  };
  
///////////////////////////////////////////////////////////////////////////////////////////////////

  function add(a: number, b: number): number {
    return a + b;
  }
  console.log(add(5, 10));
  
///////////////////////////////////////////////////////////////////////////////////////////////////

  enum Days {
    Monday = "Dushanba",
    Tuesday = "Seshanba",
    Wednesday = "Chorshanba",
    Thursday = "Payshanba",
    Friday = "Juma",
    Saturday = "Shanba",
    Sunday = "Yakshanba",
  }
  
  console.log(Days.Monday);
  

  /////////////// o'zgaruvchi status nomni olmadi ////////////////

  let statusVar: "start" | "stop"; 
  statusVar = "start";
  statusVar = "stop";
  
//////////////////////////////////////////////////////////////////////////////////////////////////
  
  interface Dog { bark: boolean; }
  interface Cat { meow: boolean; }
  type Pet = Dog & Cat;
  
  const myPet: Pet = { bark: true, meow: false, };
  
///////////////////////////////////////////////////////////////////////////////////////////////////

  function handleValue(value: string | number): string | number {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else {
      return value * value;
    }
  }
  
  console.log(handleValue("hello"));
  console.log(handleValue(5));
  
///////////////////////////////////////////////////////////////////////////////////////////////////

  let userInfo: [number, string] = [25, "Laylo"];
  console.log(userInfo[0]);
  console.log(userInfo[1]); 