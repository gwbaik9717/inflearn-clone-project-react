import styled from "styled-components";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from "../../fbase";
import { Kakao, Google } from "../../img/socialLogo";
import { useNavigate } from "react-router";

const SignupSns = () => {
  const navigate = useNavigate();

  const onClickSocial = async (e) => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(authService, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledSns className="signup-sns">
      <hr className="divider" />
      <span className="sns-title">간편 회원가입</span>
      <div className="sns-buttons">
        <button id="kakao" className="btn">
          <Kakao />
        </button>

        <button id="google" className="btn" onClick={onClickSocial}>
          <Google />
        </button>
      </div>
    </StyledSns>
  );
};

const StyledSns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .divider {
    width: 100%;
    height: 1px;
    background-color: #f1f3f5;
    position: absolute;
    top: 7.5px;
  }

  .sns-title {
    font-weight: 400;
    margin-bottom: 16px;
    padding: 0 8px;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.3px;
    color: #abb0b5;
    z-index: 2;
    background-color: #fff;
  }

  sns-buttons {
    display: flex;
    justify-content: center;
  }

  #kakao {
    background-color: #fae500;
    width: 44px;
    height: 44px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  }

  #google {
    margin-left: 12px;
    background-color: #f8f8f8;
    width: 44px;
    height: 44px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  }
`;

export default SignupSns;
