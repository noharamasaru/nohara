import { Authenticator } from "@aws-amplify/ui-react";
import MyPage from "../MyPage";
import ItemPage from "../ItemPage";

const LoginPage = () => {
  return (
    <Authenticator
      signUpAttributes={[
        "email",
        "family_name",
        "given_name",
        "name",
        "nickname",
      ]}
    >
      {({ signOut, user }) => (
        <Authenticator.Provider>
          <ItemPage />
        </Authenticator.Provider>
      )}
    </Authenticator>
  );
};

export default LoginPage;
