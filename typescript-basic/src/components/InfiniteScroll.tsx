import React, { useCallback, useEffect, useState } from "react";
import { getPostList, postType } from "../lib/PostList";
import * as S from "./styles";

const InfiniteScroll = (): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const [posts, setPosts] = useState<postType[]>(getPostList(1));

    const handleScroll = useCallback((): void => {
        const { innerHeight } = window;

        const { scrollHeight } = document.body;

        const { scrollTop } = document.documentElement;

        if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
            setPosts(posts.concat(getPostList(page + 1)));

            setPage((prevPage: number) => prevPage + 1);
        }
    }, [page, posts]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        }
    }, [handleScroll]);

    return (
        <S.Container>
            {
                posts.map((post: postType, idx: number) => (
                    <S.PostItem key={idx}>{post.contents}</S.PostItem>
                ))
            }
        </S.Container>
    );
}

export default InfiniteScroll;