// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const UserProfile = () => {
//   const { id } = useParams(); // Get user ID from route
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);

//   const fetchUserData = async () => {
//     try {
//       const res = await axios.get(
//         `https://linkedinbackend-zxet.onrender.com/api/users/${id}/posts`
//       );
//       setUser(res.data.user);
//       setPosts(res.data.posts);
//     } catch (err) {
//       console.error("Failed to fetch user profile", err);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, [id]);

//   if (!user)
//     return <p className="text-center text-gray-600">Loading profile...</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow mb-6">
//         <div className="flex items-center gap-4">
//           <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold uppercase">
//             {user.name[0]}
//           </div>
//           <div>
//             <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
//             <p className="text-gray-600">{user.email}</p>
//             <p className="text-gray-500 mt-1 italic">{user.bio}</p>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-4">
//         {posts.length === 0 ? (
//           <p className="text-center text-gray-500">
//             No posts yet from this user.
//           </p>
//         ) : (
//           posts.map((post) => (
//             <div
//               key={post._id}
//               className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
//             >
//               <p className="text-sm text-gray-400">
//                 {new Date(post.createdAt).toLocaleString()}
//               </p>
//               <p className="mt-2 text-gray-700">{post.content}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Shimmer from "../components/Shimmer";

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://linkedinbackend-zxet.onrender.com/api/users/${id}/posts`
      );
      setUser(res.data.user);
      setPosts(res.data.posts);
    } catch (err) {
      console.error("Failed to fetch user profile", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <Shimmer height={80} className="mb-4" />
        <Shimmer height={80} className="mb-4" />
        <Shimmer height={80} className="mb-4" />
      </div>
    );

  if (!user)
    return <p className="text-center text-gray-600">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-white hover:underline text-sm flex items-center gap-1"
      >
        ← Back
      </button>

      {/* User Card */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold uppercase">
            {user.name?.slice(0, 2)}
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500 mt-1 italic">{user.bio}</p>
            <p className="text-sm text-gray-400 mt-2">
              Total Posts:{" "}
              <span className="font-semibold text-gray-700">
                {posts.length}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">
            No posts yet from this user.
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
            >
              <p className="text-sm text-gray-400">
                {new Date(post.createdAt).toLocaleString()}
              </p>
              <p className="mt-2 text-gray-700">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserProfile;
