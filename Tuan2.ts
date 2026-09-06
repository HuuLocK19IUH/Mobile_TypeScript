// Bai 1
function getHelloAsync(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello Async");
      }, 2000);
    });
  }
  
  // Test
  getHelloAsync().then((result) => {
    console.log(result);
  });

// Bai 2
function getNumber(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(10), 1000);
    });
  }
  
  // Test
  getNumber().then(console.log);

// Bai 3
function getError(): Promise<void> {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Something went wrong"), 1000);
    });
  }
  
  // Test
  getError().catch(console.error);

// Bai 4
function randomPromise(): Promise<number> {
    return new Promise((resolve, reject) => {
      const num = Math.random();
      if (num > 0.5) resolve(num);
      else reject("Number too small");
    });
  }
  
  randomPromise()
    .then((num) => console.log("Success:", num))
    .catch((err) => console.log("Error:", err));

// Bai 5
function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Task done"), time);
    });
  }
  
  // Test
  simulateTask(1500).then(console.log);

// Bai 6
Promise.all([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500),
  ]).then((results) => {
    console.log(results);
  });

// Bai 7
Promise.race([
    simulateTask(1000),
    simulateTask(2000),
    simulateTask(1500),
  ]).then((result) => {
    console.log(result);
  });

// Bai 8
Promise.resolve(2)
  .then((num) => num * num) // square
  .then((num) => num * 2)   // double
  .then((num) => num + 5)   // add 5
  .then(console.log);

// Bai 9
function filterEvenNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(arr.filter((num) => num % 2 === 0));
      }, 1000);
    });
  }
  
  // Test
  filterEvenNumbers([1, 2, 3, 4, 5, 6]).then(console.log);

// Bai 10
function testFinally(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Success"), 1000);
    });
  }
  
  testFinally()
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log("Done"));

//Bai 11
async function getHelloAsync2(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Hello Async";
  }
  
  // Test
  getHelloAsync2().then(console.log);

// Bai 12
async function runTask() {
    const result = await simulateTask(2000);
    console.log(result);
  }
  
  runTask();

// Bai 13
async function handleError() {
    try {
      const result = await getError(); // từ bài 3
      console.log(result);
    } catch (err) {
      console.log("Caught error:", err);
    }
  }
  
  handleError();

// Bai 14
async function multiplyByThree(num: number): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return num * 3;
  }
  
  // Test
  multiplyByThree(5).then(console.log);

// Bai 15
async function runSequential() {
    const a = await multiplyByThree(2);
    const b = await multiplyByThree(3);
    const c = await multiplyByThree(4);
    console.log(a, b, c);
  }
  
  runSequential();

// Bai 16
async function runParallel() {
    const results = await Promise.all([
      multiplyByThree(2),
      multiplyByThree(3),
      multiplyByThree(4),
    ]);
    console.log(results);
  }
  
  runParallel();

// Bai 17
async function runForAwait() {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];
  
    for await (const value of promises) {
      console.log(value);
    }
  }
  
  runForAwait();

// Bai 18
type User1 = { id: number; name: string };

async function fetchUser(id: number): Promise<User1> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { id, name: `User ${id}` };
}

// Test
fetchUser(1).then(console.log);

// Bai 19
async function fetchUsers(ids: number[]): Promise<User1[]> {
    const results: User1[] = [];
  
    for (const id of ids) {
      const user = await fetchUser(id);
      results.push(user);
    }
  
    return results;
  }
  
  // Test
  fetchUsers([1, 2, 3]).then(console.log);

// Bai 20
function fetchWithTimeout(id: number): Promise<User1> {
    const apiCall = fetchUser(id);
  
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject("Timeout!"), 2000)
    );
  
    return Promise.race([apiCall, timeout]);
  }
  
  // Test
  fetchWithTimeout(1)
    .then(console.log)
    .catch(console.error);

// Bai 21
async function fetchTodo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  }
  
  fetchTodo();

// Bai 22
async function fetchMultipleTodos() {
    const urls = [1, 2, 3].map(
      (id) => `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  
    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    const results = await Promise.all(promises);
  
    console.log(results);
  }
  
  fetchMultipleTodos();

// Bai 23
async function fetchCompletedTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
  
    const completed = todos.filter((todo: any) => todo.completed);
    console.log(completed);
  }
  
  fetchCompletedTodos();

// Bai 24
async function postData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello",
        body: "Async POST",
        userId: 1,
      }),
    });
  
    const data = await res.json();
    console.log(data);
  }
  
  postData();

// Bai 25
function downloadFile(): Promise<void> {
    return new Promise((resolve) => {
      console.log("Downloading...");
      setTimeout(() => {
        console.log("Download complete");
        resolve();
      }, 3000);
    });
  }
  
  // Test
  downloadFile();

// Bai 26
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function waitFiveSeconds() {
    console.log("Waiting...");
    await delay(5000);
    console.log("Done after 5 seconds");
  }
  
  waitFiveSeconds();

// Bai 27
async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let i = 0; i <= retries; i++) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Request failed");
        return await res.json();
      } catch (err) {
        if (i === retries) throw err;
        console.log(`Retry ${i + 1}...`);
      }
    }
  }
  
  // Test
  fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
    .then(console.log)
    .catch(console.error);

// Bai 28
async function batchProcess() {
    const tasks = Array.from({ length: 5 }, (_, i) =>
      simulateTask(1000 + i * 500)
    );
  
    const results = await Promise.all(tasks);
    console.log(results);
  }
  
  batchProcess();

// Bai 29
async function queueProcess() {
    const tasks = [1000, 1500, 2000];
  
    for (const time of tasks) {
      const result = await simulateTask(time);
      console.log(result);
    }
  }
  
  queueProcess();

// Bai 30
async function handleMultiple() {
    const urls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/invalid-url",
    ];
  
    const promises = urls.map((url) =>
      fetch(url).then((res) => {
        if (!res.ok) throw new Error("Error");
        return res.json();
      })
    );
  
    const results = await Promise.allSettled(promises);
  
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Success:", result.value);
      } else {
        console.log("Failed:", result.reason);
      }
    });
  }
  
  handleMultiple();