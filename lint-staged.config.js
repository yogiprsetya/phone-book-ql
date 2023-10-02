module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.(ts|tsx|js)': ['eslint --fix', 'prettier --write'],
  '**/*.(md|json)': 'prettier --write'
};
