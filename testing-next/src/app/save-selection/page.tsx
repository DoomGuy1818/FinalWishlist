import CatalogSection from '@/components/sections/catalog/Catalog'
import GiftsSection from '@/components/sections/gifts/Gifts'
import InterfaceSection from '@/components/sections/interface/Interface'
import TitlesSection from '@/components/sections/titles/Titles'
import Header from "@/components/HeaderSelection/HeaderSelection";

export default function SelectionPage() {
	return (
		<>
		      <Header />
			<TitlesSection />
			<InterfaceSection />
			<GiftsSection />
			<CatalogSection />
		</>
	)
}

