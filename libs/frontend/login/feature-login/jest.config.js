module.exports = {
  name: 'frontend-login-feature-login',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/login/feature-login',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
