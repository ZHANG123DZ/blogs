import { useEffect, useState } from "react";
import { Tab, TabList, TabPanels, Tabs } from "../../components/Tabs/Tabs";
import styles from "./Blogs.module.scss";

import postService from "@/services/post/post.service";
import topicService from "@/services/topic/topic.service";
import ArticleCard from "@/components/ArticleCard";
import { Link } from "react-router-dom";

function Blogs() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const topicsData = await topicService.getAll();
        setTopics(topicsData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);

  return (
    <div className={styles.DivMainContainer}>
      <div className={styles.DivSearchContainer}>
        <Tabs>
          <TabList className={styles.DivTabsContainer}>
            {topics.map((item) => (
              <Tab key={item?.topic_name}>
                <div
                  data-e2e="tab-item"
                  className={styles["DivTab"]}
                  style={{
                    justifyContent: "flex-start",
                    width: "auto",
                    paddingRight: "80px",
                  }}
                >
                  <div
                    role="tab"
                    tabIndex={0}
                    aria-selected="true"
                    id="tabs-0-tab-search_top"
                    aria-controls="tabs-0-panel-search_top"
                  >
                    {item?.topic_name}
                  </div>
                </div>
              </Tab>
            ))}
          </TabList>
          <TabPanels className={styles.DivPanelContainer}>
            {topics.map((item) => (
              <div key={item.id}>
                {item.Posts.map((item) => (
                  <Link key={item.id} to={`/posts/${item.slug}`}>
                    <ArticleCard data={item} />
                  </Link>
                ))}
              </div>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Blogs;
