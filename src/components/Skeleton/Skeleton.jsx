import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={8}
    width={310}
    height={520}
    viewBox="0 0 310 520"
    backgroundColor="#f5f5f5"
    foregroundColor="#e8e8e8"
    {...props}
  >
    <rect x="5" y="0" rx="10" ry="10" width="300" height="380" /> 
    <rect x="5" y="390" rx="5" ry="5" width="200" height="25" /> 
    <rect x="5" y="425" rx="5" ry="5" width="300" height="50" /> 
    <rect x="5" y="485" rx="5" ry="5" width="150" height="30" /> 
    <rect x="170" y="485" rx="6" ry="6" width="130" height="30" />
  </ContentLoader>
)

export default Skeleton