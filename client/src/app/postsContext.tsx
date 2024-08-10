"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { PostServer } from "./blog/admin/[...formMode]/Form/formPostTypes";
import Swal from "sweetalert2";

interface DataPosts {
  posts: Array<PostServer>;
  total: number;
}
type PostsContextProps = {
  dataPosts: DataPosts;
  fetchPosts: () => Promise<void>;
  loading: boolean;
};

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const PostsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<DataPosts>({ posts: [], total: 0 });
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API}/blog`
      );
      setPosts(response.data);
    } catch (error: any) {
      Swal.fire("Error en el servidor al traer los posts: " + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ dataPosts: posts, fetchPosts, loading }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within an PostProvider");
  }
  return context;
};
