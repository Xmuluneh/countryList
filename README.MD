# React Country List Table 
## Project Description
 This is a React component that fetches and displays a list of countries with their names, regions,and area.
  
 * Fetch the data from an API using the `ApiHook` custom hook.

* On UI a table is displayed for the fetch data.
* The table is  sortable alphabetically by country name (ascending, descending). 
* The table is filter(s) using column filter with the following  parameters :
       <ol>
     <li>That are country's smaller than Lithuania by area.
      <li>That are country's  in “Oceania” region.
      </ol>

## Framework and Languages 
- React
- TypeScript
## Styling  
- BootStrap
  

## Installation And Setup  
This app is created using  create react app `county-list`  using **TypeScript**.

`$ npx create-react-app county-list --template typescript`

For installing the package run 

`$ npm install `

## EsLint and Pretties Setup
`$ npm install eslint-config-prettier --save-dev`

`$ npm install prettier --save-dev --save-exact`

To format globally the app ./

`$ npx prettier --write .`
