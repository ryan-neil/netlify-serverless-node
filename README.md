# Netlify Serverless Functions Example App

[![Netlify Status](https://api.netlify.com/api/v1/badges/4d7ff488-acb8-498f-ae6b-d3e4045d824a/deploy-status)](https://app.netlify.com/sites/ntl-serverless-example/deploys)

Inspiration for this mini app came from [Phil Hawksworth's](https://www.netlify.com/blog/authors/phil-hawksworth/).

### Resources:

- [Serverless functions made simple - Just add files](https://www.netlify.com/blog/2021/12/11/serverless-functions-made-simple-just-add-files/): Netlify
- [How to test serverless functions locally](https://www.netlify.com/blog/2021/12/12/how-to-test-serverless-functions-locally/): Netlify
- [Netlify Site Example](https://example-hello-world-function.netlify.app/): Netlify
  - [Github Repo](https://github.com/netlify/example-hello-world-functions): Netlify
- [A Step-by-Step Guide: Deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/): Netlify
- [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/): Netlify Docs
- [Build configuration overview](https://docs.netlify.com/configure-builds/overview/): Netlify Docs

### Testing locally

It's important for us to be able to develop and test our serverless functions locally that way we can validate that they work correctly before deploying them. We can do exactly this with _Netlify Dev_.

If you haven't already installed the [_Netlify CLI_](https://cli.netlify.com/) tools, run:

```bash
npm install -g netlify-cli
```

Next, inside the project directory, run:

```bash
netlify dev
```

_Netlify Dev_ will detect the serverless functions in your project, and automatically serve them for you in a local development server so that they behave just the same as when they are deployed to Netlify.

<h1></h1>

Checkout the [live example](https://ntl-serverless-example.netlify.app/) site!
