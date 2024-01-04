# How i React 2024

- Intro
- Schedule
- Short opening movie - https://mail.google.com/mail/u/0/#search/SAsher%40johnbryce.co.il/FMfcgzGwJcXrqFRtjfldBhjTjbsWNTdH
- Repo: https://github.com/galamo/How_I_React_2024

#### Api's
- [Products](https://dummyjson.com/docs/products/)
- [Countries](https://restcountries.com/v3.1/all)

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

#### Exercises 


### EX-1
- Create your own IdCard Component
based on your information 
- `lastName`: A string
- `firstName`: A string
- `gender`: A string, 'male' or 'female'
- `height`: A number
- `birth`: A date
- `picture`: A string

```js
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

```
### EX-1 Typescript
1. Create the following interface: `ICountry`
2. country will have: name, flag, total population
3. create instance for israel country and print it.

### Keys in react


### EX-2 
1. Toggle Countries Rendering to show unmount aborting request
2. Toggle Products 

### EX-3 
- Create an Image component
- image should get a URL string
- in case the URL is missing - present the `defaultImage`
- `defaultImage`: https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg
- advanced - check if the image is not loaded as well and show the default image
### EX-4
- style css module
- create your own style module by adding the following file to Header component

### EX-5
- Implement Toggle Products Page
- Create `ProductPage` component
- fetch the products from the following api - https://dummyjson.com/products
- Create `Product` Component
- Present all the Products in the `ProductsPage`

### EX-6
- based on your Products result
- Memoize the Avg price
- Present it as product statistics


### EX-7
- Create A button in login page: "click here to register"
- Clicking on the button will move the client ot the registration page
- Remove the register from the router


### EX-8
- implement the login component
- please see the POST Login operation


### React Router DOM

`npm install react-router-dom@6`



- useRef
    1. current reference mutation
    2. reference to DOM
- React router DOM
- useState Vs useRef
- useContext , useReducer
- axios interceptor 
- nested rotes



### EX - 9
- Create Countries Page
- The page will fetch all countries data from the following api: `https://restcountries.com/v3.1/all`
- Create `Country` Component 
- Present all the Countries



### EX Create Login form - 10


## Subjects
1. code splitting
2. useReducer, useContext
3. async operations



### EX - 11 Code splitting
1. Create New Route - `Countries Reports`
2. use Code splitting approach to lazy load this component
3. Add new Component Name: `PieChartCountriesPopulation` ( based on recharts)
4. Using the countries data fetching - show every region & population on the chart
5. optimize your component load with React.memo


### EX - 12 useContext & useReducer
1. Create AppDate component which present the current date when reports loaded
2. support toggle functionality - between local and UTC 
3. use Switch component `https://v4.mui.com/components/switches/`


### Subjects:
1. Redux toolkit 
2. Testing

### EX - 13
Redux toolkit
1. migrate the is utc state to the setting reducer
2. create new reducer for reports and store the numbers/precentage state inside  
3. implement redirect to countries reports after loginSuccess 
4. move register async operation to work with redux ( async function OR thunk)



### EX - 14 
1. Write a unit test for region population calculation function - `calcPopulationPerRegion`
- test correct flow
- false positive
- null / string calculation 


### EX - 15
1. Write a unit-ui test for setting the user name flow in redux
2. assert that the user is rendered to the header 



