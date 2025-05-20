import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => "/skills",
    }),
    addSKill: builder.mutation({
      query: (newSkill) => ({
        url: "/skills",
        method: "POST",
        body: newSkill,
      }),
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddSKillMutation,
  useDeleteSkillMutation,
  useGetSkillsQuery,
} = skillApi;
