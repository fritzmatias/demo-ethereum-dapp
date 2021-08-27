# tools experimented with this the demo

- laguages: solidity, js, ts.
- live cicle: local, dockerized
- git: husky + git hooks, commitizen
- test: jest / mocha+chai
- frameworks: truffle

## Requirements

- npm
- docker

## run simulation

- `npm install`
- `npm run docker-tsnode src/useContract.ts`

## TODO:

- coverage
- TS on contract tests.

# using docker image with an specific nodejs version

- Dev
  - set up: `npm install`
  - run ganache: `npm run docker-run "npx ganache-cli development"`
  - run an specific file: `npm run docker-tsnode <file>`
- Test (migrates & test)
  - run test: `npm run docker-tests` (no need ganache)

# using your host nodejs version

- Dev
  - set up: `npm install`
  - run ganache: `npx ganache-cli development`
  - run an specific file: `npm run tsnode <file>`
- Test (migrates & test)
  - run tests: `npm test` (no need of ganache)

## Internal structure

- contracts -> sol files
- src -> js + ts files
- dist -> deployed files
