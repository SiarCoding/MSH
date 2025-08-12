// @ts-nocheck
/* eslint-disable */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cx, getFonts, RichText, withCSS, useVariantState, addPropertyControls, ControlType, useActiveVariantCallback, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, withFX } from "unframer";
import { Icon } from "./chunks/chunk-BTSBQWPZ.js";

// Accordion Item Component
const AccordionItem = React.forwardRef(function (props, ref) {
    const { title, description, isOpen, onClick } = props;
    return (
        <motion.div
            className="framer-iumzl2"
            data-border={true}
            onClick={onClick}
            style={{
                "--border-bottom-width": "1px",
                "--border-color": "rgba(18, 18, 18, 0.3)",
                "--border-style": "solid",
                cursor: "pointer",
                width: "100%",
            }}
        >
            <motion.div className="framer-dhe59s">
                <RichText className="framer-qo2647">
                    <motion.h6 className="framer-styles-preset-15z4rdv">{title}</motion.h6>
                </RichText>
                <motion.div style={{ rotate: isOpen ? 45 : 0, transition: 'transform 0.2s' }}>
                    <Icon color="rgb(18, 18, 18)" iconSelection="Plus" />
                </motion.div>
            </motion.div>
            {isOpen && (
                <RichText className="framer-1h5ou8i">
                    <motion.p className="framer-styles-preset-144gy8o">{description}</motion.p>
                </RichText>
            )}
        </motion.div>
    );
});

// Main FAQ Component
const Component = React.forwardRef(function (props, ref) {
	const { style, className, layoutId, variant, ...restProps } = props;
    const [openIndex, setOpenIndex] = React.useState(null);

	const faqs = [
		{
			q: "Was ist eine Denkmalimmobilie?",
			a: "Eine Denkmalimmobilie ist ein Gebäude, das aufgrund seiner historischen, künstlerischen oder städtebaulichen Bedeutung unter Denkmalschutz steht. Kapitalanleger profitieren von besonderen steuerlichen Vorteilen bei der Sanierung solcher Objekte."
		},
		{
			q: "Welche Steuervorteile bietet die Denkmal-AfA?",
			a: "Die Denkmal-AfA (Abschreibung für Abnutzung) ermöglicht es Kapitalanlegern, die Sanierungskosten über einen Zeitraum von 12 Jahren vollständig von der Steuer abzusetzen. Dies reduziert die Steuerlast erheblich und steigert die Rendite."
		},
		{
			q: "Wie hoch ist die Rendite bei Denkmalimmobilien?",
			a: "Die Rendite setzt sich aus Mieteinnahmen und Steuervorteilen zusammen und liegt oft über der von Neubauimmobilien. Die genaue Höhe hängt vom Objekt und Ihrer persönlichen steuerlichen Situation ab."
		},
		{
			q: "Welche Standorte sind für eine Kapitalanlage besonders attraktiv?",
			a: "Wir konzentrieren uns auf wachstumsstarke Standorte wie Dresden, Leipzig und Berlin. Diese Städte bieten eine hohe Nachfrage nach Wohnraum und ein großes Potenzial für Wertsteigerungen."
		},
		{
			q: "Wie läuft die Sanierung ab?",
			a: "Wir arbeiten mit erfahrenen Architekten und Handwerkern zusammen, die auf die Sanierung von Denkmalimmobilien spezialisiert sind. Die Sanierung erfolgt in enger Abstimmung mit den Denkmalschutzbehörden, um den historischen Charakter zu erhalten."
		},
		{
			q: "Was passiert nach dem Kauf und der Sanierung?",
			a: "Auf Wunsch übernehmen wir für Sie die Vermietung und Verwaltung Ihrer Immobilie. Unser Rundum-Sorglos-Paket stellt sicher, dass Sie sich um nichts kümmern müssen und eine nachhaltige Rendite erzielen."
		}
	];

	return (
		<motion.section
			{...restProps}
			className={cx("framer-1nio7rc", className)}
			ref={ref}
			id="faq"
			style={{...style, backgroundColor: "var(--token-f3f4f7-100, #F3F4F7)"}}
		>
			<motion.div className="framer-1wkkhf8">
				<motion.div className="framer-nra19a">
					<motion.div className="framer-1bve2ih">
						<RichText className="framer-1jn2rpc">
							<p className="framer-styles-preset-11asbfe">FAQ</p>
						</RichText>
						<RichText className="framer-1sxujqk">
							<h2 className="framer-styles-preset-rdnt0j">Häufig gestellte Fragen</h2>
						</RichText>
					</motion.div>
				</motion.div>
				<div className="faq-accordion">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							title={faq.q}
							description={faq.a}
							isOpen={openIndex === index}
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
						/>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
});

const css = [
	".framer-1nio7rc { padding: 100px 50px; }",
    ".framer-1wkkhf8 { display: flex; flex-direction: column; gap: 64px; max-width: 900px; margin: 0 auto; width: 100%; }",
    ".framer-nra19a { display: flex; flex-direction: column; gap: 24px; align-items: center; text-align: center; }",
    ".framer-1bve2ih { display: flex; flex-direction: column; gap: 8px; max-width: 750px; }",
    ".framer-1jn2rpc .framer-styles-preset-11asbfe { font-size: 16px; color: rgba(18, 18, 18, 0.8); }",
    ".framer-1sxujqk .framer-styles-preset-rdnt0j { font-size: 32px; font-weight: 700; color: #121212; }",
    ".faq-accordion { display: flex; flex-direction: column; width: 100%; }",
    // Accordion Item styles
    ".framer-iumzl2 { padding: 24px 0; }",
    ".framer-dhe59s { display: flex; justify-content: space-between; align-items: center; width: 100%; }",
    ".framer-qo2647 .framer-styles-preset-15z4rdv { font-size: 18px; font-weight: 600; color: #121212; }",
    ".framer-1h5ou8i { margin-top: 16px; }",
    ".framer-1h5ou8i .framer-styles-preset-144gy8o { font-size: 16px; color: rgba(18, 18, 18, 0.8); line-height: 1.5; }",
    // Responsive
    "@media (max-width: 810px) { .framer-1nio7rc { padding: 80px 30px; } }",
    "@media (max-width: 390px) { .framer-1nio7rc { padding: 60px 16px; } }",
];

const FramerComponent = withCSS(Component, css, "framer-faq-section");
export default FramerComponent;
