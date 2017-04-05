'use strict';

module.exports = app => {
  class ActorController extends app.Controller {
    constructor(ctx) {
      super(ctx);
      this.createRule = {
        first_name: 'string',
        last_name: 'string',
        last_update: 'date',
      };
    }

    async index() {
      const { ctx } = this;
      ctx.body = await ctx.service.actor.list({
        page: ctx.query.page,
        tab: ctx.query.tab,
        limit: ctx.query.limit,
      });
    }

    // async create() {
    //   const { ctx } = this;
    //   ctx.validate(this.createRule);

    //   const id = await ctx.service.topics.create(ctx.request.body);
    //   ctx.body = {
    //     topic_id: id,
    //   };
    //   ctx.status = 201;
    // }

    // async update() {
    //   const { ctx } = this;

    //   ctx.validate(this.createRule);
    //   await ctx.service.topics.update(ctx.params.id, ctx.request.body);
    //   ctx.status = 204;
    // }
  }

  return ActorController;
};
