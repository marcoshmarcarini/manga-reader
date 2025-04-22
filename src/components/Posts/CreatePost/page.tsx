"use client";
import { db } from "../../../../utils/firestore";
import { FormEvent, useState } from "react";
import { addDoc, collection } from "firebase/firestore";

export default function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    gallery: [] as File[],
    timeStamp: "",
  });

  const handlePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addDoc(collection(db, "Post"), {
      title: post.title,
      description: post.description,
      gallery: post.gallery,
      timeStamp: new Date(),
    });

    setPost({
      title: "",
      description: "",
      gallery: [],
      timeStamp: "",
    });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form
        onSubmit={handlePost}
        encType="multipart/form-data"
        className={`flex flex-col gap-2 justify-center items-center h-screen`}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className={`bg-white text-black w-[350px] h-[40px] border-2 border-black py-1 px-2 rounded-md dark:bg-violet-500 dark:text-white dark:border-violet-500`}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          className={`bg-white text-black w-[350px] h-[40px] border-2 border-black py-1 px-2 rounded-md dark:bg-violet-500 dark:text-white dark:border-violet-500`}
        />
        <div>
          <label
            htmlFor="imagens"
            className={`flex justify-center items-center border-4 bg-white text-black text-lg uppercase border-black border-dashed py-1 px-2 rounded-md text-center w-[350px] h-[200px] 
                hover:border-solid hover:bg-violet-500 hover:text-white hover:border-violet-500 hover:cursor-pointer transition-[400ms] ease-in 
            dark:bg-violet-300 dark:hover:bg-violet-900 dark:text-white dark:hover:text-violet-300 dark:border-cyan-200  dark:border-dashed dark:hover:border-cyan-500`}
          >
            Selecione as Imagens
          </label>
          <input
            id="imagens"
            type="file"
            placeholder="Gallery"
            multiple
            onChange={(e) => {
              const files = (e.target as HTMLInputElement).files;
              if (files) {
                setPost({ ...post, gallery: Array.from(files) });
              }
            }}
            className={`hidden`}
          />
        </div>

        <button type="submit">Postar</button>
      </form>
    </div>
  );
}
