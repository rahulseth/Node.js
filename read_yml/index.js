const readYaml = require('read-yaml');
const yamlLint = require('yaml-lint');
sampleFile = 'sample.yaml';
 
yamlLint.lint(sampleFile).then(() => {
  console.log('Valid YAML file.');
}).catch((error) => {
  console.error('Invalid YAML file.', error);
});

readYaml('sample.yaml', function(err, data) {
  if (err) throw err;
  console.log(data);
});