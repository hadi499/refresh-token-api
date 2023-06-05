import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "../utils/useAxios";

const HomePage = () => {
  let { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  let api = useAxios();

  useEffect(() => {
    getPosts();
  }, []);

  let getPosts = async () => {
    let response = await api.get("/api/posts/");

    if (response.status === 200) {
      setPosts(response.data);
    }
  };
  console.log(user);

  return (
    <div className="flex justify-center h-screen mt-12 ">
      <div className="w-1/3 ">
        <h1 className="my-3">
          Hello,{" "}
          <span className="text-xl font-semibold"> {user?.username}</span>
        </h1>
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <div key={post.id}>
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
