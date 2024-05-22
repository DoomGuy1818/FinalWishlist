import CatalogSection from '@/components/sections/catalog/Catalog'
import LikeSection from '@/components/sections/like/like'
import TitlesSection from '@/components/sections/titles/Titles'
import Header from "@/components/HeaderSelection/HeaderSelection";

export default function UserPage() {
  return (
    <>
      <Header />
      <TitlesSection />
      <LikeSection />
      <CatalogSection />
    </>
  )
}
