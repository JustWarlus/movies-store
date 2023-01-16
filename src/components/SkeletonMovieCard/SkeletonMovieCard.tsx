import ContentLoader from "react-content-loader";

export const SkeletonMovieCard = () => (
  <ContentLoader
    speed={3}
    width={266}
    height={439}
    viewBox="0 0 266 439"
    backgroundColor="#2b2b2b"
    foregroundColor="#27032b"
  >
    <rect x="251" y="51" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="0" rx="20" ry="20" width="266" height="357" />
    <rect x="0" y="381" rx="10" ry="10" width="266" height="24" />
    <rect x="0" y="415" rx="10" ry="10" width="266" height="24" />
  </ContentLoader>
);
