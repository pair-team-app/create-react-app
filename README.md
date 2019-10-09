# create-react-app

This is an example React project to demonstrate the `design-engine-playground` npm module.

## Steps to Install

#### 1. Clone this repository & install dependencies:

`git clone https://github.com/de-ai/create-react-app.git`

`cd create-react-app`

`yarn install`

#### 2. Install Playground & link module to create binary symlink for post-build operation:

`npm link design-engine-playground`

## Build Steps:

Run `npm run build` from the `create-react-app` project to create a production build, `design-engine-playground` will execute post build.

On first build, a browser window will open to your playground.

On consecutive builds, the playground URL will only be displayed.
