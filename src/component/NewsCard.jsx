const NewsCard = ({ News }) => {
  return (
    <div className="news-cards">
      <div className="news-card flex flex-col gap-6 overflow-hidden w-full">
        <div className="card-left rounded-sm w-full h-[300px] overflow-hidden">
          <img
            className="w-full h-full object-cover overflow-hidden rounded-2xl"
            src={News.urlToImage}
            alt={News.title}
          />
        </div>
        <div className="card-right flex flex-col gap-2">
          <div className="news-category flex gap-2">
            <div className="category font-bold">Published In</div>
            <div className="news-date text-gray-400">
              {News.publishedAt.slice(0, 10)}
            </div>
          </div>
          <div className="news-headline text-lg font-bold">{News.title}</div>
          <div className="news-desc text-gray-400">{News.description}</div>
          <div className="news-source font-bold">
            {News.author ? News.author : "Unkown"}

            {News.author ? (
              <p className="text-gray-400 font-normal">Author</p>
            ) : (
              <p className="text-gray-400 font-normal">Unknown Author</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
