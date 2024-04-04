import { useAuth0 } from "@auth0/auth0-react";
export const Profile = () => {
  const { user } = useAuth0();
  return (
    <div className="">
      <p>{user.name}</p>
    </div>
  );
};
