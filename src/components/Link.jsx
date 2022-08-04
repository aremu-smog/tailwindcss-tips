import React from "react"
import ctl from "@netlify/classnames-template-literals"

const Link = ({ href, variant, text, children }) => {
	const linkStyle = ctl(`
	${linkBaseStyle}
	${linkVariantStyles[variant]}
	`)

	return (
		<a href={href} className={linkStyle}>
			{text || children}
		</a>
	)
}

const linkBaseStyle = ctl(`
focus:outline-none 
border 
w-[164px] 
border-transparent 
text-sm
h-12 
px-6 
rounded-lg 
flex 
items-center 
justify-center 
`)

const linkVariantStyles = {
	primary: `
	hover:border-sky-500 
	text-white 
	bg-sky-500 
	hover:bg-transparent
	`,
	secondary: `
	hover:bg-sky-500 
bg-transparent
border-sky-500
	`,
}

export default Link
