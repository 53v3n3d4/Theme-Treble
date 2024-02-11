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
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">Name</th>
    <th class="tg-0lax">Kind</th>
    <th class="tg-0lax">sublimeFile name</th>
    <th class="tg-0lax">Script</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax" rowspan="2">Adaptive</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">adaptive-merge</td>
    <td class="tg-0lax">build-adaptive-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">adaptive-replace</td>
    <td class="tg-0lax">build-adaptive-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Dark</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">dark-merge</td>
    <td class="tg-0lax">build-dark-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">dark-replace</td>
    <td class="tg-0lax">build-dark-replace</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Light</td>
    <td class="tg-0lax">merge</td>
    <td class="tg-0lax">light-merge</td>
    <td class="tg-0lax">build-light-merge</td>
  </tr>
  <tr>
    <td class="tg-0lax">replace</td>
    <td class="tg-0lax">light-replace</td>
    <td class="tg-0lax">build-light-replace</td>
  </tr>
</tbody>
</table>

### Watch option - Build sublime files when changed

Using merge method for build theme files, because theme files build is slow when using replace method.
```
// Option 1
$ yarn node watch.js

// Option 2
$ yarn watch
```

## Yarn PnP notes

Using Yarn PnP, if get error import package not found when use Watch.  
https://yarnpkg.com/features/pnp#initializing-pnp
```
// Instead of
$ node watch.js

// Use
$ yarn node watch.js
```
