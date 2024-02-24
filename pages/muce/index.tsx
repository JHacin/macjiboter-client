import { CatList } from "@/cats/pages/cat-list/cat-list";
import { Layout } from "@/common/components/layout";
import { MetaTags } from "@/common/components/meta-tags";

export default function CatListPage() {
  return (
    <Layout>
      <MetaTags
        title="Redno botrstvo"
        description="Na seznamu so objavljene vse muce, ki trenutno iščejo botra."
      />
      <CatList />
    </Layout>
  );
}
