# Reddit clone

## Prisma
- `npm i prisma`
- `npx prisma init --datasource-provider sqlite`
- after creating model in schema.prisma, run `npx prisma migrate dev`

## Creating records
- create prisma client to access db
- create form in SnippetCreatePage
- define Server Action, function called when form is submitted
- in Server Action, validate users input then create new snippet
- redirect user to Home Page, which lists all snippets

# Notes
## Server actions
- no.1 way to change data in a next app
- super close integration with HTML forms
- functions that will be called with values a user entered into a form
- cannot be defined in Client Components
- to use server actions in Client Components, create actions folder and put .ts files there, import
  in Client Component from actions folder

## Fetching data
- create server component (without 'use client' at the top)
- mark component as async
- make http request or directly access a db to get data
- render data directly, or pass it to a child component

## Client vs Server component
### Client:
- essentially same React components that you are already used to
- created by adding 'use client' at the top of file
- can use hooks, event handlers etc
- cannot directly show a Server Component (there is 1 exception)
### Server:
- by default, all components are server components in Next
- bends rules of traditional components abit
- usually want to use this for better performance + UX
- can use async/await & don't need useState or useEffect for data fetching
- limitations: cannot use any kind of hooks, cannot assign any event handlers

## Dynamic paths
- use [] as folder name
- note that param values are always string