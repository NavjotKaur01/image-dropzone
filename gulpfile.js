// eslint-disable-next-line @typescript-eslint/no-var-requires
const { src, dest } = require('gulp')

function copy(cb) {
  src('src/assets/images/*.svg').pipe(dest('dist/assets/images'))
  cb()
}

exports.copy = copy
