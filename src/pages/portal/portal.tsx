import { useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PortalLayout } from 'components/layout/portal-layout';

const PortalPage = () => {
  const auth = useMemo(() => {
    const auth = localStorage.getItem('authorization');
    return auth ? JSON.parse(auth) : undefined;
  }, []);

  // Redirect to login page
  if (!auth) return <Navigate to="/login" replace={true} />;

  return (
    <PortalLayout auth={auth}>
      <Outlet />
    </PortalLayout>
  );
};

export default PortalPage;
