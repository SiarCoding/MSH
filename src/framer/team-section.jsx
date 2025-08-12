// @ts-nocheck
/* eslint-disable */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cx, RichText, withCSS } from "unframer";
import { TeamCard } from "./team-card.jsx";

const Component = React.forwardRef(function (props, ref) {
	const { style, className, ...restProps } = props;

	const teamMembers = [
		{
			name: "Maximilian Heller",
			title: "Geschäftsführer",
			image: "https://framerusercontent.com/images/5k5f4gY5Z8c4J6E9A9j4J3zY.jpg"
		},
		{
			name: "Sarah Wagner",
			title: "Leitung Vertrieb",
			image: "https://framerusercontent.com/images/5k5f4gY5Z8c4J6E9A9j4J3zY.jpg"
		},
	];

	return (
		<motion.section
			{...restProps}
			className={cx("framer-team-section", className)}
			ref={ref}
			id="team"
			style={style}
		>
			<motion.div className="framer-1wkkhf8">
				<motion.div className="framer-nra19a">
					<motion.div className="framer-1bve2ih">
						<RichText className="framer-1jn2rpc">
							<p className="framer-styles-preset-11asbfe">Unser Team</p>
						</RichText>
						<RichText className="framer-1sxujqk">
							<h2 className="framer-styles-preset-rdnt0j">Kompetenz und Erfahrung für Ihren Erfolg</h2>
						</RichText>
					</motion.div>
				</motion.div>
				<div className="team-grid">
					{teamMembers.map((member, index) => (
						<TeamCard
							key={index}
							name={member.name}
							title={member.title}
							image={member.image}
						/>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
});

const css = [
    ".framer-team-section { padding: 100px 50px; background-color: #FFFFFF; }",
    ".framer-1wkkhf8 { display: flex; flex-direction: column; gap: 64px; max-width: 1440px; margin: 0 auto; width: 100%; }",
    ".framer-nra19a { display: flex; flex-direction: column; gap: 24px; align-items: center; text-align: center; }",
    ".framer-1bve2ih { display: flex; flex-direction: column; gap: 8px; max-width: 750px; }",
    ".framer-1jn2rpc .framer-styles-preset-11asbfe { font-size: 16px; color: rgba(18, 18, 18, 0.8); }",
    ".framer-1sxujqk .framer-styles-preset-rdnt0j { font-size: 32px; font-weight: 700; color: #121212; }",
    ".team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 48px; justify-items: center; }",
    "@media (min-width: 600px) and (max-width: 900px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }",
    "@media (max-width: 810px) { .framer-team-section { padding: 80px 30px; } }",
    "@media (max-width: 390px) { .framer-team-section { padding: 60px 16px; } }",
];

const FramerComponent = withCSS(Component, css, "framer-team-section");
export default FramerComponent;
