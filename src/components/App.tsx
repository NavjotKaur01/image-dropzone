import React, { forwardRef, useState, useImperativeHandle, useEffect } from 'react'
import { acceptedFileFormats, getBase64 } from '../utilities/utils'
import Dropzone from 'react-dropzone'
import DeleteLogo from './modals/DeleteLogo'
import Edit from '../assets/images/edit-icon.svg'
import Trash from '../assets/images/trash.svg'
import '../style.css'

interface Props {
  from?: string
  sendUploadImage?: (image: string, imageType: string) => void
  handleResetImage?: () => void
  handleChangeImage?: () => void
  showDelete?: boolean
}
const ImageDropZone = forwardRef(
  ({ from, sendUploadImage, handleResetImage, handleChangeImage, showDelete }: Props, ref) => {
    useImperativeHandle(ref, () => ({
      handleSetPath(image: string | null, imageType: string | null) {
        if (!image) {
          setPaths([])
        } else {
          setPaths([`data:image/${imageType};base64, ${image}`])
        }
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

    useEffect(() => {
      return () => {
        setPaths([])
        setBackupImage([])
      }
    }, [])

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
      handleChangeImage?.()
      setBackupImage(paths)
      setPaths([])
    }

    const handleDelete = () => {
      handleResetImage?.()
      setPaths([])
      const closeDeleteLogoModalBtn = document.getElementById('closeDeleteLogoModalBtn')
      closeDeleteLogoModalBtn?.click()
    }

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
                <input data-testid='dropZone' {...getInputProps()} />
                {paths.length ? (
                  paths.map((path) => {
                    return (
                      <div className='drop-img' key={path} style={{ backgroundImage: "url('" + path + "')" }} data-testid='img-id' />
                    )
                  }
                  )
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
            <button
              data-testid='change-img-btn'
              className='btn-with-border border-0 bg-transparent'
              type='button'
              onClick={handleChange}
            >
              <img src={Edit} className='m-right-5' />
              <span className='light-text'>Change</span>
            </button>
            {!!showDelete && (
              <button
                data-testid='delete-btn'
                className='btn-with-border border-0 bg-transparent'
                type='button'
                data-bs-toggle='modal'
                data-bs-target='#DeleteLogo'
              >
                <img src={Trash} className='m-right-5' />
                <span className='danger-text'>Delete</span>
              </button>
            )}
          </div>
        )}

        <DeleteLogo handleDelete={handleDelete} />
      </>
    )
  },
)

export default ImageDropZone
