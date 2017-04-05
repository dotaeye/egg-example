'use strict';

module.exports = app => {
  class TopicService extends app.Service {
    async list() {
      const results = await app.mysql.select('actor', {
        orders: [[ 'first_name', 'desc' ], [ 'last_update', 'desc' ]], // 排序方式
        limit: 10, // 返回数据量
        offset: 0, // 数据偏移量
      });
      return results;
    }

    // async show(params) {
    //   const result = await this.request(`/topic/${params.id}`, {
    //     data: {
    //       mdrender: params.mdrender,
    //       accesstoken: params.accesstoken,
    //     },
    //   });
    //   this.checkSuccess(result);

    //   return result.data.data;
    // }

    // async list(params) {
    //   const result = await this.request('/topics', {
    //     data: params,
    //   });

    //   this.checkSuccess(result);
    //   return result.data.data;
    // }

    // async create(params) {
    //   const result = await this.request('/topics', {
    //     method: 'post',
    //     data: params,
    //     contentType: 'json',
    //   });

    //   this.checkSuccess(result);
    //   return result.data.topic_id;
    // }

    // async update(params) {
    //   const result = await this.request('/topics/update', {
    //     method: 'post',
    //     data: params,
    //     contentType: 'json',
    //   });

    //   this.checkSuccess(result);
    // }

    checkSuccess(result) {
      if (result.status !== 200) {
        const errorMsg = result.data && result.data.error_msg
          ? result.data.error_msg
          : 'unknown error';
        this.ctx.throw(result.status, errorMsg);
      }
      if (!result.data.success) {
        this.ctx.throw(500, 'remote response error', { data: result.data });
      }
    }
  }

  return TopicService;
};
