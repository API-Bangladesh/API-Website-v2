import React from 'react'
import PageBanner from "../components/Modules/PageBanner/PageBanner";
import BlogPage from '../components/Modules/BlogPage/BlogPage';

const Blog = () => {
  return (
    <>
      <PageBanner
        pageBg="/pageBg.jpg"
        title="Our Blog"
        description="Here at API Solutions, we're passionate about all things software and technology. This blog serves as a platform for us to share our insights, expertise and latest industry trends with our valued customers, partners and tech enthusiasts like you. Expect to find a wide variety of content, from informative articles and tutorials to in-depth analysis of the latest technology Stay tuned for our upcoming posts. If you have any suggestions for topics or want to share your feedback, we'd love to hear from you. So, let's dive into it!"
      />
      <BlogPage/>
    </>
  )
}

export default Blog