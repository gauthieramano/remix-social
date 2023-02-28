import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  header: string | null;
};

function Post({ header, children }: Props) {
  return (
    <div className="flex max-w-md flex-col rounded border p-6">
      {header && <h2 className="text-3xl font-bold text-gray-900">{header}</h2>}
      <p className="mt-4 text-lg text-gray-900">{children}</p>
    </div>
  );
}

export default Post;
