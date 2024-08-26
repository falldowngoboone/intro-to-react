# Intro to React

React is one of the [most used JavaScript frameworks in the world](https://trends.builtwith.com/javascript), and one of the [most sought after skills in the job market](https://www.linkedin.com/pulse/complete-react-developer-salary-guide-2024-ais-technolabs-w81ff/). You can find it sites ranging from small personal projects like simple blog sites, all the way to complex web applications like Facebook, the famed framework’s creator. By itself, React can be a fairly simple tool to learn at a surface level, but its true power is unlocked when combined with its massive community-supported ecosystem.

In this course, you will learn the basic concepts of React, as well as some techniques for building modern web applications. Specifically, we will cover:

- What React is, what problems it solves, and how.
- How to use JSX.
- How to handle user interactions.
- How to synchronize with systems outside of React.
- How to manage state inside and between UI components.
- How to enable client side routing for more complex React apps.
- Next steps to take after this course.

## What this course is not

**This is not enterprise level React.**
    
We will learn the basics of building a web app, but we will not explore the mechanics of React in depth. If you are interested in more advanced topics, please let me know.
    
**This is not necessarily representative of web app best practices (ARIA).**
    
I have tried to adhere to best practices whenever possible, but accessibility is a deep discipline, and it’s difficult to get right without constant user feedback.

I highly encourage everyone reading this to explore the [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) website and the [WCAG standards and guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/).
    
**This is not how to learn HTML, CSS, or even JavaScript.**
    
I will attempt to bridge the gap for you, but there won’t be much in-depth explanation. When necessary, there will be brief primers on JavaScript methods that are helpful in React.
    
**This is not a course on programming.**
    
While I will try to explain programming concepts as they are introduced, there is a certain level of familiarity that is assumed. Please feel free to reach out to me directly during office hours to schedule a time to discuss as necessary.
    

## Technical Requirements

The following list is what this course was built with. You may be able to run on lower versions, but some libraries used may not be compatible. Your mileage may vary.

- [VS Code](https://code.visualstudio.com/) (recommended)
    - [Tailwind CSS IntelliSense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    - [Vitest extension](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
    - [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [nvm](https://github.com/nvm-sh/nvm) (recommended) - Node Version Manager for Linux, macOS and Windows WSL
- git ≥ 2.39.3
- Node ≥ v20.13.1
- npm ≥ 10.5.2
- Terminal access - You will need access to your terminal so you can run the initial commands to clone the project and install dependencies. If you install VS Code, you have access to an [integrated terminal](https://code.visualstudio.com/docs/terminal/basics).

### Windows Users

A note for Windows users: I have not tested this course on a Windows computer, but you may be able to run these exercises using [Windows WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

Windows WSL requires Windows 10 version 2024 and higher OR Windows 11.

If you have any issues attempting to run these exercises, please reach out to me via Teams so we can find a suitable alternative.

## Prerequisites

At least basic JavaScript experience is strongly recommended. We will cover some JavaScript concepts, but will not go into much depth.

As an employee of Yum! Brands, you should have access to LinkedIn Learning. You can check out [JavaScript Essential Training](https://www.linkedin.com/learning/javascript-essential-training) (6h 14m) for a good overview of the language.

## Course Project

[https://github.com/falldowngoboone/intro-to-react](https://github.com/falldowngoboone/intro-to-react)

### Up and running

1. Clone the repo
    
    ```bash
    git clone https://github.com/falldowngoboone/intro-to-react.git
    ```
    
2. Install the dependencies
    
    ```bash
    npm install
    ```
    
3. Run the project
    
    ```bash
    npm start
    ```
    

You can view the project in your browser at `localhost:3000`.

### Switching exercises

This repo has a special script that will switch and set up exercises for you. To switch exercises, use this command:

```bash
node go
```

You will be presented a prompt to select an exercise. Use your arrow keys to select the exercise, then hit `Enter`/`Return`.