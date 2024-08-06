# Exercise 6: Convert HTML to JSX

Building a restaurant website from scratch can be a daunting task. Luckily, our team has been hard at work:

- Our media team has added several resources in `public/`, which will be great for future use.
- Our previous exercise work has been added to the project. Who knew that would come in handy?
- Our team has decided to use [Tailwind CSS](https://tailwindcss.com) for styling, which uses predefined utility classes to add styles to elements.

Additionally, we have some predefined markup to get us started on a menu page. We'll need to convert all of that, along with our previous work, to JSX.

## Convert to JSX

- [`src/title.exercise.jsx`](./src/title.exercise.jsx)
- [`src/menu.html`](./src/menu.html)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)
- [`src/app.exercise.jsx`](./src/app.exercise.jsx)

1. In [`src/title.exercise.jsx`](./src/title.exercise.jsx), return a `<h1>` with the classes `text-4xl font-black uppercase tracking-wider`. Don't forget to pass the `children`.
2. Next, we'll convert the HTML in [`src/menu.html`](./src/menu.html) to JSX and return that in [`src/menu.exercise.jsx`](./src/menu.exercise.jsx). Remember to address the differences JSX vs. HTML.
3. While still in [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), import the `Title` component from `./title` and replace the `<h1>` with it.
4. Finally, in [`src/app.exercise.jsx`](./src/app.exercise.jsx), replace the returned `<Title />` component with `<Menu />`.
