import {
  AnimatedText,
  Article,
  Container,
  FeaturedArticle,
  TransitionEffect,
} from '@/components';
import { articles, featuredArticles } from '@/constants';

export const metadata = {
  title: 'Cryptnology | Articles',
  description: 'Articles',
};

const Articles = () => {
  return (
    <>
      <TransitionEffect />
      <Container className="mt-36 mb-16">
        <main className="w-full mb-16 flex flex-col items-center justify-center">
          <AnimatedText
            className="mb-16 !text-4xl sm:mb-8 sm:!text-6xl lg:!text-7xl"
            text="Words Can Change The World!"
          />
          <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-16 gap-8 xl:gap-16">
            {featuredArticles.map((article, i) => (
              <FeaturedArticle
                key={i}
                title={article.title}
                summary={article.summary}
                time={article.time}
                link={article.link}
                img={article.img}
              />
            ))}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="w-full">
            {articles.map((article, i) => (
              <Article
                key={i}
                title={article.title}
                img={article.img}
                date={article.date}
                link={article.link}
              />
            ))}
          </ul>
        </main>
      </Container>
    </>
  );
};

export default Articles;
