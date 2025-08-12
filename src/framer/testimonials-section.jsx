// @ts-nocheck
/* eslint-disable */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cx, RichText, withCSS, useVariantState } from "unframer";
import { TestimonialCard } from "./testimonial-card.jsx";

const Component = React.forwardRef(function (props, ref) {
	const { style, className, layoutId, variant, ...restProps } = props;
	const { baseVariant, classNames } = useVariantState({
		defaultVariant: "desktop",
		variant,
		variantClassNames: {
			desktop: "framer-v-desktop",
			tablet: "framer-v-tablet",
			phone: "framer-v-phone",
		},
	});

	const testimonials = [
		{
			quote: "Die Zusammenarbeit mit MSH Dresden war von Anfang an professionell und transparent. Wir fühlten uns jederzeit bestens beraten und sind mit dem Ergebnis mehr als zufrieden. Unsere Steuerlast konnte erheblich gesenkt werden.",
			client: "Familie S. aus München",
			rating: "5.0",
            image: "https://framerusercontent.com/images/LMLNF0vU5ySMfVRIW3JtFu5iB78.jpg?scale-down-to=512"
		},
		{
			quote: "Als selbstständiger Unternehmer war ich auf der Suche nach einer sicheren und rentablen Kapitalanlage. MSH Dresden hat mir eine maßgeschneiderte Lösung geboten, die perfekt zu meiner finanziellen Situation passt.",
			client: "Dr. K. aus Hamburg",
			rating: "4.9",
            image: "https://framerusercontent.com/images/S0kKRTM44yfHbhgnxbX3PNQlwE.jpg?scale-down-to=512"
		},
		{
			quote: "Die Sanierung unserer Denkmalimmobilie wurde von MSH Dresden hervorragend gemanagt. Das Ergebnis ist eine wunderschöne Wohnung, die sich problemlos vermieten ließ. Wir können MSH Dresden uneingeschränkt weiterempfehlen.",
			client: "Ehepaar L. aus Berlin",
			rating: "5.0",
            image: "https://framerusercontent.com/images/IrsyMMpxpY0yqVMutVpGtcoOSx4.jpg?scale-down-to=512"
		},
        {
			quote: "Die Betreuung durch das Team von MSH Dresden war erstklassig. Alle unsere Fragen wurden geduldig und kompetent beantwortet. Ein großes Dankeschön für die tolle Zusammenarbeit!",
			client: "Frau M. aus Frankfurt",
			rating: "4.8",
            image: "https://framerusercontent.com/images/UOKG1WBP4iClBZMcV2ZS55S7Jyw.jpg"
		},
        {
			quote: "Wir hätten nie gedacht, dass eine Kapitalanlage so unkompliziert sein kann. MSH Dresden hat uns alle Sorgen abgenommen und uns zu einer rentablen und nachhaltigen Investition verholfen.",
			client: "Herr J. aus Stuttgart",
			rating: "5.0",
            image: "https://framerusercontent.com/images/WFgDM3tgvDIdwpIYFIwEKYBTlI.jpg"
		},
	];

	return (
		<motion.section
			{...restProps}
			className={cx("framer-1nio7rc", className, classNames)}
			ref={ref}
			style={{...style, backgroundColor: "var(--token-ffffff-100, #FFFFFF)"}}
		>
			<motion.div className="framer-1wkkhf8">
				<motion.div className="framer-nra19a" style={{alignItems: "center"}}>
					<motion.div className="framer-1bve2ih" style={{textAlign: "center"}}>
						<RichText
							className="framer-1jn2rpc"
							style={{ "--framer-text-color": "var(--token-7f5b7011-acac-4051-97f5-7a6faa0b26dc, rgba(18, 18, 18, 0.8))" }}
						>
							<p className="framer-styles-preset-11asbfe">Das sagen unsere Kunden</p>
						</RichText>
						<RichText className="framer-1sxujqk">
							<h2 className="framer-styles-preset-rdnt0j">Vertrauen und Erfolg – bestätigt durch unsere Anleger</h2>
						</RichText>
					</motion.div>
				</motion.div>
				<div className="testimonials-grid">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							teMha2qdT={testimonial.quote}
							uKGEK6V3b={testimonial.client}
							sUF9VhOEt={testimonial.rating}
                            AXKbdYiw6={{ src: testimonial.image, alt: testimonial.client }}
						/>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
});

const css = [
    ".framer-1nio7rc { padding: 100px 50px; }",
    ".framer-1wkkhf8 { display: flex; flex-direction: column; gap: 64px; max-width: 1440px; margin: 0 auto; width: 100%; }",
    ".framer-nra19a { display: flex; flex-direction: column; gap: 24px; align-items: center; }",
    ".framer-1bve2ih { display: flex; flex-direction: column; gap: 8px; max-width: 750px; text-align: center; }",
    ".framer-1jn2rpc .framer-styles-preset-11asbfe { font-size: 16px; }",
    ".framer-1sxujqk .framer-styles-preset-rdnt0j { font-size: 32px; font-weight: 700; }",
    ".testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; justify-items: center; }",
    "@media (max-width: 810px) { .framer-1nio7rc { padding: 80px 30px; } .testimonials-grid { grid-template-columns: 1fr; } }",
    "@media (max-width: 390px) { .framer-1nio7rc { padding: 60px 16px; } }",
];

const FramerComponent = withCSS(Component, css, "framer-testimonials-section");
export default FramerComponent;
