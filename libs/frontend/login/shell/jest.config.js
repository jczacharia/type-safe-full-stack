module.exports = {
  name: 'frontend-login-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/login/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
