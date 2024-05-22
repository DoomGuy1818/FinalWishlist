import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { Task } from "../types/Task";
import { Subquest } from "../types/Subquest";
import { Quest } from "../types/Quest";

// Define a service using a base URL and expected endpoints
export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://84.38.183.178:7777" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    postTasks: builder.mutation<Task, Partial<Task>>({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }),
      transformResponse: (response: { data: Task }, meta, arg) => response.data,
    }),
    postSubquest: builder.mutation<Subquest, Partial<Subquest>>({
      query: (subquest) => ({
        url: "/subquest",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subquest),
      }),
      transformResponse: (response: { data: Subquest }, meta, arg) =>
        response.data,
    }),
    getQuests: builder.query({
      query: () => ({
        url: "/quest",
        method: "GET",
      }),
      transformResponse: (response: { data: Quest }, meta, arg) =>
        response.data,
    }),
    postQuests: builder.mutation<Quest, Partial<Quest>>({
      query: (quest) => ({
        url: "/quest",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quest),
      }),
      transformResponse: (response: { data: Quest }, meta, arg) =>
        response.data,
    }),
  }),
});
export const {
  useGetTasksQuery,
  usePostTasksMutation,
  usePostSubquestMutation,
  usePostQuestsMutation,
  useGetQuestsQuery,
} = wishlistApi;
