import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { acceptedFileFormats, getBase64 } from '../utilities/utils'
import Dropzone from 'react-dropzone'

interface Props {
  from?: string
  sendUploadImage?: (image: string, imageType: string) => void
  handleResetImage?: () => void
  handleChangeImage?: () => void
}
const ImageDropZone = forwardRef(({ from, sendUploadImage, handleResetImage, handleChangeImage }: Props, ref) => {
  useImperativeHandle(ref, () => ({
    handleSetPath(image: string, imageType: string) {
      setPaths([`data:image/${imageType};base64, ${image}`])
    },
    removePath() {
      setPaths([])
    },
    restoreImage() {
      setPaths(backupImage)
      setBackupImage([])
    },
  }))
  const [paths, setPaths] = useState<string[]>([])
  const [backupImage, setBackupImage] = useState<string[]>([])

  const handleUploadImage = (acceptedFiles: any) => {
    getBase64(acceptedFiles[0], (result) => {
      if (sendUploadImage) {
        const imageType = acceptedFiles[0].type.replace('image/', '')
        sendUploadImage(result, imageType)
      }
    })
    setPaths(acceptedFiles.map((file: File) => URL.createObjectURL(file)))
  }

  const handleChange = () => {
    if (from === 'profilePicture') {
      handleResetImage?.()
    }
    handleChangeImage?.()
    setBackupImage(paths)
    setPaths([])
  }

  // const handleDelete = () => {
  //   handleResetImage?.()
  //   setPaths([])
  //   const closeDeleteLogoModalBtn = document.getElementById('closeDeleteLogoModalBtn')
  //   closeDeleteLogoModalBtn?.click()
  // }

  return (
    <>
      <Dropzone
        noClick={false}
        onDrop={(acceptedFiles) => handleUploadImage(acceptedFiles)}
        multiple={from === 'patient-forms' ? true : false}
        accept={acceptedFileFormats}
      >
        {({ getRootProps, getInputProps }) => (
          <section className='drop-zone d-flex align-items-center justify-content-center text-center cursor-pointer'>
            <div {...getRootProps()} className='w-100 h-100 d-flex align-items-center justify-content-center'>
              <input {...getInputProps()} />
              {paths.length ? (
                paths.map((path) => <img className='w-100 h-100' key={path} src={path} />)
              ) : (
                <p className='mb-0 dropzone-text p-2'>
                  {from === 'patient-forms' ? 'Upload one or more files (PDF, DOC, ...)' : 'Upload image (optional)'}
                </p>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      {!!paths.length && (
        <div className='d-flex align-items-center justify-content-center mt-2'>
          <button className='btn-with-border fw-bold border-0 bg-transparent' type='button' onClick={handleChange}>
            {/* <img src={Edit} className='me-2 edit-icon' /> */}
            <span className='light-text'>Change</span>
          </button>
          {from === 'businessLogo' && (
            <button
              className='btn-with-border fw-bold border-0 bg-transparent'
              type='button'
              data-bs-toggle='modal'
              data-bs-target='#DeleteLogo'
            >
              {/* <img src={Trash} className='me-2' /> */}
              <span className='danger-text'>Delete</span>
            </button>
          )}
        </div>
      )}

      {/* <DeleteLogo handleDelete={handleDelete} /> */}
    </>
  )
})

export default ImageDropZone
