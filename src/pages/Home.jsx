import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "https://linkedinbackend-zxet.onrender.com/api/posts"
      );
      const postsArray = Array.isArray(res.data) ? res.data : res.data.posts;
      setPosts(postsArray.reverse());
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://linkedinbackend-zxet.onrender.com/api/posts",
        { content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        setContent("");
        fetchPosts();
      }
    } catch (err) {
      console.error("Post failed", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50 p-4">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center rounded-2xl mb-6">
        <p className="text-2xl font-extrabold text-blue-600 tracking-wide">
          DevConnect
        </p>

        <Link to="/profile" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-sm group-hover:scale-105 transition">
            U
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:underline">
            My Profile
          </span>
        </Link>
      </header>

      <div className="bg-white p-5 rounded-xl shadow-md mb-8">
        <form onSubmit={handlePost}>
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
            rows="4"
            required
          />
          <div className="text-right mt-3">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-5">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500 italic">
            No posts yet. Be the first to share your thoughts!
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm uppercase shadow">
                  {post.author.name?.[0] || "U"}
                </div>
                <div>
                  {/* <p className="font-semibold text-gray-800">
                    {post.author.name}
                  </p> */}
                  <Link
                    to={`/user/${post.author._id}`}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    {post.author.name}
                  </Link>
                  <p className="text-xs text-gray-400">
                    {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              {/* <p className="mt-3 text-gray-700">{post.content}</p> */}
              <p className="mt-3 text-gray-700 break-words whitespace-pre-line">
                {post.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
