import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { GetPosts, PostsResponse } from "../../api/blog";
import Link from "next/link";
import { useRef } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetPosts();
  const posts = await res.data.items;

  return {
    paths: [
      ...posts.map((post) => {
        return { params: { id: `${post?.id}` } };
      }),
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await GetPosts();
  const posts = await res.data.items;

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

type BlogPostProps = {
  posts: PostsResponse["items"];
};

export default function BlogPost({ posts }: BlogPostProps) {
  const router = useRouter();
  const { id } = router.query;
  
  if (router.isFallback) {
    return (
      <div className="grid place-items-center w-full h-64">Carregando...</div>
    );
  }

  const post = posts.filter((p) => id.includes(`${p.id}`))[0];

  const generatePostBody = () => {
    let result = post.body;
    result = result.replace(
      /(src=['"])(\/media.*?['"])/g,
      "$1https://resolvemos-api.herokuapp.com$2"
    );

    return { __html: result };
  };


  return (
    <div>
      <Link href="/blog">
        <a className="flex items-center text-sea-blue hover:opacity-75 transition ease-in duration-75 mt-6">
          <img src="/vectors/arrow-left.svg" alt="Seta para esquerda" />
          <span className="ml-4 underline">Voltar para listagem</span>
        </a>
      </Link>

      <h1 className="font-header text-3xl mt-4">{post.title}</h1>
      <h2 className="text-xl text-gray-600">{post.subtitle}</h2>

      <div
        dangerouslySetInnerHTML={generatePostBody()}
        className="mt-4 pb-8"
      ></div>
    </div>
  );
}
