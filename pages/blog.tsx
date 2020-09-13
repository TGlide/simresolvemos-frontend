import { GetPosts, PostsResponse, PostItem } from "../api/blog";
import { GetStaticProps } from "next";
import { useState } from "react";

type BlogProps = {
  posts: PostsResponse["items"];
  tags: string[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await GetPosts();
  const posts = await res.data.items;
  const tags = posts.map((post) => post.tag.name);

  return {
    props: {
      posts,
      tags,
    },
    revalidate: 1,
  };
};

export default function Blog({ posts, tags }: BlogProps) {
  const [selectedTag, setSelectedTag] = useState<undefined | string>(undefined);
  const [filterOpen, setFilterOpen] = useState(false);

  const renderTag = (tag: string) => {
    return (
      <button
        key={tag}
        onClick={() => setSelectedTag(tag)}
        className={`text-left ${
          tag === selectedTag && "text-sea-blue font-semibold"
        } mt-2`}
      >
        {tag}
      </button>
    );
  };

  const renderPost = (post: PostItem, index: number, postsLength: number) => {
    return (
      <a key={post.id} href={post.meta.html_url} target="_blank">
        <h1 className="font-header text-3xl hover:text-sea-blue">
          {post.title}
        </h1>
        <p className="text-xl opacity-75">{post.subtitle}</p>
        {index + 1 != postsLength && <hr className="my-4" />}
      </a>
    );
  };

  const renderPosts = () => {
    let selectedPosts = [...posts];
    if (selectedTag) {
      selectedPosts = selectedPosts.filter(
        (post) => post.tag.name === selectedTag
      );
    }

    return selectedPosts.map((post, index) =>
      renderPost(post, index, selectedPosts.length)
    );
  };

  return (
    <div>
      <header className="flex justify-center items-center mt-4 ">
        <h1 className="font-header font-bold text-4xl">Blog</h1>
      </header>

      <button
        className="block lg:hidden mx-auto border-b-2 border-solid border-sea-blue font-bold mt-2"
        onClick={() => setFilterOpen(true)}
      >
        Filtrar por tags
      </button>

      <div
        className="lg:grid mt-8 mb-8"
        style={{
          gridTemplateColumns: "minmax(150px, 25%) 1fr",
          minHeight: "50vh",
        }}
      >
        <div
          className={`fixed top-0 left-0 bg-white lg:bg-transparent
          z-10 w-screen lg:w-auto h-screen lg:h-auto pl-4 lg:pl-0 pt-4 lg:pt-0 lg:relative 
          ${
            filterOpen ? "flex" : "hidden lg:flex"
          } flex-col lg:border-r border-solid border-gray-300 pr-4 lg:pr-8 mr-8`}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-gray-500 font-bold mb-4">Filtrar por tags</h1>
            <button
              className="lg:hidden mb-3"
              onClick={() => setFilterOpen(false)}
            >
              <img src="/vectors/times.svg" alt="Close" />
            </button>
          </div>

          <button
            onClick={() => setSelectedTag(undefined)}
            className={`text-left ${
              selectedTag === undefined && "text-sea-blue font-semibold"
            }`}
          >
            Sem filtro
          </button>
          {tags.map((tag) => renderTag(tag))}
        </div>
        <div>{renderPosts()}</div>
      </div>
    </div>
  );
}
