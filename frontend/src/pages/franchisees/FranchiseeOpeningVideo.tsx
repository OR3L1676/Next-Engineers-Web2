import video from "../../assets/couldbegood/HEB_short_final_1_LOEREZ.mp4";

const FranchiseeOpeningVideo = () => {
  return (
    <video
      src={video}
      title="intro"
      loop
      autoPlay
      muted
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
};

export default FranchiseeOpeningVideo;
