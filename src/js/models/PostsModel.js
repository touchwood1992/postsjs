const axios = require("axios");
import config from "../config";
export class PostModel {
  constructor() {}
  async getAllPosts() {
    try {
      const allPosts = await axios.get(config.post_api_uri);
      this.allPostsAr = allPosts.data;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
}
export class PostModelAdd {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  async createPosts() {
    try {
      const createpost = await axios.post(config.post_api_uri, {
        title: this.title,
        content: this.content,
      });
      this.newPost = createpost.data;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
}

export class PostModelDelete {
  constructor(id) {
    this.id = id;
  }
  async deletePost() {
    try {
      const createpost = await axios.delete(
        `${config.post_api_uri}/${this.id}`
      );
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
}

export class PostModelgetPost {
  constructor(id) {
    this.id = id;
  }
  async getPost() {
    try {
      const singlePost = await axios.get(`${config.post_api_uri}/${this.id}`);
      this.updatePostData = singlePost.data;
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
}

export class PostModelPut {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
  async updatePost() {
    try {
      await axios.put(`${config.post_api_uri}/${this.id}`, {
        title: this.title,
        content: this.content,
      });
    } catch (error) {
      console.log(error.response);
      throw error;
    }
  }
}
