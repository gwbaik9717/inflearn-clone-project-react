import Header from "../components/Header/Header";
import AltHeader from "../components/AltHeader/AltHeader";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Search from "../components/Search";
import PopularTags from "../components/PopularTags/PopularTags";
import Courses from "../components/Courses/Courses";
import Review from "../components/Review/Review";
import Category from "../components/Category/Category";
import Curation from "../components/Curation/Curation";
import Apply from "../components/Apply/Apply";
import { useSelector } from "react-redux";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.setLoginInfo);
  console.log(isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <Header /> : <AltHeader />}

      <main>
        <Hero />
        <Search />
        <PopularTags />

        {isLoggedIn ? (
          <>
            <Courses title="나와 비슷한 사람들이 수강한 강의" />
            <Courses
              id="JavaScript"
              title="courses"
              desc="다양한 프로그래밍 언어 랭킹 조사에서 언제나 상위권을 차지하는 자바스크립트! 프론트엔드에서 백엔드까지 다양한 영역에서 사용할 수 있어요."
            />
            <Courses
              id="알고리즘"
              title="courses"
              desc="알고리즘은 프로그래밍 개발자로 커리어를 쌓으려면 필수적으로 공부해야 해요! 실제 현업에서도 문제 해결 능력을 기르기 위해 알고리즘 코딩테스트를 보기도 한답니다."
            />
            <Category title="더 둘러보기" />
          </>
        ) : (
          <>
            <Courses
              title="여기서 시작해 보세요!"
              desc="이미 검증된 쉽고 친절한 입문 강의!!"
            />
            <Courses
              title="기본부터 실무까지 제시해주는 로드맵 🏃🏻‍♀️"
              desc="아무것도 몰라도 따라오다 보면 전문가가 될 수 있어요!"
            />
            <Review />
          </>
        )}

        <Curation />
        <Apply />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
