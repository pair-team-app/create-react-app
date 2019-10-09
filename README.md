# create-react-app

This is an example React project to demonstrate the `design-engine-playground` npm module.

## Steps to Install

#### 1. Clone this repository & install dependencies:

`git clone https://github.com/de-ai/create-react-app.git`

`cd create-react-app`

`yarn install`

#### 2. Install Design Engine playground for the project:

`yarn add design-engine-playground`

## Setting Up
#### 1. Initialize the playground

This step adds a `postbuild` entry to YOUR package triggering Design Engine after `yarn build`.

`npx design-engine --init`

## Setting Up
#### 1. Initialize the playground

Run `npm run build` from the `create-react-app` project to create a production build, `design-engine-playground` will execute post build.

On first build, a browser window will open to your playground.

On consecutive builds, the playground URL will only be displayed.
