<img src="https://github.com/RelateNow/art/blob/master/assets/hero.png" alt="hero" align="center" />

<br />

<div align="center">
  <h1>Relate</h1>
  Relate brings together mindfulness communities, teachers and individuals.
  <br />
  <strong>
    <a href="https://medium.com/@sedubois/the-way-we-relate-the-world-we-create-2d8f79300b7f">
      Read the article on Medium
    </a>
  </strong>
  <br />
  <sub>Made with ❤︎ by <a href="https://sdubois.now.sh">Sébastien Dubois</a></sub>
</div>

[![Slack Channel](https://relate-slack.now.sh/badge.svg)](https://relate-slack.now.sh)

## Stack

<a href="https://facebook.github.io/react/">React</a>,
 <a href="http://redux.js.org/">Redux</a>,
 <a href="http://graphql.org/">GraphQL</a>,
 <a href="http://dev.apollodata.com/">Apollo</a>,
 <a href="https://www.graph.cool/">Graphcool</a>,
 <a href="https://zeit.co/blog/next">Next.js</a>,
 <a href="https://zeit.co/now">Now</a>,
 <a href="https://auth0.com/">Auth0</a>.

## Development

- `git clone https://github.com/relatenow/relate && cd relate`
- create a configuration file:

```js
cat > config.js << EOF
export const AUTH0_CLIENT_ID = 'XXX';
export const AUTH0_DOMAIN = 'XXX';
export const ANALYTICS_TRACKING_ID = 'XXX';
export const GRAPHQL_ENDPOINT = 'XXX';
export const NEWSLETTER_FORM_ACTION = 'XXX';
export const NEWSLETTER_FORM_INPUT_NAME = 'XXX';

EOF
```

- `yarn`
- `yarn dev`
- navigate to [http://localhost:3000](http://localhost:3000)
- do something amazing :tada:

## Credit

See the [LICENSE](LICENSE) file for license rights and limitations (GPLv3).

Copyright (c) 2016-2017 Sébastien Dubois <https://sdubois.now.sh>.
