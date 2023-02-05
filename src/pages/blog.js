import Layout from "@/components/layout";
import Post from "@/components/post";
import React from "react";
import styles from '../styles/grid.module.css'

function Blog({posts}) {
  //console.log(posts);
  return (
    <Layout
      title="blog"
      description="Blog - Los mejore blog de Guitarras"
    >
      <main className="comtenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post => (
            //console.log(post.id)  
            <Post key={post.id} post={post}/>             
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
    const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await response.json();
  return {
      props: {
        posts,
    },
  };
}
