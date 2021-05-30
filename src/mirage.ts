import { createServer } from 'miragejs';
import { createGraphQLHandler } from '@miragejs/graphql';

createServer({
  routes() {
    this.post('/graphql', createGraphQLHandler('', this.schema));
  },
});
