module.exports = require('@darkobits/ts').jest({
  // setupFilesAfterEnv: ['jest-expect-message'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node', 'yml'],
  // clearMocks: true,
  reporters: ['default', 'jest-github-reporter']
});
