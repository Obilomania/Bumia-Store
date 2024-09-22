import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "./authAPI";


const adminAPI = createApi({
  reducerPath: "adminAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    mode: "cors",
    redirect: "follow",
  }),
  tagTypes: ["adminAPI"],
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (category) => ({
        url: "category/",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: category,
        credentials: "include",
      }),
      invalidatesTags: ["adminAPI"],
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "category/",
        credentials: "include",
      }),
      providesTags: ["adminAPI"],
    }),
    editCategory: builder.mutation({
      query: ({ _id, title }) => ({
        url: `category/${_id}`,
        method: "PUT",
        body: title,
        credentials: "include",
      }),
      invalidatesTags: ["adminAPI"],
    }),
    deleteCategory: builder.mutation({
      query: (_id) => ({
        url: `category/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["adminAPI"],
    }),
    createBrand: builder.mutation({
      query: (brand) => ({
        url: "brand/",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: brand,
        credentials: "include",
      }),
      invalidatesTags: ["adminAPI"],
    }),
    getAllBrands: builder.query({
      query: () => ({
        url: "brand/",
        credentials: "include",
      }),
      providesTags: ["adminAPI"],
    }),
    editBrand: builder.mutation({
      query: ({ _id, title }) => ({
        url: `brand/${_id}`,
        method: "PUT",
        body: title,
        credentials: "include",
      }),
      invalidatesTags: ["adminAPI"],
    }),
    deleteBrand: builder.mutation({
      query: (_id) => ({
        url: `brand/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["adminAPI"],
    }),
    createNewProduct: builder.mutation({
      query: (theBody) => ({
        url: "product/create-product",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: theBody,
        credentials: "include",
      }),
      invalidatesTags: ["adminAPI"],
    }),
  }),
});


export const {
useCreateCategoryMutation, useGetAllCategoriesQuery, useEditCategoryMutation,useDeleteCategoryMutation, useCreateBrandMutation,useGetAllBrandsQuery, useEditBrandMutation, useDeleteBrandMutation, useCreateNewProductMutation
} = adminAPI;
export default adminAPI;