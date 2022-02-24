import { useEffect, useState, useRef } from "react";
import AltHeader from "../components/AltHeader/AltHeader";
import Footer from "../components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import SignupSns from "../components/Signup/SignupSns";
import styled from "styled-components";

const StyledSignup = styled.section`
  margin: 64px auto auto;
  width: 320px;
  height: 676px;

  .signup-title {
    font-weight: 500;
    font-size: 26px;
  }
  .signup-messages {
    margin-bottom: 24px;
  }

  .swiper-container {
    width: 100%;
  }

  .swiper-wrapper {
    width: 100%;
  }

  .swiper-slide {
    width: 100%;
  }

  .swiper-slide p {
    font-size: 16px;
    line-height: 1.6;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
  }

  .form-input {
    margin-bottom: 16px;
  }

  .form-label {
    line-height: 1.43;
    letter-spacing: -0.3px;
    font-size: 14px;
    font-weight: 400;
    color: #3e4042;
  }

  #email,
  #email-confirm,
  .password-input {
    margin-top: 4px;
    height: 48px;
    width: 100%;
    line-height: 1.47;
    font-size: 15px;
    border: 1px solid #dee2e6;
    padding: 13px 12px;
    letter-spacing: -0.3px;
    border-radius: 4px;
    background-color: #fff;
  }

  #email:focus,
  #email-confirm:focus,
  .password-input:focus-within {
    border: 1px solid #00c471;
  }

  .password-input {
    display: flex;
    justify-content: space-between;
  }

  .password-input input {
    border: none;
    width: 100%;
    margin-right: 12px;
  }

  .password-eye {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .password-eye svg {
    fill: rgb(33, 37, 41);
  }

  .form__error {
    display: block;
    line-height: 1.5;
    letter-spacing: -0.3px;
    font-size: 12px;
    margin-top: 4px;
    color: #e5503c;
  }

  .password-guide {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  .password-guide--default {
    line-height: 1.5;
    letter-spacing: -0.3px;
    font-size: 12px;
    color: #abb0b5;
  }

  .password-guide--alert {
    color: #e5503c;
  }

  .password-guide--success {
    color: #00c471;
  }

  .signup-main > .btn {
    border: 1px solid #00c471;
    font-weight: 700;
    background-color: #00c471;
    margin: 16px 0 12px 0;
    color: #fff;
    padding: 0 16px;
    line-height: 1.47;
    font-weight: 700;
    height: 48px;
    font-size: 15px;
    letter-spacing: -0.3px;
    border-radius: 4px;
    width: 100%;
  }
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  .footer-policy {
    line-height: 1.5;
    letter-spacing: -0.3px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 6px;
    color: #858a8d;
  }

  .footer-policy a {
    color: #1964d5;
  }

  .footer-agree {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 1.6;
  }

  label {
    line-height: 1.5;
    letter-spacing: -0.3px;
    font-size: 12px;
    font-weight: 400;
    margin-left: 4px;
    color: #858a8d;
    order: 1;
  }
`;

const Signup = () => {
  const [passwordFocused, setPasswordFocused] = useState(false);

  const currentEmail = useRef("");
  const [isEmail, setIsEmail] = useState(true); // 최초 진입시 경고창 숨기기
  const [isEmailConfrimed, setIsEmailConfirmed] = useState(true); // 최초 진입시 경고창 숨기기

  const [currentPassword, setCurrentPassword] = useState("");
  const [isPassword1, setIsPassword1] = useState(false);
  const [isPassword2, setIsPassword2] = useState(false);
  const [isPassword3, setIsPassword3] = useState(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true);

  const sayings = [
    "나의 온라인 사수, 인프런",
    "나의 성장을 돕는 IT 실무 지식 플랫폼",
    "인프런에서 가치를 높이세요",
  ];

  useEffect(() => {
    console.log(currentPassword);
    const guide1 =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{3,100}$/; // 영문 대소문자, 숫자, 특수문자
    const guide2 = /^[a-zA-Z0-9]{12,32}$/; // 최소 12자 이상, 32자 이하 공백제외
    const guide3 = /(\w)\1\1/; // 같은 숫자, 문자 3개이상 사용

    if (guide1.test(currentPassword)) {
      setIsPassword1(true);
    } else {
      setIsPassword1(false);
    }

    if (guide2.test(currentPassword)) {
      setIsPassword2(true);
    } else {
      setIsPassword2(false);
    }

    if (!guide3.test(currentPassword)) {
      setIsPassword3(true);
    } else {
      setIsPassword3(false);
    }
  }, [currentPassword]);

  const onChangePassword = (event) => {
    setCurrentPassword(() => event.target.value);
  };

  const onChangePasswordConfirm = (event) => {
    if (currentPassword === event.target.value) {
      setIsPasswordConfirmed(true);
    } else {
      setIsPasswordConfirmed(false);
    }
  };

  const onChangeEmail = (event) => {
    currentEmail.current = event.target.value;

    const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;

    if (pattern.test(currentEmail.current)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const onChangeEmailConfirm = (event) => {
    if (event.target.value === currentEmail.current) {
      setIsEmailConfirmed(true);
    } else {
      setIsEmailConfirmed(false);
    }
  };

  return (
    <>
      <AltHeader />

      <main>
        <StyledSignup className="signup">
          <h2 className="signup-title">회원가입</h2>

          <div className="signup-messages">
            <Swiper
              className="swiper-container"
              slidesPerView={1}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {sayings.map((saying, index) => (
                <SwiperSlide key={saying} tag="div" virtualIndex={index}>
                  <p> {saying} </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="signup-main">
            <form className="signup-form">
              <div className="form-input">
                <label htmlFor="email" className="form-label">
                  이메일
                </label>
                <input
                  onChange={onChangeEmail}
                  id="email"
                  type="text"
                  placeholder="example@inflearn.com"
                />
                <span className={"form__error" + (isEmail ? " is-hidden" : "")}>
                  이메일 형식이 올바르지 않습니다.
                </span>
              </div>

              <div className="form-input">
                <label htmlFor="email-confirm" className="form-label">
                  이메일 확인
                </label>
                <input
                  onChange={onChangeEmailConfirm}
                  id="email-confirm"
                  type="text"
                  placeholder="example@inflearn.com"
                />
                <span
                  className={
                    "form__error" + (isEmailConfrimed ? " is-hidden" : "")
                  }
                >
                  이메일이 일치하지 않습니다.
                </span>
              </div>

              <div className="form-input">
                <label htmlFor="password" className="form-label">
                  비밀번호
                </label>
                <div className="password-input">
                  <input
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    onChange={onChangePassword}
                    id="password"
                    type="password"
                    placeholder="******"
                  />
                  <span className="password-eye">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>

                <p
                  passwordFocused={passwordFocused}
                  className={
                    "password-guide " + (passwordFocused ? "" : "is-hidden")
                  }
                >
                  <span
                    className={
                      (currentPassword.length === 0 &&
                        "password-guide--default") ||
                      (currentPassword.length > 0 &&
                        isPassword1 &&
                        "password-guide--default password-guide--success") ||
                      (currentPassword.length > 0 &&
                        !isPassword1 &&
                        "password-guide--default password-guide--alert")
                    }
                  >
                    영문 대소문자/숫자/특수 문자 3가지 필수 조합
                  </span>
                  <span
                    className={
                      (currentPassword.length === 0 &&
                        "password-guide--default") ||
                      (currentPassword.length > 0 &&
                        isPassword2 &&
                        "password-guide--default password-guide--success") ||
                      (currentPassword.length > 0 &&
                        !isPassword2 &&
                        "password-guide--default password-guide--alert")
                    }
                  >
                    12자 이상 32자 이하 입력 (공백 제외)
                  </span>
                  <span
                    className={
                      (currentPassword.length === 0 &&
                        "password-guide--default") ||
                      (currentPassword.length > 0 &&
                        isPassword3 &&
                        "password-guide--default password-guide--success") ||
                      (currentPassword.length > 0 &&
                        !isPassword3 &&
                        "password-guide--default password-guide--alert")
                    }
                  >
                    연속 3자 이상 동일한 문자/숫자 제외
                  </span>
                </p>
              </div>

              <div className="form-input">
                <label htmlFor="password-confirm" className="form-label">
                  비밀번호 확인
                </label>
                <div className="password-input">
                  <input
                    onChange={onChangePasswordConfirm}
                    id="password-confirm"
                    type="password"
                    placeholder="******"
                  />
                  <span className="password-eye">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#212529"
                        d="M10.333 8c0 1.289-1.044 2.333-2.333 2.333C6.71 10.333 5.667 9.29 5.667 8 5.667 6.711 6.71 5.667 8 5.667c1.289 0 2.333 1.044 2.333 2.333z"
                      ></path>
                      <path
                        fill="#212529"
                        fillRule="evenodd"
                        d="M8 2.333c-2.288 0-4.083 1.023-5.37 2.16C1.348 5.63.544 6.902.22 7.469.03 7.8.03 8.2.22 8.533c.323.566 1.127 1.838 2.41 2.973 1.287 1.138 3.082 2.16 5.37 2.16 2.288 0 4.083-1.022 5.37-2.16 1.283-1.135 2.087-2.407 2.41-2.973.19-.333.19-.733 0-1.065-.323-.567-1.127-1.839-2.41-2.974-1.287-1.138-3.082-2.16-5.37-2.16zm-6.912 5.63c.295-.516 1.035-1.685 2.205-2.72C4.461 4.21 6.03 3.333 8 3.333c1.97 0 3.54.877 4.707 1.91 1.17 1.035 1.91 2.204 2.205 2.72.008.015.01.028.01.037 0 .01-.002.022-.01.037-.295.516-1.035 1.685-2.205 2.72-1.168 1.033-2.737 1.91-4.707 1.91-1.97 0-3.54-.877-4.707-1.91-1.17-1.035-1.91-2.204-2.205-2.72-.008-.015-.01-.028-.01-.037 0-.01.002-.022.01-.037z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>

                <span
                  className={
                    "form__error" + (isPasswordConfirmed ? " is-hidden" : "")
                  }
                >
                  비밀번호가 일치하지 않습니다.
                </span>
              </div>
            </form>

            <button className="btn">가입하기</button>

            <StyledFooter className="form-footer">
              <span className="footer-policy">
                가입 시, 인프런의
                <a href="#">이용약관</a>,<a href="#">개인정보취급방침</a>에
                동의합니다.
              </span>

              <p className="footer-agree">
                <label
                  className="allow-marketing-label"
                  htmlFor="allow-marketing"
                >
                  인프런의 할인 및 유용한 소식을 받아볼래요.
                </label>
                <input id="allow-marketing" type="checkbox" />
              </p>
            </StyledFooter>

            <SignupSns />
          </div>
        </StyledSignup>
      </main>

      <Footer />
    </>
  );
};

export default Signup;
