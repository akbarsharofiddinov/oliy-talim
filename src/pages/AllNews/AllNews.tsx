import { NewsItem } from "@/components";
import React from "react";

import news1 from "@/images/news/news-1.jpg";
import { Pagination } from "antd";

const AllNews: React.FC = () => {
  return (
    <>
      <div className="section-news all-news_page">
        <div className="container">
          <div className="section-title">
            <h3 className="title">barcha yangiliklar</h3>
            <div className="pagination">
              <Pagination
                defaultCurrent={1}
                total={500}
                showSizeChanger={false}
              />
            </div>
          </div>
          <div className="news-grid_box">
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
            <div className="news-item">
              <NewsItem img={news1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNews;
