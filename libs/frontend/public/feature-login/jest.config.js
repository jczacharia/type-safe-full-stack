module.exports = {
  name: 'frontend-public-feature-login',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/frontend/public/feature-login',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
