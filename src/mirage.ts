import { createServer } from 'miragejs';
import { createGraphQLHandler } from '@miragejs/graphql';

import schema from './schema.graphql';

createServer({
  routes() {
    this.post('/graphql', createGraphQLHandler(schema, this.schema));
  },
});
