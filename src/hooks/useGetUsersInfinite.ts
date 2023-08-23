import { useInfiniteQuery } from '@tanstack/react-query';
import { size } from 'lodash';
import { GetUsers } from 'api/services';

export const useGetUsersInfinite = () => {
  const query = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam: skip }) => GetUsers({ skip }),
    getNextPageParam: (lastPage) => {
      const hasNextPage = lastPage.skip + size(lastPage.users) < lastPage.total;
      return hasNextPage ? lastPage.skip + lastPage.limit : undefined;
    }
  });
  return query;
};
