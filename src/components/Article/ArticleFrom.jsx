import React, { useState } from "react";

const ArticleForm = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = { title, subtitle, description };
      setPosts(updatedPosts);
      setEditIndex(null);
    } else {
      const newPost = { title, subtitle, description };

      setPosts([...posts, newPost]);
    }

    setTitle("");
    setSubtitle("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((post, i) => i !== index);
    setPosts(updatedPosts);
  };

  const handleEdit = (index) => {
    const postToEdit = posts[index];
    setTitle(postToEdit.title);
    setSubtitle(postToEdit.subtitle);
    setDescription(postToEdit.description);
    setEditIndex(index);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen flex-col box-form">
        <div className=" bg-orange-300 p-10 rounded-lg">
          <h1 className="text-4xl font-bold text-black">
            Create User Article{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-2xl font-bold text-black">Title:</label>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-200 rounded-lg px-5 text-black font-bold outline-none"
              required
            />

            <div>
              <label className="text-2xl font-bold text-black">Subtitle:</label>
            </div>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full bg-gray-200 rounded-lg px-5  text-black font-bold outline-none "
              required
            />

            <div>
              <label className="text-2xl font-bold text-black">
                Description:
              </label>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-200 rounded-lg px-5 text-black font-bold outline-none"
              required
            />

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-active btn-accent font-bold"
              >
                {editIndex !== null ? "Update Post" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <li
              key={index}
              className=" bg-green-500 p-10 rounded-lg leading-10"
            >
              <h2 className="text-2xl font-bold text-white">Article Details</h2>
              <h3 className="text-lg font-bold text-white">
                Title:{post.title}
              </h3>
              <h4 className="text-lg font-bold text-white">
                Subtitle:{post.subtitle}
              </h4>
              <p className="text-lg font-bold text-white">
                Description:{post.description}
              </p>
              <div className="flex justify-between mt-6">
              <button onClick={() => handleEdit(index)} className="btn btn-active btn-warning font-bold">Edit</button>
              <button onClick={() => handleDelete(index)} className="btn btn-active btn-secondary font-bold">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleForm;
