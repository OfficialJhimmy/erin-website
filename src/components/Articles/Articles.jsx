// import { articleData } from "./ArticlesData";
// import { Tabs } from "antd";
// import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";

// const Articles = () => {
//   return (
//     <div className="articles__container">
//       <h2>My Featured Articles</h2>

//       <div className="articles__container--box">
//         <div className="articles__container--tabs">
//           <Tabs
//             defaultActiveKey="2"
//             items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
//               const id = String(i + 1);
//               return {
//                 key: id,
//                 label: `Tab ${id}`,
//                 children: `Tab ${id}`,
//                 icon: <Icon />,
//               };
//             })}
//           />
//         </div>
//         <div className="articles__container--featured">
//           {articleData.map((art, index) => (
//             <></>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Articles;

import { Tabs } from "antd";
import { articleData } from "./ArticlesData";
import "./index.css";
import { HiOutlineArrowRight } from "react-icons/hi2";

const getArticlesByType = (type) => {
  return articleData.filter((article) => article.type === type);
};

const Articles = () => {
  const types = [...new Set(articleData.map((article) => article.type))]; // Get unique types

  return (
    <div className="articles__container">
      <h2>These are Some of My Articles.</h2>

      <div className="articles__container--box">
        <div className="articles__container--tabs">
          <Tabs
            defaultActiveKey="0"
            centered
            animated
            tabBarStyle={{ borderBottom: "none" }}
          >
            {types.map((type, index) => (
              <Tabs.TabPane tab={type} key={index}>
                <div className="articles__container--featured">
                  {getArticlesByType(type).map((article, index) => (
                    <div key={index} className="article__box">
                      <h3>{article.title}</h3>
                      <div className="article__box--cover">
                        {article.featured === "yes" ? (
                          <>
                            <p>🚀 Featured in {" "} {article.company_name}</p>
                          </>
                        ) : null}

                        {/* <div className="article__box--tags">
                          {article.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))}
                        </div> */}
                      </div>
                      <a
                        href={article.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Article <HiOutlineArrowRight />
                      </a>
                    </div>
                  ))}
                </div>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Articles;
