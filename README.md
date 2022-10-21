# point-cloud-visualiser

point-cloud-visualiser is a react component which can be used to visualise point clouds.

## Installation

To start using point-cloud-visualiser install using npm:
```
npm i point-cloud-visualiser
```

## Parameters

Parameter           | Required?                                 | Description                                                                                                       |
------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
points              | yes (unless points function is defined)   | A 2D array containing all the points to be displayed                                                              |
pointsFunction      | yes (unless points is defined)            | A function that takes the point number in the range [0,numberOfPoints-1] and returns the point position (x,y,z)   |
numberOfPoints      | no (unless pointsFunction is defined)     | The total number of points you wish to define in the point cloud. Ignored in the case points is defined           |
pointColour         | no                                        | The colour asigned to all points within the point cloud                                                           |
pointsColour        | no                                        | An array with length equal to the number of points, this allows colour definition of individual points            |
cameraPosition      | no                                        | The position of the camera - which points to the origin (0,0,0)                                                   |
------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |

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