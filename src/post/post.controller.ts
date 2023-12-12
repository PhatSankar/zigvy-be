import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postSerivce: PostService) {}
  @Get()
  async getListPostInPage(
    @Query('_start') page: string,
    @Query('_limit') limit: string,
    @Query('title_like') title: string,
  ) {
    if (page == undefined || limit == undefined) {
      return await this.postSerivce.getListPost(title);
    }
    return await this.postSerivce.getListPostInPage(page, limit, title);
  }
}
