import Articles from "./Articles";
import Categories from "./Categories";
import ExploreCourseTwoFour from "./ExploreCourseFour";
import ExploreCourseThree from "./ExploreCourseThree";
import ExploreCourseTwo from "./ExploreCourseTwo";
import ExplorerCourseOne from "./ExplorerCourseOne";
import FilterData from "./FilterData";
import Home from "./Home";
import SmallestArticles from "./SmallestArticles";

const LandingPage = () => {
  return (
    <>
      <Home />
      <Categories />
      <Articles />
      <ExplorerCourseOne />
      <FilterData />
      <ExploreCourseTwo />
      <ExploreCourseTwoFour />
      <ExploreCourseThree />
      <SmallestArticles />
    </>
  );
};

export default LandingPage;
