function App() {
  return React.createElement(
    'div',
    { id: 'my-app' },
    React.createElement('h1', null, 'My Favorite React Resources'),
    React.createElement(
      'p',
      null,
      'Check these resources out if you want to learn more about React:',
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: 'https://react.dev/' },
          'The official React docs',
        ),
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: 'https://epicreact.dev/articles' },
          'Epic React articles',
        ),
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          {
            href: 'https://frontendmasters.com/courses/complete-react-v8/',
          },
          'Complete Intro to React (Frontend Masters)',
        ),
      ),
    ),
  );
}

export { App };
