import React from "react"
import Link from "./Link"
import ctl from "@netlify/classnames-template-literals"

export default function Header() {
	return (
		<header>
			<h1 className={headingTextStyle}>
				🔥TailwindCSS tips for engineers at all levels
			</h1>
			<p className={headingDescriptionStyle}>
				99.9% out of 100% people working TailwindCSS are probably using it
				wrongly. Here is my attempt to make a dent in the world
			</p>
			<div className={buttonGroupStyle}>
				<Link href='#watch-video' variant='primary'>
					Watch Video
				</Link>
				<Link
					href='https://github.com/aremu-smog/tailwindcss-tips'
					variant='secondary'>
					View Code
				</Link>
			</div>
			<iframe
				width='560'
				height='315'
				id='watch-video'
				src={process.env.REACT_APP_YOUTUBE_VIDEO_URL}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				className={iframeStyle}
				allowFullScreen></iframe>
		</header>
	)
}

const headingTextStyle = ctl(`
font-extrabold 
text-4xl  
max-w-4xl 
mx-auto 
sm:text-5xl 
lg:text-6xl 
tracking-tight 
text-center 
text-white
`)

const headingDescriptionStyle = ctl(`
my-6 
text-lg  
text-center 
max-w-3xl 
mx-auto 
text-slate-400
`)

const buttonGroupStyle = ctl(`
flex 
justify-center 
gap-4
`)

const iframeStyle = ctl(`
mx-auto 
w-full 
max-w-5xl 
h-96 mt-20
`)
