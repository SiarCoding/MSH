// @ts-nocheck
/* eslint-disable */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cx, RichText, withCSS, useVariantState, withFX, SmartComponentScopedContainer } from "unframer";
import { Video } from "./chunks/chunk-G73PZF75.js";

const Component = React.forwardRef(function (props, ref) {
	const { style, className, ...restProps } = props;

	return (
		<motion.section
			{...restProps}
			className={cx("framer-video-section", className)}
			ref={ref}
			style={style}
		>
			<motion.div className="framer-1wkkhf8">
				<motion.div className="framer-nra19a">
					<motion.div className="framer-1bve2ih">
						<RichText className="framer-1jn2rpc">
							<p className="framer-styles-preset-11asbfe">Architektur und Lage</p>
						</RichText>
						<RichText className="framer-1sxujqk">
							<h2 className="framer-styles-preset-rdnt0j">Einzigartige Immobilien in besten Lagen</h2>
						</RichText>
						<RichText className="framer-117oirn">
							<p className="framer-styles-preset-144gy8o">
								Der Wert einer Immobilie wird maßgeblich von ihrer Lage und architektonischen Qualität bestimmt. Wir wählen unsere Objekte sorgfältig aus und legen größten Wert auf eine hochwertige Sanierung, die den historischen Charme bewahrt und modernen Wohnkomfort schafft.
							</p>
						</RichText>
					</motion.div>
				</motion.div>
				<div className="video-container">
                    <SmartComponentScopedContainer
                        className={"framer-s1yp9s-container"}
                    >
                        <Video
                            backgroundColor={"rgba(0, 0, 0, 0)"}
                            borderRadius={10}
                            controls={true}
                            height={"100%"}
                            loop={true}
                            muted={true}
                            objectFit={"cover"}
                            playing={false}
                            posterEnabled={true}
                            srcUrl={
                                "https://res.cloudinary.com/dq4a1b90e/video/upload/v1744300719/7021949_Architect_Group_1920x1080_oserot_1_ezr7ux.mp4"
                            }
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                            width={"100%"}
                        />
                    </SmartComponentScopedContainer>
                </div>
			</motion.div>
		</motion.section>
	);
});

const css = [
    ".framer-video-section { padding: 100px 50px; background-color: #f3f4f7; }",
    ".framer-1wkkhf8 { display: flex; flex-direction: column; gap: 64px; max-width: 1200px; margin: 0 auto; width: 100%; }",
    ".framer-nra19a { display: flex; flex-direction: column; gap: 24px; align-items: center; text-align: center; }",
    ".framer-1bve2ih { display: flex; flex-direction: column; gap: 8px; max-width: 750px; }",
    ".framer-1jn2rpc .framer-styles-preset-11asbfe { font-size: 16px; color: rgba(18, 18, 18, 0.8); }",
    ".framer-1sxujqk .framer-styles-preset-rdnt0j { font-size: 32px; font-weight: 700; color: #121212; }",
    ".framer-117oirn .framer-styles-preset-144gy8o { font-size: 16px; color: rgba(18, 18, 18, 0.8); line-height: 1.6; }",
    ".video-container { width: 100%; max-width: 900px; margin: 0 auto; aspect-ratio: 16 / 9; border-radius: 10px; overflow: hidden; }",
    ".framer-s1yp9s-container { width: 100%; height: 100%; }",
    "@media (max-width: 810px) { .framer-video-section { padding: 80px 30px; } }",
    "@media (max-width: 390px) { .framer-video-section { padding: 60px 16px; } }",
];

const FramerComponent = withCSS(Component, css, "framer-video-section");
export default FramerComponent;
