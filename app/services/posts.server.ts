import { db } from "~/services/db.server";

export const getPosts = () => db.post.findMany();
