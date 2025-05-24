import { useEffect, useState } from "react";

interface Category {
    _id: string,
    name: string
}

export interface Author {
    _id: string,
    name: string,
    picture: string
}

interface BlogData {
  categories: Array<Category>;
  authors: Array<Author>;
}

export const useBlogData = (entityTypes: string[]) => {
  const [entityData, setEntityData] = useState<BlogData>({
    categories: [],
    authors: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchEntityData = async () => {
      try {
        const requests = entityTypes.map(async (entityType) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL_API}/blog/${entityType}`
          );
          const data = await response.json();
          return { [entityType]: data };
        });

        const responses = await Promise.all(requests);
        const mergedData = Object.assign({}, ...responses);
        setEntityData(mergedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchEntityData();
  }, []);

  return { entityData, loading, error };
};
