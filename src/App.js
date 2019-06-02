import "aframe";
import { Entity, Scene } from "aframe-react";
import React from "react";
import _ from "lodash";

const blindCount = 20;

const App = props => (
  <Scene>
    {/* Blinds */}
    {_.times(blindCount, i => (
      <Entity
        key={i}
        geometry={{ primitive: "box", width: 0.01, height: 100, depth: 0.3 }}
        rotation={{ x: 0, y: -45, z: 0 }}
        material={{ color: "gray" }}
        position={{ x: -0.3 * i + 0.3 * (blindCount / 2), y: 0, z: -10 }}
      />
    ))}

    {/* Couch */}
    <Entity
      geometry={{ primitive: "box", width: 3, height: 1, depth: 1 }}
      material={{ color: "gray" }}
      position={{ x: 0, y: -3, z: -9 }}
    />

    {/* Hallway */}
    <Entity
      geometry={{ primitive: "box", width: 0.25, height: 20, depth: 30 }}
      material={{ color: "gray" }}
      position={{ x: -8, y: 0, z: 0 }}
    />
    <Entity
      geometry={{ primitive: "box", width: 0.25, height: 20, depth: 30 }}
      material={{ color: "gray" }}
      position={{ x: 8, y: 0, z: 0 }}
    />

    <Entity light={{ type: "point" }} />
    <a-camera>
      <a-cursor />
    </a-camera>
  </Scene>
);

export default App;
