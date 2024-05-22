import CatalogSection from '@/components/sections/catalog/Catalog'
import LikeEditSection from '@/components/sections/likeEdit/likeEdit'
import TitlesSection from '@/components/sections/titles/Titles'
import Header from "@/components/HeaderSelection/HeaderSelection";

export default function EditPage() {
  return (
    <>
      <Header />
      <TitlesSection />
      <LikeEditSection />
      <CatalogSection />
    </>
  )
}
