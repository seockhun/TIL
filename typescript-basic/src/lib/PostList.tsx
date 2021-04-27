export type postType = {
    page: number;
    contents: string;
};

export const getPostList = (page: number): postType[] => {
    return postList.filter((post: postType) => post.page === page);
};

export const postList: postType[] = [
    {
        page: 1,
        contents: "hello 11111"
    },

    {
        page: 1,
        contents: "hello 22222"
    },

    {
        page: 1,
        contents: "hello 33333"
    },

    {
        page: 2,
        contents: "hello 44444"
    },

    {
        page: 2,
        contents: "hello 55555"
    },

    {
        page: 2,
        contents: "hello 66666"
    },

    {
        page: 3,
        contents: "hello 77777"
    },

    {
        page: 3,
        contents: "hello 88888"
    },

    {
        page: 3,
        contents: "hello 99999"
    },

    {
        page: 3,
        contents: "hello 1010101010"
    },
    {
        page: 4,
        contents: "hello page4"
    },

    {
        page: 4,
        contents: "hello page4"
    },

    {
        page: 4,
        contents: "hello page4"
    },

    {
        page: 5,
        contents: "hello page5"
    },

    {
        page: 5,
        contents: "hello page5"
    },

    {
        page: 5,
        contents: "hello page5"
    },

    {
        page: 6,
        contents: "hello page6"
    },

    {
        page: 6,
        contents: "hello page6"
    },

    {
        page: 6,
        contents: "hello page6"
    },

    {
        page: 7,
        contents: "hello page7"
    },
];