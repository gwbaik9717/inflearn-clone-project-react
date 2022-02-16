import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CourseCard from "./CourseCard";

const CoursesLists = () => {
  const datas = [
    {
      title: "UIKit - iOS14 실무 가이드 <iOS앱 진짜 개발자 되기>",
      tags: ["+300명"],
      author: "iOS Developer",
      img: "https://cdn.inflearn.com/public/courses/327148/cover/f14566b3-1845-48ee-af5f-86555dd273a4/327148-eng.png",
      reviewCount: 21,
      price: "₩88,000",
    },
    {
      title: "일주일 완성! 3dsmax 입문 (자동차 및 캐릭터 만들기)",
      tags: ["+300명"],
      author: "목마하임(MokmaHeim)",
      img: "https://cdn.inflearn.com/public/courses/324504/course_cover/1ba6aa0e-a276-4d62-9979-c5a29e690c51/m_3ds_basic.png",
      reviewCount: 19,
      price: "₩55,000",
    },
    {
      title: "Confluence를 활용해서 효과적으로 지식 관리와 프로젝트 협업하기",
      tags: ["+100명"],
      author: "lesstif",
      img: "https://cdn.inflearn.com/public/courses/326342/cover/e8771ba0-1550-4874-81f5-08823fac4ba9/326342-eng (1).png",
      reviewCount: 13,
      price: "₩88,000",
    },
    {
      title: "제대로 파는 Git & GitHub - by 얄코",
      tags: ["+500명", "새강의", "할인중"],
      author: "얄팍한 코딩사전",
      img: "https://cdn.inflearn.com/public/courses/328284/cover/5de1ff7b-691b-4047-9501-0f46d0f2a5a7/git-github-infleran 복사.png",
      reviewCount: 25,
      price: "₩30,800",
    },
    {
      title:
        "비전공자를 위한 넓고 얇은 IT 지식 & 나의 개발 유형 알아보기! <M.B.I.T>",
      tags: ["+500명"],
      author: "제주코딩베이스캠프",
      img: "https://cdn.inflearn.com/public/courses/326514/cover/22caf762-a466-47fd-8d21-1f70ee2d91aa",
      reviewCount: 25,
      price: "₩30,800",
    },
    {
      title:
        "[C#과 유니티로 만드는 MMORPG 게임 개발 시리즈] Part1: C# 기초 프로그래밍 입문",
      tags: ["+2900명"],
      author: "Rookiss",
      img: "https://cdn.inflearn.com/public/courses/324718/course_cover/9fa72fd8-ce56-4091-aa73-a31145acf37e/rookiss-rpg-1.png",
      reviewCount: 25,
      price: "₩44,000",
    },
    {
      title: "Python 부트캠프",
      tags: ["+500명"],
      author: "제주코딩베이스캠프",
      img: "https://cdn.inflearn.com/public/course-325339-cover/9f2bb0a8-26c3-4520-aaf6-5a3ff4466b7d",
      reviewCount: 25,
      price: "₩30,800",
    },
    {
      title: "뉴욕 프로덕트 디자이너가 알려주는, 입문자를 위한 UX디자인 개론",
      tags: ["+500명"],
      author: "에릭",
      img: "https://cdn.inflearn.com/public/course-325638-cover/5bf811f2-72e6-46b1-980e-4ddcd73d3459",
      reviewCount: 68,
      price: "₩74,800",
    },
  ];

  return (
    <div className="courses-lists">
      <Swiper
        modules={[Navigation]}
        className="swiper-container"
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        slidesPerView={5}
        spaceBetween={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {datas.map(
          ({ title, tags, author, img, reviewCount, price }, index) => (
            <SwiperSlide key={title} virtualIndex={index}>
              <CourseCard
                title={title}
                tags={tags}
                author={author}
                img={img}
                reviewCount={reviewCount}
                price={price}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div className="swiper-prev navBtn circle">
        <FontAwesomeIcon icon={All.faChevronLeft} />
      </div>

      <div className="swiper-next navBtn circle">
        <FontAwesomeIcon icon={All.faChevronRight} />
      </div>
    </div>
  );
};

export default CoursesLists;
