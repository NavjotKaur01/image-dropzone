import React from 'react'
import crossIcon from '../../assets/images/cross-icon.svg'

interface Props {
  handleDelete: () => void
}

const DeleteLogo = ({ handleDelete }: Props) => {
  return (
    <div className='modal fade' id='DeleteLogo' tabIndex={-1} aria-labelledby='DeleteLogoLabel' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered w-481'>
        <div className='modal-content p-40'>
          <div className='modal-header border-0 p-0 align-items-center mb-40'>
            <h2 className='main-h mb-0'>Delete Photo?</h2>

            <button
              type='button'
              id='closeDeleteLogoModalBtn'
              className='btn-close p-0'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <img src={crossIcon} />
            </button>
          </div>
          <div className='modal-body p-0 fw-bold'>
            <div className='d-flex'>
              <button
                type='button'
                className='btn primary-btn form-btn btn-w-fit btn-with-border w-100 fw-bold me-3 dlt-btn'
                onClick={() => handleDelete()}
                data-testid='delete-img'
              >
                Delete
              </button>
              <button
                type='button'
                className='btn primary-btn form-btn btn-w-fit btn-with-border gray-border-btn w-100 fw-bold'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteLogo
