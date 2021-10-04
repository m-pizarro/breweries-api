# Breweries Api Node.js

## Requirements

Data source: https://api.openbrewerydb.org/breweries

Challenge requirements: Using the above tech stack, write a REST API with a single /breweries endpoint that returns a list of breweries in the United States. The /breweries endpoint of your API should be tested with Jest and secured using Passport. In addition to fetching this data directly from the data source above, this endpoint should function as an ETL data pipeline where you process the data in the following ways:


Step 1) Remove any attributes that are null from the data
Step 2) Convert the keys of the objects in the response from snake case to camel case (e.g. “postal_code” -> “postalCode”)
Step 3) Group the breweries together by state and then sort them by created_at so the most recent ones come first.
Step 4) Add an attribute to each brewery called region that adds the correct region to each brewery based on this map: https://www.worldatlas.com/articles/the-regions-of-the-united-states.html (hint - take a look at the GPS coordinates for the United States and then use the longitude & latitude attributes for each brewery to compute this). If the brewery does not have a longitude & latitude then filter it out.


Note that each step above should be considered a separate step in the ETL pipeline and must run independently. This system should be modular and allow for future developers to easily add additional steps for processing. Please test to make sure that the data is fetchable via your /breweries endpoint and include instructions for how to do this in a README.md as part of the documentation.


## Tech

Tech Stack to use: Node + Express + TypeScript + Passport + Jest


## Environment

We use `node` version `16.10.0`

``` if nvm is used
nvm install 16.10.0
```

```
nvm use 16.10.0
```

The first time, you will need to run

```
npm install
```

Then just start the server with

```
npm run start
```

# Tests

```
npm run test
```

# How it works

- The API dispatches requests with well structured **routes**.
- Routes are using **controllers** for API implementations.
- Routes are protected with **JWT authentification middelwares** :


# Getting started

## Step1 : Login a user
Send a POST request to `http://localhost:3000/user/login` 
with the following payload ** :
```json
{
	"username": "admin",
	"password": "123456"
}
```
You should get a JWT token in the response :
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lMiIsImlhdCI6MTU1MDU4MTA4NH0.WN5D-BFLypnuklvO3VFQ5ucDjBT68R2Yc-gj8AlkRAs"
}
```

> **Note  - In this example API we don't make data persistence. 
> We have configured a mock user for the given username and password (admin/123456)!!

## Step2 : Get Breweries
Send a GET request to `http://localhost:3000/breweries`
with the Header ** :
```
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lMiIsImlhdCI6MTU1MDU4MTA4NH0.WN5D-BFLypnuklvO3VFQ5ucDjBT68R2Yc-gj8AlkRAs"
```
You should get :
```json
{
    "Colorado": [
        {
            "id": 9180,
            "obdbId": "boulder-beer-co-boulder",
            "name": "Boulder Beer Co",
            "breweryType": "regional",
            "street": "2880 Wilderness Pl",
            "city": "Boulder",
            "state": "Colorado",
            "postalCode": "80301-5401",
            "country": "United States",
            "longitude": "-105.2480158",
            "latitude": "40.026439",
            "updatedAt": "2018-08-24T00:00:00.000Z",
            "createdAt": "2018-07-24T00:00:00.000Z"
        }
    ]
```