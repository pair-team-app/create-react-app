# create-react-app

This is an example React project to demonstrate the `design-engine-playground` npm module.

## Steps to Install

#### 1. Clone this repository & install dependencies:

`git clone https://www.github.com/de-ai/create-react-app`

`cd create-react-app`

`npm install`

#### 2. [Download](https://github.com/de-ai/design-engine-playground/archive/master.zip) or clone the module's repository:

`git clone https://www.github.com/de-ai/design-engine-playground`

#### 3. Install local copy of module in `create-react-app` project:

`cd /path/to/create-react-app`

`npm install /path/to/design-engine-playground`

#### 4. Link module to create binary symlink:

`cd /path/to/design-engine-playground`

`npm link design-engine-playground`

## Build Steps:

Run `npm run build` from the `create-react-app` project to create production build, `design-engine-playground` will execute post build.

On first build, browser window will open to your playground.

On consectutive builds, the playground URL will only be displayed.