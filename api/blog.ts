import axios, { AxiosResponse } from "axios";

export interface PostsResponse {
  meta: {
    total_count: number;
  };
  items: PostItem[];
}

export interface PostItem {
  id: number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
    slug: string;
    first_published_at: Date;
  };
  title: string;
  subtitle: string;
  body: string;
  tag: { name: string; slug: string };
}

export function GetPosts(): Promise<AxiosResponse<PostsResponse>> {
  return axios.get(
    "https://resolvemos-api.herokuapp.com/api/wagtail/pages/?type=blog.BlogFullPage&fields=tag,subtitle,body&format=json&limit=42069"
  );
}
