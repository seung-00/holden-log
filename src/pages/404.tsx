import Layout from "@components/Layout"
import CONFIG from "../../site.config"
import { NextPageWithLayout } from "./_app"
import { Posts, Tag } from "../types"
import CustomError from "../containers/CustomError"

type Props = {
  tags: Tag
  posts: Posts
}

const NotFoundPage: NextPageWithLayout<Props> = () => {
  return <CustomError />
}

NotFoundPage.getLayout = function getlayout(page) {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: "website",
        url: CONFIG.link,
      }}
    >
      {page}
    </Layout>
  )
}

export default NotFoundPage
