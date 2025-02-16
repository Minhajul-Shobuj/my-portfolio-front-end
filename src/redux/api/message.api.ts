import { baseApi } from "./baseApi";

const messageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => "/messages",
    }),
    postMessage: builder.mutation({
      query: (newProject) => ({
        url: "/messages",
        method: "POST",
        body: newProject,
      }),
    }),
  }),
});

export const { useGetMessagesQuery, usePostMessageMutation } = messageApi;
