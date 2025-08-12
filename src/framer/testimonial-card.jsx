// @ts-nocheck
/* eslint-disable */
"use client";

import * as React from "react";
import {
	addFonts,
	addPropertyControls,
	ComponentViewportProvider,
	ControlType,
	cx,
	getFonts,
	getFontsFromSharedStyle,
	getLoadingLazyAtYPosition,
	Image,
	RichText,
	SmartComponentScopedContainer,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import { Icon } from "./chunks/chunk-BTSBQWPZ.js";
import {
	className as className4,
	css as css4,
} from "./chunks/chunk-4KZCCVSQ.js";
import {
	className as className3,
	css as css3,
} from "./chunks/chunk-2GNPAKKJ.js";


const PhosphorFonts = getFonts(Icon);
const cycleOrder = ["faHZgdzRi", "MijuxnHlv"];
const serializationHash = "framer-9vZg2";
const variantClassNames = {
	faHZgdzRi: "framer-v-17y5v30",
	MijuxnHlv: "framer-v-mmi052",
};

function addPropertyOverrides(overrides, ...variants) {
	const nextOverrides = {};
	variants?.forEach(
		(variant) => variant && Object.assign(nextOverrides, overrides[variant]),
	);
	return nextOverrides;
}

const transition1 = {
	bounce: 0.2,
	delay: 0,
	duration: 0.4,
	type: "spring",
};

const toResponsiveImage = (value) => {
	if (
		typeof value === "object" &&
		value !== null &&
		typeof value.src === "string"
	) {
		return value;
	}
	return typeof value === "string"
		? {
				src: value,
			}
		: void 0;
};

const Transition = ({ value, children }) => {
	const config = React.useContext(MotionConfigContext);
	const transition = value ?? config.transition;
	const contextValue = React.useMemo(
		() => ({
			...config,
			transition,
		}),
		[JSON.stringify(transition)],
	);
	return (
		<MotionConfigContext.Provider value={contextValue}>
			{children}
		</MotionConfigContext.Provider>
	);
};

const Variants = motion.create(React.Fragment);
const humanReadableVariantMap = {
	"Small White": "MijuxnHlv",
	Default: "faHZgdzRi",
};

const getProps = ({
	clientName,
	height,
	id,
	photo,
	quotes,
	rating,
	width,
	...props
}) => {
	return {
		...props,
		AXKbdYiw6: photo ??
			props.AXKbdYiw6 ?? {
				pixelHeight: 5191,
				pixelWidth: 5213,
				src: "https://framerusercontent.com/images/LMLNF0vU5ySMfVRIW3JtFu5iB78.jpg?scale-down-to=512",
				srcSet:
					"https://framerusercontent.com/images/LMLNF0vU5ySMfVRIW3JtFu5iB78.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/LMLNF0vU5ySMfVRIW3JtFu5iB78.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/LMLNF0vU5ySMfVRIW3JtFu5iB78.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/LMLNF0vU5ySMfVRIW3JtFu5iB78.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/LMLNF0vU5ySMfVRIW3JtFu5iB78.jpg 5213w",
			},
		sUF9VhOEt: rating ?? props.sUF9VhOEt ?? "4.8",
		teMha2qdT:
			quotes ??
			props.teMha2qdT ??
			'"Working with Titen was an exceptional experience, as their team not only brought our vision to life with remarkable creativity and precision but also ensured that every detail, from material selection to spatial planning, reflected our brand identity and functional needs."',
		uKGEK6V3b: clientName ?? props.uKGEK6V3b ?? "Sarah L.",
		variant:
			humanReadableVariantMap[props.variant] ?? props.variant ?? "faHZgdzRi",
	};
};

const createLayoutDependency = (props, variants) => {
	if (props.layoutDependency)
		return variants.join("-") + props.layoutDependency;
	return variants.join("-");
};

const Component = React.forwardRef(function (props, ref) {
    const fallbackRef = React.useRef(null);
	const refBinding = ref ?? fallbackRef;
	const defaultLayoutId = React.useId();
	const { activeLocale, setLocale } = useLocaleInfo();
	const componentViewport = useComponentViewport();
	const {
		style,
		className: className5,
		layoutId,
		variant,
		uKGEK6V3b,
		AXKbdYiw6,
		sUF9VhOEt,
		teMha2qdT,
		...restProps
	} = getProps(props);
	const {
		baseVariant,
		classNames,
		clearLoadingGesture,
		gestureHandlers,
		gestureVariant,
		isLoading,
		setGestureState,
		setVariant,
		variants,
	} = useVariantState({
		cycleOrder,
		defaultVariant: "faHZgdzRi",
		ref: refBinding,
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const sharedStyleClassNames = [className4, className3];
	const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
	return (
		<LayoutGroup id={layoutId ?? defaultLayoutId}>
			<Variants animate={variants} initial={false}>
				<Transition value={transition1}>
					<motion.div
						{...restProps}
						{...gestureHandlers}
						className={cx(
							scopingClassNames,
							"framer-17y5v30",
							className5,
							classNames,
						)}
						data-border={true}
						data-framer-name={"Default"}
						layoutDependency={layoutDependency}
						layoutId={"faHZgdzRi"}
						ref={refBinding}
						style={{
							"--border-bottom-width": "1px",
							"--border-color":
								"var(--token-93add2ba-17c9-4f58-976f-415dbcf07227, rgba(18, 18, 18, 0.05))",
							"--border-left-width": "1px",
							"--border-right-width": "1px",
							"--border-style": "solid",
							"--border-top-width": "1px",
							backdropFilter: "none",
							backgroundColor:
								"var(--token-bcae30db-da05-4a45-9392-f0131d182fb4, rgba(18, 18, 18, 0.05))",
							borderBottomLeftRadius: 10,
							borderBottomRightRadius: 10,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							WebkitBackdropFilter: "none",
							...style,
						}}
						variants={{
							MijuxnHlv: {
								"--border-color":
									"var(--token-50c79ae8-0a22-4d68-a228-74d46b186a11, rgba(255, 255, 255, 0.1))",
								backdropFilter: "blur(8px)",
								backgroundColor:
									"var(--token-2c6f3d7d-74fc-44f7-a008-c31e2c3c4804, rgba(255, 255, 255, 0.05))",
								WebkitBackdropFilter: "blur(8px)",
							},
						}}
						{...addPropertyOverrides(
							{
								MijuxnHlv: {
									"data-framer-name": "Small White",
								},
							},
							baseVariant,
							gestureVariant,
						)}
					>
						<RichText
							__fromCanvasComponent={true}
							className={"framer-19q105"}
							fonts={["Inter"]}
							layoutDependency={layoutDependency}
							layoutId={"L5WpS8Q5l"}
							style={{
								"--framer-link-text-color": "rgb(0, 153, 255)",
								"--framer-link-text-decoration": "underline",
							}}
							text={teMha2qdT}
							variants={{
								MijuxnHlv: {
									"--extracted-r6o4lv":
										"var(--token-2d9fdd1c-9481-4d00-acc8-5058d9aa515e, rgb(255, 255, 255))",
								},
							}}
							verticalAlignment={"top"}
							withExternalLayout={true}
						/>
						<motion.div
							className={"framer-6xw2ey"}
							data-framer-name={"Client Rating"}
							layoutDependency={layoutDependency}
							layoutId={"YfQTHlLQg"}
						>
							<motion.div
								className={"framer-55vb12"}
								data-framer-name={"Client"}
								layoutDependency={layoutDependency}
								layoutId={"bsmwumglK"}
							>
								<Image
									background={{
										alt: "",
										fit: "fill",
										...toResponsiveImage(AXKbdYiw6),
									}}
									className={"framer-1gwt3ku"}
									data-framer-name={"Image"}
									layoutDependency={layoutDependency}
									layoutId={"qMFwuvyJK"}
									style={{
										borderBottomLeftRadius: 50,
										borderBottomRightRadius: 50,
										borderTopLeftRadius: 50,
										borderTopRightRadius: 50,
									}}
								/>
								<RichText
									__fromCanvasComponent={true}
									className={"framer-1dwb3ml"}
									fonts={["Inter"]}
									layoutDependency={layoutDependency}
									layoutId={"yomJvMDoN"}
									style={{
										"--framer-link-text-color": "rgb(0, 153, 255)",
										"--framer-link-text-decoration": "underline",
									}}
									text={uKGEK6V3b}
									verticalAlignment={"top"}
									withExternalLayout={true}
								/>
							</motion.div>
							<motion.div
								className={"framer-1ihxnqb"}
								data-framer-name={"Rating"}
								layoutDependency={layoutDependency}
								layoutId={"YJ_HlPIPo"}
							>
								<ComponentViewportProvider>
									<SmartComponentScopedContainer
										className={"framer-1fb5tyd-container"}
										isAuthoredByUser={true}
										isModuleExternal={true}
										layoutDependency={layoutDependency}
										layoutId={"qhm2PiGBm-container"}
										nodeId={"qhm2PiGBm"}
										rendersWithMotion={true}
										scopeId={"jgBiVIrZi"}
									>
										<Icon
											color={
												"var(--token-8d460569-8739-491b-a250-77004a818d0e, rgb(195, 96, 54))"
											}
											height={"100%"}
											iconSearch={"House"}
											iconSelection={"Star"}
											id={"qhm2PiGBm"}
											layoutId={"qhm2PiGBm"}
											mirrored={false}
											selectByList={true}
											style={{
												height: "100%",
												width: "100%",
											}}
											weight={"fill"}
											width={"100%"}
										/>
									</SmartComponentScopedContainer>
								</ComponentViewportProvider>
								<RichText
									__fromCanvasComponent={true}
									className={"framer-naigtm"}
									fonts={["Inter"]}
									layoutDependency={layoutDependency}
									layoutId={"I0ahW6aiK"}
									style={{
										"--framer-link-text-color": "rgb(0, 153, 255)",
										"--framer-link-text-decoration": "underline",
									}}
									text={sUF9VhOEt}
									verticalAlignment={"top"}
									withExternalLayout={true}
								/>
							</motion.div>
						</motion.div>
					</motion.div>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});

const css = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-9vZg2.framer-1yr0qms, .framer-9vZg2 .framer-1yr0qms { display: block; }",
	".framer-9vZg2.framer-17y5v30 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 18px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); }",
	".framer-9vZg2 .framer-19q105 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
	".framer-9vZg2 .framer-6xw2ey { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
	".framer-9vZg2 .framer-55vb12 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
	".framer-9vZg2 .framer-1gwt3ku { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }",
	".framer-9vZg2 .framer-1dwb3ml, .framer-9vZg2 .framer-naigtm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
	".framer-9vZg2 .framer-1ihxnqb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
	".framer-9vZg2 .framer-1fb5tyd-container { flex: none; height: 14px; position: relative; width: 14px; }",
	".framer-9vZg2.framer-v-mmi052 .framer-19q105 { height: 80px; overflow: hidden; }",
	...css4,
	...css3,
	'.framer-9vZg2[data-border="true"]::after, .framer-9vZg2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];

export const TestimonialCard = withCSS(Component, css, "framer-9vZg2");

TestimonialCard.displayName = "Card/Testimonial";
TestimonialCard.defaultProps = {
	height: 241,
	width: 300,
};

addPropertyControls(TestimonialCard, {
	variant: {
		options: ["faHZgdzRi", "MijuxnHlv"],
		optionTitles: ["Default", "Small White"],
		title: "Variant",
		type: ControlType.Enum,
	},
	uKGEK6V3b: {
		defaultValue: "Sarah L.",
		displayTextArea: false,
		title: "Client Name",
		type: ControlType.String,
	},
	AXKbdYiw6: {
		title: "Photo",
		type: ControlType.ResponsiveImage,
	},
	sUF9VhOEt: {
		defaultValue: "4.8",
		displayTextArea: false,
		title: "Rating",
		type: ControlType.String,
	},
	teMha2qdT: {
		defaultValue:
			'"Working with Titen was an exceptional experience, as their team not only brought our vision to life with remarkable creativity and precision but also ensured that every detail, from material selection to spatial planning, reflected our brand identity and functional needs."',
		displayTextArea: false,
		title: "Quotes",
		type: ControlType.String,
	},
});

addFonts(
	TestimonialCard,
	[
		{
			explicitInter: true,
			fonts: [],
		},
		...PhosphorFonts,
	],
	{
		supportsExplicitInterCodegen: true,
	},
);
