import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchUserPosts(user.id);
    }
  }, []);

  const fetchUserPosts = async (userId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:3000/api/posts/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosts(res.data.reverse());
    } catch (error) {
      console.error("Error fetching posts:", error.response?.data || error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 hover:bg-gray-300  px-4 py-2 rounded-md"
            >
              ← Go Back
            </button>
            <p className="text-3xl font-bold text-gray-800">Your Profile</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-xl shadow p-6 mb-10 flex gap-6 items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold">
            {getInitials(user?.name || "")}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {user?.name}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
            <p className="text-gray-700 mt-1">
              {user?.bio || "No bio provided."}
            </p>
            {/* <p className="text-sm text-gray-500 mt-1">
              Joined on {formatDate(user?.createdAt)}
            </p> */}
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-700">
              {posts.length}
            </div>
            <div className="text-sm text-gray-500">Posts</div>
          </div>
        </div>

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white p-5 rounded-xl shadow border border-gray-100"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-indigo-700">
                    {post.author.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(post.createdAt)}
                  </span>
                </div>
                <p className="text-gray-800">{post.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-20 text-lg">
            No posts to show. Start sharing your thoughts 💭
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
