# point-cloud-visualiser

point-cloud-visualiser is a react component which can be used to visualise point clouds (PCs).

## Installation

To start using point-cloud-visualiser install using npm:
```
npm i point-cloud-visualiser
```

## Parameters

The table below defines the parameters which can be passed to the component in order to define the PC.

Parameter           | Required?                                 | Description                                                                                                       |
------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
points              | yes (unless pointFunction is defined)     | A 2D array containing all the points to be displayed                                                              |
pointFunction       | yes (unless points is defined)            | A function that takes the point number in the range [0,numberOfPoints-1] and returns the point position (x,y,z)   |
numberOfPoints      | no (unless pointsFunction is defined)     | The total number of points you wish to define in the PC. Ignored in the case points is defined                    |
pointColour         | no                                        | The colour asigned to all points within the PC                                                                    |
pointsColour        | no                                        | COMMING SOON! An array with length equal to the number of points, defining the individual point colours           |
cameraPosition      | no                                        | The position of the camera - which points to the origin (0,0,0)                                                   |

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
    <PointCloudVisualiser points={false} pointFunction={getPoint} numberOfPoints={100000} />
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
    <PointCloudVisualiser points={false} pointFunction={getPoint} numberOfPoints={100000} pointColour={'#33E3FF'} />
    </>
    
  );
}

export default App; />
```

The result of the above can be seen below:
![Example2](/images/example2.png)