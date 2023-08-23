import { Grid, Stack } from '@mui/material';
import { map } from 'lodash';

import { PageContent } from 'components/layout';
import { CardUserProfile } from 'components/users';
import { Button } from 'components/primitives';
import { useGetUsersInfinite } from 'hooks/useGetUsersInfinite';

const UsersPage = () => {
  const users = useGetUsersInfinite();

  const handleLoadMore = () => {
    if (!users.isFetchingNextPage && users.hasNextPage) {
      users.fetchNextPage();
    }
  };

  return (
    <PageContent title="Users List">
      <Grid container spacing={2}>
        {users.isSuccess &&
          map(users.data.pages, (page) => {
            return map(page.users, (user) => (
              <Grid key={user.id} item md={3} xs={12}>
                <CardUserProfile user={user} />
              </Grid>
            ));
          })}
      </Grid>
      {users.hasNextPage && (
        <Stack alignItems="center" pt={2} pb={1}>
          <Button fullWidth outlined loading={users.isFetchingNextPage} sx={{ maxWidth: 280 }} onClick={handleLoadMore}>
            {users.isFetchingNextPage ? 'Please wait' : 'Load More'}
          </Button>
        </Stack>
      )}
    </PageContent>
  );
};

export default UsersPage;
