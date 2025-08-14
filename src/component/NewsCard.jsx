import placeholderImage from "/placeholder.png";

const NewsCard = ({ News }) => {
  return (
    <div className="news-cards">
      <a href={News.url} target="_blank">
        <div className="news-card flex flex-col gap-6 overflow-hidden w-full">
          <div className="card-left rounded-lg w-full h-[300px] overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
              src={News.image_url ? News.image_url : placeholderImage}
              alt={News.title}
            />
          </div>
          <div className="card-right flex flex-col gap-2">
            <div className="news-category flex gap-2">
              <div className="category font-bold">
                {News.categories.map((category) => (
                  <span key={category} className="mr-1 capitalize">
                    {category}
                  </span>
                ))}
              </div>
              <div className="news-date text-gray-400">
                {News?.published_at.slice(0, 10)}
              </div>
            </div>
            <div className="news-headline text-lg font-bold">{News.title}</div>
            <div className="news-desc text-gray-400">{News.snippet}</div>
            <div className="news-source font-bold">
              <p className="uppercase">
                {News.source ? News.source : "Unkown"}
              </p>

              {News.source ? (
                <p className="text-gray-400 font-normal">Source</p>
              ) : (
                <p className="text-gray-400 font-normal">Unknown Source</p>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
