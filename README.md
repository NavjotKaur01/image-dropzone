# image-dropzone-typescript-package

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]


It is simple React counter.

## Installation:

```bash
npm install image-dropzone --save-dev
```

or

```bash
yarn add -D image-dropzone
```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'my-react-typescript-package'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <MyCounter />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <MyCounter value={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/image-dropzone
[github-license-url]: https://github.com/NavjotKaur01/image-dropzone/blob/main/LICENSE
[github-build]: https://github.com/NavjotKaur01/image-dropzone/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/NavjotKaur01/image-dropzone/actions/workflows/publish.yml