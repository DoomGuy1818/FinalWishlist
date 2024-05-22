import CatalogSection from '@/components/sections/catalog/Catalog'
import GiftsSection from '@/components/sections/gifts/Gifts'
import InterfaceSection from '@/components/sections/interface/Interface'
import TitlesSection2 from '@/components/sections/titles2/Titles2'
import Header from "@/components/HeaderSelection/HeaderSelection";

export default function ExamplePage() {
	return (
		<>
		      <Header />
			<TitlesSection2 />
			<InterfaceSection />
			<GiftsSection />

		</>
	)
}
