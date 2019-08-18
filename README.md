# create-react-app

This is an example React project to demonstrate the `design-engine-playground` npm module.

## Steps to Install

#### 1. Clone this repository & install dependencies:

`git clone https://www.github.com/de-ai/create-react-app`

`cd create-react-app`

`npm install`

#### 2. Install the `design-engine-playground` npm module.

`npm install -s design-engine-playground`

#### 3. Link module to create binary symlink for post-build operation:

`npm link design-engine-playground`

## Build Steps:

Run `npm run build` from the `create-react-app` project to create a production build, `design-engine-playground` will execute post build.

On first build, a browser window will open to your playground.

On consectutive builds, the playground URL will only be displayed.
