// eslint-disable-next-line @typescript-eslint/no-var-requires
const { src, dest } = require('gulp')

function copy(cb) {
  src('src/assets/images/*.svg').pipe(dest('dist/cjs/assets/images')).pipe(dest('dist/esm/assets/images'))
  cb()
}
exports.copy = copy
