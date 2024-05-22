import TitlesSection3 from '@/components/sections/titles3/Titles3'
import BaseSelection from '@/components/sections/BaseSelection/BaseSelection'
import OtherSelection from '@/components/sections/OtherSelection/OtherSelection'
import Header from "@/components/HeaderSelection/HeaderSelection";

export default function Selection() {
	return (
		<>
		      <Header />
			<TitlesSection3 />
			<BaseSelection />
			<OtherSelection />
		</>
	)
}
