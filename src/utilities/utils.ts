export const getBase64 = (file: File, cb: (readerResult: any) => void) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    const result: any = reader.result
    const strImage = result.replace(/^data:image\/[a-z]+base64,/, '')
    cb(strImage)
  }
  reader.onerror = function (error) {
    console.log('Error: ', error)
  }
}

export const acceptedFileFormats = {
  'image/bmp': ['.bmp'],
  'image/gif': ['.gif'],
  'image/jpeg': ['.jpeg'],
  'image/pbm': ['.pbm'],
  'image/png': ['.png'],
  'image/tiff': ['.tiff'],
  'image/tga': ['.tga'],
  'image/webp': ['.webp'],
}
