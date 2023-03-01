function PostForm(props: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form method="post" className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label htmlFor="body" className="mb-2 text-gray-600">
          Title
        </label>
        <input className="p-4" name="title" placeholder="Title of your post" />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="body" className="mb-2 text-gray-600">
          Body
        </label>
        <textarea
          className="p-4"
          name="body"
          placeholder="Write something amazing"
        />
      </div>
      <button type="submit" className="rounded text-blue-700 transition">
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
