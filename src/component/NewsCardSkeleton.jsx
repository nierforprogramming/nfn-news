import React from "react";

const NewsCardSkeleton = () => {
  return (
    <div className="flex flex-col p-3 gap-2 animate-pulse">
      <div className="image-skeleton rounded-lg bg-gray-300 w-full h-[200px]"></div>
      <div className="category-skeleton rounded-sm bg-gray-300 w-[150px] h-[20px]"></div>
      <div className="title-skeleton rounded-sm bg-gray-300 w-full h-[30px]"></div>
      <div className="description-skeleton rounded-sm bg-gray-300 w-full h-[30px]"></div>
      <div className="source-skeleton rounded-sm bg-gray-300 w-[150px] h-[20px]"></div>
    </div>
  );
};

export default NewsCardSkeleton;
