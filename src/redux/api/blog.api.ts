import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    getBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    addBlog: builder.mutation({
      query: (newProject) => ({
        url: "/blogs",
        method: "POST",
        body: newProject,
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, updatedProject }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: updatedProject,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} = blogApi;
