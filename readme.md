# How i React 2024

- Intro
- Schedule
- Short opening movie - https://mail.google.com/mail/u/0/#search/SAsher%40johnbryce.co.il/FMfcgzGwJcXrqFRtjfldBhjTjbsWNTdH
- Repo: https://github.com/galamo/How_I_React_2024

## Subjects

### Event Loop

- What is it ?
- How it works?
- run the following scrip

#### Ex-1

- what will be the output?

```javascript
async function getFromServer() {
  console.log(944);
  const result = await fetch.get("https://randomuser.me/api/");
  console.log(953);
}

async function getFromServer2() {
  console.log(955);
  const result = await fetch.get("https://randomuser.me/api/");
  console.log(933);
}

console.log(8888);
getFromServer2();
getFromServer();
console.log(1111);
```

- Copy the script to js file and execute with `node index.js`

### Vite

- Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: dev server & rollup bundler

`npm create vite@latest`
typescript & react

- Running the project
- Commands

### Hooks

- useState
- useEffect
- useRef
- useMemo
- useCallback
- useDefferedValue
- useTransition

- useContext
- useReducer

### Lazy loading

`npm install react-router-dom`

### Profiler

### Source map explorer
