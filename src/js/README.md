## Build

```
// Install using corepack
$ corepack enable

// Install the package manager configured in the local project
$ corepack install

// Install dependecies
$ yarn install

// Script
$ yarn build-adaptive-replace

// Node
$ node -e 'import("./index.js").then(b => b.sublimeFile("adaptive-replace"));'
```

Option to build files using merge files or replace variables.  
For releases, using replace variables.
<table>
<thead>
  <tr>
    <th>Name</th>
    <th>Kind</th>
    <th>sublimeFile name</th>
    <th>Script</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Adaptive</td>
    <td>merge</td>
    <td>adaptive-merge</td>
    <td>build-adaptive-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>adaptive-replace</td>
    <td>build-adaptive-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Dark</td>
    <td>merge</td>
    <td>dark-merge</td>
    <td>build-dark-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>dark-replace</td>
    <td>build-dark-replace</td>
  </tr>
  <tr>
    <td rowspan="2">Light</td>
    <td>merge</td>
    <td>light-merge</td>
    <td>build-light-merge</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>light-replace</td>
    <td>build-light-replace</td>
  </tr>
</tbody>
</table>

### Watch option - Build sublime files when changed

Using merge method for build theme files, because theme files build is slow when using replace method.
```
// Option 1
$ yarn node script/watch.js

// Option 2
$ yarn watch
```

## Yarn PnP notes

Using Yarn PnP, if get error import package not found when use Watch.  
https://yarnpkg.com/features/pnp#initializing-pnp
```
// Instead of
$ node script/watch.js

// Use
$ yarn node script/watch.js
```
