# point-cloud-visualiser

point-cloud-visualiser is a react component which can be used to visualise point clouds (PCs).

## Installation

To start using point-cloud-visualiser install using npm:
```
npm i point-cloud-visualiser
```

## Parameters

The table below defines the parameters which can be passed to the component in order to define the PC.

Parameter           | Required?                                 | Description                                                                                                                       |
------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
points              | yes (unless pointFunction is defined)     | A 2D array containing all the points to be displayed. See example 1.                                                              |
pointFunction       | yes (unless points is defined)            | A function that takes the point number in the range [0,numberOfPoints-1] and returns the point position (x,y,z). See example 2.   |
numberOfPoints      | no (unless pointsFunction is defined)     | The total number of points you wish to define in the PC. Ignored in the case points is defined. See example 2.                    |
pointColour         | no                                        | The colour asigned to all points within the PC. Examples: "black", "#000000".                                                     |
pointsColour        | no                                        | An array with length equal to the number of points, defining the individual point colours. See example 3.                         |
pointColourFunction | no                                        | A function in the form of: `const pointsColour = function(x,y,z,i) { return 0x000000 }`. See example 4.                           |
cameraPosition      | no                                        | The position of the camera - which points to the origin (0,0,0). Example: [5,20,30].                                              |

## Examples

The following examples show how the parameters defined above can be put to use.

### Example 1 - using points parameter

```js
import {PointCloudVisualiser} from 'point-cloud-visualiser'
import './App.css';

function getPoints(numberOfPoints) {
  const points = Array(numberOfPoints)
  for(var i=0 ; i<numberOfPoints; i++) {
    const point = Array(3)
    if(i % 6 == 0) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = - 0.5
    } else if(i % 6 == 1) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = 2.5
        point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 2) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = 0.5
    } else if(i % 6 == 3) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = - 2.5
        point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 4) {
        point[0] =  6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 5) {
        point[0] = - 6.5
        point[1]= (Math.random() * 5) - 2.5
        point[2] = (Math.random() * 1) - 0.5
    }
    points[i]=point
  }
  return points
}

function App() {
  return (
    <>
    <PointCloudVisualiser points={getPoints(100000)} />
    </>
    
  );
}

export default App;
```

The result of the above can be seen below:
![Example1](/images/example1.png)

### Example 2 - using the points function parameter

Example 1 is a good approach where you're reading points in from a file. However when you want to define the points using a function use this approach. The outcome is identical to example 1.

```js
import {PointCloudVisualiser} from 'point-cloud-visualiser'
import './App.css';

function getPoint(i) {
    const point = Array(3)
    if(i % 6 == 0) {
      point[0] = (Math.random() * 13) - 6.5
      point[1] = (Math.random() * 5) - 2.5
      point[2] = - 0.5
    } else if(i % 6 == 1) {
      point[0] = (Math.random() * 13) - 6.5
      point[1] = 2.5
      point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 2) {
      point[0] = (Math.random() * 13) - 6.5
      point[1] = (Math.random() * 5) - 2.5
      point[2] = 0.5
    } else if(i % 6 == 3) {
      point[0] = (Math.random() * 13) - 6.5
      point[1] = - 2.5
      point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 4) {
      point[0] =  6.5
      point[1] = (Math.random() * 5) - 2.5
      point[2] = (Math.random() * 1) - 0.5
    } else if(i % 6 == 5) {
      point[0] = - 6.5
      point[1]= (Math.random() * 5) - 2.5
      point[2] = (Math.random() * 1) - 0.5
    }
    return point
}

function App() {
  return (
    <>
    <PointCloudVisualiser pointFunction={getPoint} numberOfPoints={100000} />
    </>
    
  );
}

export default App;
```

## Examples of how to style the point cloud

The following examples show how the parameters can be used to style the point cloud.

### Example 1 - changing the point colour

```js
import {PointCloudVisualiser} from 'point-cloud-visualiser'
import './App.css';

function getPoint(i) {
  const point = Array(3)
  
  var x = Math.random() -0.5
  var y = Math.random() -0.5
  var z = Math.random() -0.5

  point[0] = x * (1 / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)+ Math.pow(z,2))) * 5
  point[1] = y * (1 / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)+ Math.pow(z,2))) * 5
  point[2] = z * (1 / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)+ Math.pow(z,2))) * 5

  return point
}

function App() {
  return (
    <>
    <PointCloudVisualiser pointFunction={getPoint} numberOfPoints={100000} pointColour={'#33E3FF'} />
    </>
    
  );
}

export default App; />
```
The result of the above can be seen below:
![Example2](/images/example2.png)

### Example 3 - specifying each of the points' colour

```js
import {PointCloudVisualiser} from 'point-cloud-visualiser'
import './App.css';

function getPoints(numberOfPoints) {
  
  const points = Array(numberOfPoints)
  for(var i=0 ; i<numberOfPoints; i++) {
  
  const point = Array(3)
  
  var x = Math.random() -0.5
  var y = Math.random() -0.5
  var z = Math.random() -0.5

  point[0] = x * (1 / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)+ Math.pow(z,2))) * 5
  point[1] = y * (1 / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)+ Math.pow(z,2))) * 5
  point[2] = z * (1 / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)+ Math.pow(z,2))) * 5

  points[i]=point
  }
  return points
}

function getPointsColour(points) {
  const colours = Array(points.length)
  for(var i=0 ; i<points.length ; i++) {
    colours[i] = points[i][1] > 0 ? 0x0057b8 : 0xFFD700
  }
  return colours
}

function App() {

  const numberOfPoints = 100000
  const points = getPoints(numberOfPoints)
  const pointsColour = getPointsColour(points)

  return (
    <>
    <PointCloudVisualiser points={points} pointsColour={pointsColour}/>
    </>
    
  );
}

export default App;
```
The result of the above can be seen below:
![Example3](/images/example3.png)

### Example 4 - specifying each of the points' colour using a function

The below example allows you to specify the points' colour by passing a function. The function will be passed the points x,y,z location and the index of the point in the points array. a hex value must be returned in response.

```js
import { PointCloudVisualiser } from "point-cloud-visualiser"
import './App.css';

function getPoints(numberOfPoints) {
  const points = Array(numberOfPoints)
  for(var i=0 ; i<numberOfPoints; i++) {
    const point = Array(3)
    if(i > numberOfPoints - (numberOfPoints/2)) {
      point[0] = (Math.random() * 50) - 25
      point[1] = (Math.random() * 20) - 10
      point[2] = (Math.random() * 20) - 10
    } else if(i % 6 === 0) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = - 1.5
    } else if(i % 6 === 1) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = 2.5
        point[2] = (Math.random() * 3) - 1.5
    } else if(i % 6 === 2) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = 1.5
    } else if(i % 6 === 3) {
        point[0] = (Math.random() * 13) - 6.5
        point[1] = - 2.5
        point[2] = (Math.random() * 3) - 1.5
    } else if(i % 6 === 4) {
        point[0] =  6.5
        point[1] = (Math.random() * 5) - 2.5
        point[2] = (Math.random() * 3) - 1.5
    } else if(i % 6 === 5) {
        point[0] = - 6.5
        point[1]= (Math.random() * 5) - 2.5
        point[2] = (Math.random() * 3) - 1.5
    }
    points[i]=point
  }
  return points
}

function App() {

  const numberOfPoints = 180000
  const points = getPoints(numberOfPoints)
  const pointsColour = function(x,y,z,i) {
    if(i > numberOfPoints - (numberOfPoints/2)) {
      return 0x000000
    } else if(x === 6.5) {
      return 0xff0000
    } else if(x === - 6.5) {
      return 0xff0000
    } else if(y === 2.5) {
      return 0x00ff00
    } else if(y === -2.5) {
      return 0x00ff00
    } else if(z === 1.5) {
      return 0x0000ff
    } else if(z === -1.5) {
      return 0x0000ff
    }
    return 0x000000;
  }

  return (
    <>
    <PointCloudVisualiser points={points} pointColourFunction={pointsColour}></PointCloudVisualiser>
    </>
    
  );
}

export default App;
```
The result of the above can be seen below:
![Example4](/images/example4.png)
