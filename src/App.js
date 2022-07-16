import "./App.css"
import { Link } from "./components"

function App() {
	const nofSocialMediaHandles = socialMediaHandles.length
	return (
		<section className='bg-slate-900 min-h-screen md:pt-36 md:pb-20 py-12 text-center text-white px-8'>
			<header className=''>
				<h1 className=' font-extrabold text-4xl  max-w-4xl mx-auto sm:text-5xl lg:text-6xl tracking-tight text-center text-white'>
					🔥TailwindCSS tips for engineers at all levels
				</h1>
				<p className='my-6 text-lg  text-center max-w-3xl mx-auto text-slate-400'>
					99.9% out of 100% people working TailwindCSS are probably using it
					wrongly. Here is my attempt to make a dent in the world
				</p>
				<div className='flex justify-center gap-4'>
					<Link href='#watch-video' variant='primary'>
						Watch Video
					</Link>
					<Link href='#watch-video' variant='secondary'>
						View Code
					</Link>
				</div>
				<iframe
					width='560'
					height='315'
					id='watch-video'
					src='https://www.youtube.com/embed/9Au-rY4khtM'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					className='mx-auto w-full max-w-5xl h-96 mt-20'
					allowfullscreen></iframe>
			</header>

			<footer className='mt-24'>
				<ul>
					{socialMediaHandles.map((socialMediaHandle, index) => {
						const { name, url } = socialMediaHandle

						return (
							<li index={name} className='inline-block text-slate-400'>
								<a
									href={url}
									className='hover:text-white'
									target='_blank'
									rel='noopener noreferrer'>
									{name}
								</a>
								{index + 1 < nofSocialMediaHandles && (
									<span className='inline-block px-2'>|</span>
								)}
							</li>
						)
					})}
				</ul>
				<p className='mt-4'>
					Please kindly note that this website has not affiliation with
					TailwindCSS
				</p>
			</footer>
		</section>
	)
}

const socialMediaHandles = [
	{
		name: "YouTube",
		url: "https://t.co/yWP64zHdSe",
	},
	{
		name: "GitHub",
		url: "https://github.com/aremu-smog",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/web_bos_",
	},
]

export default App
