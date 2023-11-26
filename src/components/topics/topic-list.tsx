import { db } from "@/db";
import { Chip } from "@nextui-org/react";
import paths from "@/paths";
import Link from "next/link";

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((t) => {
    return (
      <div key={t.id}>
        <Link href={paths.topicShow(t.slug)}>
          <Chip color="warning" variant="shadow">
            {t.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
};

export default TopicList;
