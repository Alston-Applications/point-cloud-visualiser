# point-cloud-visualiser

point-cloud-visualiser is a react component which can be used to visualise point clouds.

## Installation

To start using point-cloud-visualiser install using npm:
```
npm i point-cloud-visualiser
```

## Parameters

Parameter           | Required?         | Description                                                   |
------------------- | ----------------  | ------------------------------------------------------------- |
points              | no                | A 2D array containing all the points to be displayed          |  


## Examples of how to define the point cloud

You have several options to define the point cloud. The simplist solution is to provide a 2D array of points:

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

## Examples of how to style the point cloud

//TODO