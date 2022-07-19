import React from "react"

export default function Footer() {
	const nofSocialMediaHandles = socialMediaHandles.length
	return (
		<footer className='mt-24'>
			<ul>
				{socialMediaHandles.map((socialMediaHandle, index) => {
					const { name, url } = socialMediaHandle

					return (
						<li key={name} className='inline-block text-slate-400'>
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
				Please kindly note that this website has no affiliation with TailwindCSS
			</p>
		</footer>
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
