import "./App.css"
import { Link } from "./components"

function App() {
	return (
		<section className='bg-slate-900 min-h-screen md:py-36 py-12'>
			<header className=''>
				<h1 className=' font-extrabold text-4xl  max-w-4xl mx-auto sm:text-5xl lg:text-6xl tracking-tight text-center text-white'>
					🔥TailwindCSS tips for engineers at all levels
				</h1>
				<p className='my-6 text-lg  text-center max-w-3xl mx-auto text-slate-400'>
					99.9% out of 100% people working TailwindCSS are probably using it
					wrongly. Here is my attempt to make a dent in the world
				</p>
				<Link href='#watch-video'>Watch Video</Link>
				<Link href='#watch-video'>View Code</Link>
				<iframe
					width='560'
					height='315'
					id='watch-video'
					src='https://www.youtube.com/embed/9Au-rY4khtM'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					className='mx-auto mt-10 max-w-5xl h-96'
					allowfullscreen></iframe>
			</header>

			<footer>
				Please kindly note that this website has not affiliation with
				TailwindCSS
			</footer>
		</section>
	)
}

export default App
