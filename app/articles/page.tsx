import {
  AnimatedText,
  Article,
  Container,
  FeaturedArticle,
  TransitionEffect,
} from '@/components';
import { pagination, loadingScreen, validation } from '@/public/images';

export const metadata = {
  title: 'Cryptnology | Articles',
  description: 'Articles',
};

const Articles = () => {
  return (
    <>
      <TransitionEffect />
      <Container className="pt-16 pb-32">
        <main className="w-full mb-16 flex flex-col items-center justify-center">
          <AnimatedText
            className="mb-16 !text-4xl sm:mb-8 sm:!text-6xl lg:!text-7xl"
            text="Words Can Change The World!"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-y-16 gap-8 xl:gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={pagination}
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
              time="10 min read"
              link="/"
              img={loadingScreen}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="w-full">
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={validation}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={validation}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={validation}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={validation}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={validation}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={validation}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </main>
      </Container>
    </>
  );
};

export default Articles;
