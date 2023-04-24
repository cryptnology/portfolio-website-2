import {
  AnimatedText,
  Topic,
  Container,
  FeaturedTopic,
  TransitionEffect,
} from '@/components';
import { learningPage } from '@/constants';

export const metadata = learningPage.metadata;

const Learning = () => {
  return (
    <>
      <TransitionEffect />
      <Container className="mt-36 mb-16">
        <main className="w-full mb-16 flex flex-col items-center justify-center">
          <AnimatedText
            className="mb-8 !text-4xl sm:mb-14 lg:mb-16 sm:!text-6xl lg:!text-7xl"
            text={learningPage.heading}
          />
          <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-16 gap-8 xl:gap-16">
            {learningPage.featuredTopics.map((topic, i) => (
              <FeaturedTopic
                key={i}
                title={topic.title}
                summary={topic.summary}
                amount={topic.amount}
                link={topic.link}
                img={topic.img}
              />
            ))}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            {learningPage.topicsHeading}
          </h2>
          <ul className="w-full">
            {learningPage.topics.map((topic, i) => (
              <Topic
                key={i}
                title={topic.title}
                img={topic.img}
                amount={topic.amount}
                amountText={topic.amountText}
                link={topic.link}
              />
            ))}
          </ul>
        </main>
      </Container>
    </>
  );
};

export default Learning;
