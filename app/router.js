'use strict';

module.exports = app => {
  app.get('/api/v1/actor', 'actor.index');
};
