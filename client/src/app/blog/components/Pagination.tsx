import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { usePosts } from "@/app/postsContext";
import { PostServer } from "../admin/[...formMode]/Form/formPostTypes";

type PaginationProps = {
  postsPerPage: number;
  setCurrentPosts: React.Dispatch<React.SetStateAction<PostServer[]>>;
  searchInput: string;
};

const Pagination = ({
  postsPerPage,
  setCurrentPosts,
  searchInput,
}: PaginationProps) => {
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);
  const { dataPosts } = usePosts();

  useEffect(() => {
    // Fetch posts from another resources.
    const endOffset = postOffset + postsPerPage;
    if (!searchInput) {
      setCurrentPosts(dataPosts.posts.slice(postOffset, endOffset));
      setPageCount(Math.ceil(dataPosts.total / postsPerPage));
    } else {
      const caseInsensitiveSearchInput = new RegExp(searchInput, "i");

      const filteredPosts = dataPosts.posts.filter((post) => {
        if (
          caseInsensitiveSearchInput.test(post.title) ||
          caseInsensitiveSearchInput.test(post.subtitle)
        ) {
          return true;
        }
        return false;
      });

      setCurrentPosts(filteredPosts.slice(postOffset, endOffset));
      setPageCount(Math.ceil(filteredPosts.length / postsPerPage));
    }
  }, [postOffset, postsPerPage, dataPosts, searchInput]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    if (dataPosts) {
      const newOffset = (event.selected * postsPerPage) % dataPosts?.total;
      setPostOffset(newOffset);
    }
  };

  return (
    <>
      <ReactPaginate
        nextLabel={
          <Image
            className="rotate-180"
            width={10}
            height={10}
            src={"/icons/chevron.png"}
            alt="icono anterior"
          />
        }
        className={`${
          postsPerPage >= dataPosts?.total && "hidden"
        } font-text flex items-center gap-7 py-2 px-4 border-2 border-gray-300 rounded-[2rem]`}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        previousLabel={
          <Image
            width={10}
            height={10}
            src={"/icons/chevron.png"}
            alt="icono anterior"
          />
        }
        pageClassName="page-post"
        pageLinkClassName="page-link"
        previousClassName="page-post"
        previousLinkClassName="page-link"
        nextClassName="page-post"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-post"
        breakLinkClassName="page-link"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
