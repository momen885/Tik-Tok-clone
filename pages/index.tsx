import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResult";
interface Props {
  videos: Video[];
}

export default function Home({ videos }: Props) {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => {
          return <VideoCard post={video} key={video._id} />;
        })
      ) : (
        <NoResults text={"No Videos found"} />
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};
