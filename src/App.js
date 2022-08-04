import ctl from "@netlify/classnames-template-literals"
import { Footer, Header } from "./components"

function App() {
	return (
		<section className={sectionStyle}>
			<Header />
			<Footer />
		</section>
	)
}

const sectionStyle = ctl(`
bg-slate-900 
min-h-screen 
md:pt-36 
md:pb-20 
py-12 
text-center 
text-white 
px-8
`)

export default App
