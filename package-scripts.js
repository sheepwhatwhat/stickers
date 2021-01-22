module.exports = require('@darkobits/ts').nps({
  scripts: {
    compile: 'npx compile-stickers --input-file src/stickers.yml --output-file partials/partials.json',
    // Overwrite the default 'test' script, adding the --testLocationInResults
    // flag required by the jest-github-reporter.
    // See: https://github.com/hipstersmoothie/jest-github-reporter#usage
    test: 'ts.jest --testLocationInResults'
  }
});
