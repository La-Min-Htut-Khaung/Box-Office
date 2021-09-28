# Box Office React App

Project URL : https://la-min-htut-khaung.github.io/Box-Office/#/
API URL : https://www.tvmaze.com/api

## Description

This project is created to search Movie or Actor.

If you click Star Icon, App record the Starred ID and display in the starred page beside home button.


## Technical Details 

### React, React Router, useState, useEffect, useReducer ,useCallback, useMemo, customHook, Styled-components

## How to setup this project

### 1. Scaffolding the project and dependencies

npx create-react-app

### 2. Creating Pages in React

Install react-router-dom and setup App.js with BrowserRouter

git commit -m 'Added react-router'

### 3. Creating Navigation Bar & Page Components

Create Nav.js in components folder and connect with react router

git commit -m 'added Navbar and Created Page Component'

### 4. Multiple Layout Management

Create Home.js, MainPageLayout.js and Title.js

-> Home.js -> MainPageLayout.js {childern} -> <MainPageLayout>Tile.js</MainPageLayout>

git commit -m 'Added layout Management and Created Title'

### 5. Creating Search Bar

Create onSearch function to fetch API data

Click Button or Press Enter -> call the function - onSearch()

git commit -m 'created input and fetch results from https://www.tvmaze.com/api'

### 6. Displaying API results - Custom Render Function

Create misc folder and config.js (Asynchronous API Data)

git commit -m 'Displayed show results and small fetch refactor'

### 7. Adding Actors Search With Radio Buttons

Create onRadioChange() -> shows and actor Radio Button

git commit -m 'Added Search Option'

### 8. Creating Preview Cards for Show and Actors

Create show and actor folder && ShowGrid.js, ShowCard.js && ActorGrid.js, ActorCard.js

git commit -m 'Created preview card for api data'

### 9. Styled Component - An Alternative for styling

npm install styled-components

git commit -m 'installed styled components and created styles for search cards'

### 10. Creating Show Page - useEffect, useReducer, customHook and dynamic URLs

git commit -m 'Added show Page'

### 11. Styling Show Page

git commit -m 'Styled Show Page'

### 12. Displaying starred show

git commit -m 'Displaying starred show -> ShowGrid.js'

### 13. Add animation to Element

npm install react-fade-in

git commit -m 'Add Animation'

### 14. Styling Entire App

git commit -m 'Styling Entire App'

### 15. Component Optimization with Hook

useMemo, useCallback

git commit -m 'Optimization with hook'



**Note: This Project is React Course Assignment **


