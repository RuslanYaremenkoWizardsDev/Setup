import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepo, IUser, ServerResponse } from '../../models/modelsGithub';
import config from '../../../api/urls.json';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: config[`API_${process.env.NEXT_PUBLIC_ENVIRONMENT as 'dev' | 'prod' | 'staging'}`],
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: config.users.searchUsers,
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
