# Bubble chart

## Description
This app presents different types of data inside a bubble chart/map.
The bubble chart supports all kinds of data as long it only contains a name and a amount property. 
Users can click on a pre-selected category and display method. The chart will update accordingly.

### Concept design
![Land](https://github.com/SqueezyDough/functional-programming/blob/master/wiki/land.png)
Types are displayed in a bubble chart per country. The bigger the bubble, the more items the country contains.

![Geo](https://github.com/SqueezyDough/functional-programming/blob/master/wiki/geo.png)
There are different display methods to plot the types. Here you can see the bubbles plotted on a map

### App
![Site](https://github.com/SqueezyDough/functional-programming/blob/master/wiki/site.png)
Here you can see the app as it is today! It displays all clothing per country.

## Data
I request data from the [National museum of world cultures](http://collectie.wereldculturen.nl/#/query/5de27531-1d92-4ca6-af75-f3d88e5a0f73). I only need to count the amount of types in a specific country.

* Place
* Long/lat
* Country
* Type

## Install
### Clone repository
```
git clone https://github.com/SqueezyDough/functional-programming.git

cd functional-programming
```

### Install packages
```
npm i
```

### Run the app
``` 
npm run dev
```
