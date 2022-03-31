# Netlify Serverless Functions Example App

Inspiration for this mini app came from [Phil Hawksworth](https://www.netlify.com/blog/authors/phil-hawksworth/) of Netlify.

### Resources:

- [Serverless functions made simple - Just add files](https://www.netlify.com/blog/2021/12/11/serverless-functions-made-simple-just-add-files/)
- [How to test serverless functions locally](https://www.netlify.com/blog/2021/12/12/how-to-test-serverless-functions-locally/): Netlify
- [Netlify Site Example](https://example-hello-world-function.netlify.app/): Netlify
  - [Github Repo](https://github.com/netlify/example-hello-world-functions): Netlify

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
