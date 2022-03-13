> [!WARNING]
> Package no longer supported. Instead use [useRequestAnimationFrame React Hook](https://www.npmjs.com/package/request-animation-frame-hook)

# useInLoopCounter React Hook

> React hook with in loop frame counter. For animation purposes. You can start, stop and pause loop while counting.

[![NPM](https://img.shields.io/npm/v/in-loop-counter.svg)](https://www.npmjs.com/package/in-loop-counter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save in-loop-counter
```

## Usage

```jsx
import React, { useState } from "react";

import { useInLoopCounter } from "in-loop-counter";

const Example = () => {
  const [counter, setCounter] = useState(0);

  const [start, setStart, setStop] = useInLoopCounter((data) => {
    setCounter(data.counter);
  });

  return (
    <div className="App">
      <h1>In loop frame counter</h1>
      <p>Hook with start-stop-pause behaviors</p>

      <div className="container">
        <h3 className="counter"> {counter}</h3>
        <div className="buttons">
          <button onClick={setStart}>{start ? "Start" : "Pause"}</button>
          <button onClick={setStop} disabled={start}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};
```

## Demo

Try it on CodeSandbox [inLoopCounter React Hook](https://codesandbox.io/s/useinloopcounter-4ybsx2?file=/src/App.js)

## License

MIT © [ja-klaudiusz](https://github.com/ja-klaudiusz)
