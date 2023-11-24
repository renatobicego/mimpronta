import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { PostType } from '../page';
import Image from 'next/image';


type PaginationProps = {
    postsPerPage : number,
    setCurrentPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}

const mockedPosts = [
  {
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      imgSrc: 'image.png',
      id: 'dsf321'
  },
  {
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      imgSrc: 'image2.png',
      id: 'dsf321'
  },
  {
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      imgSrc: 'image3.png',
      id: 'dsf321'
  },
  {
      title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      imgSrc: 'image4.png',
      id: 'dsf321'
  },
  {
    title: 'Yorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subtitle: `Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
    imgSrc: 'image.png',
    id: 'dsf321'
  },
]

const Pagination = ({postsPerPage, setCurrentPosts} : PaginationProps ) => {
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);
  const [posts, setPosts] = useState(mockedPosts);

  useEffect(() => {
    // Fetch posts from another resources.
    const endOffset = postOffset + postsPerPage;
    console.log(`Loading posts from ${postOffset} to ${endOffset}`);
    setCurrentPosts(posts.slice(postOffset, endOffset));
    setPageCount(Math.ceil(posts.length / postsPerPage));
  }, [postOffset, postsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * postsPerPage % posts.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setPostOffset(newOffset);
  };

  return ( 
      <>
        <ReactPaginate
            nextLabel={<Image className='rotate-180' width={10} height={10} src={'/icons/chevron.png'} alt='icono anterior' />}
            className={`${postsPerPage >= posts.length && 'hidden'} font-text flex items-center gap-7 py-2 px-4 border-2 border-gray-300 rounded-[2rem]`}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            previousLabel={<Image width={10} height={10} src={'/icons/chevron.png'} alt='icono anterior' />}
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
}

export default Pagination