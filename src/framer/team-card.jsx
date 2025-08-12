// @ts-nocheck
/* eslint-disable */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cx, RichText, withCSS, Image } from "unframer";

const Component = React.forwardRef(function (props, ref) {
    const { name, title, image, style, className } = props;

    return (
        <motion.div
            ref={ref}
            className={cx("framer-team-card", className)}
            style={style}
        >
            <Image
                background={{
                    src: image,
                    alt: name,
                    fit: "cover",
                }}
                className="team-card-image"
            />
            <div className="team-card-info">
                <RichText>
                    <h3 className="team-card-name">{name}</h3>
                </RichText>
                <RichText>
                    <p className="team-card-title">{title}</p>
                </RichText>
            </div>
        </motion.div>
    );
});

const css = [
    ".framer-team-card { display: flex; flex-direction: column; gap: 16px; text-align: center; align-items: center; }",
    ".team-card-image { width: 150px; height: 150px; border-radius: 50%; overflow: hidden; }",
    ".team-card-info { display: flex; flex-direction: column; gap: 4px; }",
    ".team-card-name { font-size: 20px; font-weight: 600; color: #121212; }",
    ".team-card-title { font-size: 16px; color: rgba(18, 18, 18, 0.8); }",
];

export const TeamCard = withCSS(Component, css, "framer-team-card");
