This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Run on production

```bash
npm run build
npm start
```

Note: run `npx husky install` first time only

## Exploration take away

1. NextJS is currently working on support for Emotion.
2. Joining CSSinJS manually with tailwind is a bad idea. Use twin.macro instead.
3. We can use twin.macro to handle styled component breakpoints easily.
4. App route patterns can create a SPA experience.
5. With Apollo client, we can create a backend in our frontend codebase.
6. Use `MockedProvider` from `'@apollo/client/testing'` to mocking data query and response, zero additional setup
