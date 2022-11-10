## React-TailStrap

A Component Library for React and Tailwindcss.
Tailwindcss is a utility base CSS framework and Bootstrap is a component base CSS Framework.

And [react-tailstrap](https://github.com/Mdkawsarislam2002/react-tailstrap) is a tailwindcss library that builds on top of tailwindcss but that have all bootstrap component it means you can use Bootstrap components into your tailwindcss projects
And gonna provide others components also.

### Get Started

1.  Install [Tailwindcss](https://tailwindcss.com/docs/installation) in your project

2.  Install [react-tailstrap](https://www.npmjs.com/package/react-tailstrap) using npm

```npm
npm i react-tailstrap
```

3. add react-tailstrap path in you tailwind.config.js file content sections. Like this:

```js
content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
  './node_modules/react-tailstrap/src/**/*.{js,ts,jsx,tsx}',
];
```

or

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailstrap/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### How to user react-tailstrap

#### Demo Code

```jsx
import React from 'react';

import { Button, Alert } from 'react-tailstrap';

const App = () => {
  return (
    <div>
      {/* Alert */}
      <Alert variant="primary"> an alert </Alert>
      {/* Button */}
      <Button variant="primary">Primary</Button> <br />
    </div>
  );
};

export default App;
```

## Others Components are coming soon

### under Development / unusable version
