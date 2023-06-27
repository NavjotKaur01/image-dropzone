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

Add `ImageDropZone` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ImageDropZone } from 'image-dropzone'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ImageDropZone
            ref={yourDropzoneRef}
            from={"businessLogo"}
            sendUploadImage={handleUploadImage} // upload function
            handleResetImage={handleResetImage} // reset image function
            handleChangeImage={handleChangeImage} // change image function
            />
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/image-dropzone
[npm-image]: https://img.shields.io/npm/v/image-dropzone
[github-license]: https://img.shields.io/github/license/NavjotKaur01/image-dropzone
[github-license-url]: https://github.com/NavjotKaur01/image-dropzone/blob/main/LICENSE
[github-build]: https://github.com/NavjotKaur01/image-dropzone/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/NavjotKaur01/image-dropzone/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/image-dropzone
