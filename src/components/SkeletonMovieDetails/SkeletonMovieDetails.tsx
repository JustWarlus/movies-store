import ContentLoader from "react-content-loader";

export const SkeletonMovieDetails = () => (
  <ContentLoader
    speed={3}
    width={1186}
    height={1500}
    viewBox="0 0 1186 1500"
    backgroundColor="#2b2b2b"
    foregroundColor="#27032b"
  >
    <rect x="308" y="0" rx="20" ry="20" width="406" height="84" />
    <rect x="251" y="51" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="-1" rx="20" ry="20" width="266" height="356" />
    <rect x="308" y="108" rx="5" ry="5" width="229" height="28" />
    <rect x="308" y="176" rx="20" ry="20" width="878" height="120" />
    <rect x="308" y="336" rx="20" ry="20" width="878" height="332" />
    <rect x="308" y="724" rx="20" ry="20" width="1182" height="509" />
    <rect x="0" y="388" rx="10" ry="10" width="266" height="56" />
  </ContentLoader>
);
