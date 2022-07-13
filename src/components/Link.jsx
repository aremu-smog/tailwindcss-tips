import React from "react"
import ctl from "@netlify/classnames-template-literals"

const Link = ({ href, variant, text, children }) => {
	const linkStyle = ctl(`
  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400
  ${
		variant === "primary" &&
		`

  `
	}`)
	return (
		<a href={href} className={linkStyle}>
			{text || children}
		</a>
	)
}

export default Link
