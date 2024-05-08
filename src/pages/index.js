import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, LinkBox, Box, Section, Button, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GiFairyWings } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { MdComputer, MdTab, MdTimelapse, MdViewCarousel, MdToday } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-3">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Company
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="fi"
					icon={FiMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="600 16px sans-serif"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override slot="item-active" border-width={0} />
						<Override slot="item" padding="6px 8px 6px 8px" />
						<Override slot="link-active" cursor="default" color="--primary" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<Link
							font="--lead"
							padding="10px 0px 10px 0px"
							margin="0px 0px 6px 0px"
							href="tel:12345678"
							text-decoration-line="initial"
							color="--dark"
							lg-margin="0px 0px 24px 0px"
						>
							+1(234)567-89-00
						</Link>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--darkL2" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="80px 0 80px 0" background="#181736" quarkly-title="Hero-20">
			<Override slot="SectionContent" width="100%" flex-direction="row" max-width="100%" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
				lg-overflow-x="hidden"
				lg-overflow-y="hidden"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					lg-width="100%"
					lg-padding="0 50px 50px 50px"
					padding="0px 80px 0px 80px"
					sm-padding="0 15px 50px 15px"
				>
					<Icon
						category="gi"
						icon={GiFairyWings}
						size="35px"
						color="#8b76fd"
						margin="0px 0px 45px 0px"
					/>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						margin="0px 0px 30px 0px"
						border-radius="25px"
						border-color="--color-lightD2"
						sm-flex-direction="column"
						align-items="center"
						sm-align-items="flex-start"
					>
						<Text
							margin="0px 30px 0px 0px"
							color="#c4b5fd"
							font="normal 400 16px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							background="#26255a"
							padding="5px 15px 5px 15px"
							border-radius="15px"
						>
							SaaS company
						</Text>
						<Link href="#" color="#d5dae2" font="normal 400 16px/1.5 --fontFamily-sans" text-decoration-line="initial">
							Read more
						</Link>
					</Box>
					<Text margin="0px 0px 20px 0px" font="normal 700 56px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans" color="--light">
						CloudifyPro is a SaaS company
					</Text>
					<Text margin="0px 0px 50px 0px" font="--lead" color="#d5dae2">
						Our platform offers a range of tools and services, including project management, collaboration, communication, and data analytics. With Cloudify Pro, businesses can streamline their workflows, reduce costs, and improve overall efficiency.
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						sm-flex-direction="column"
						sm-align-items="stretch"
					>
						<Button
							margin="0px 15px 0px 0px"
							padding="12px 28px 12px 28px"
							background="#8b76fd"
							border-radius="8px"
							font="normal 400 17px/1.5 --fontFamily-sans"
							sm-margin="0px 0 15px 0px"
							transition="background-color 0.2s ease 0s"
							border-color="#8b76fd"
							border-width="2px"
							border-style="solid"
							hover-background="rgba(139, 118, 253, 0)"
						>
							Get Started
						</Button>
						<Button
							margin="0px 0 0px 0px"
							padding="12px 28px 12px 28px"
							background="rgba(0, 119, 204, 0)"
							color="#d5dae2"
							font="normal 400 17px/1.5 --fontFamily-sans"
						>
							Live Demo
						</Button>
					</Box>
				</Box>
				<Image
					src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10:55:25.060Z"
					display="block"
					width="50%"
					object-fit="cover"
					lg-width="100%"
					object-position="0 0"
					border-radius="25px 0 0 25px"
					background="--color-lightD1"
					lg-margin="0px 0px 0px 50px"
					sm-margin="0px 0px 0px 15px"
					srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/3090699_447.png?v=2023-05-31T10%3A55%3A25.060Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" quarkly-title="Advantages/Features-21">
			<Override slot="SectionContent" max-width="1100px" sm-min-width="280px" />
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="64px"
				md-grid-template-columns="1fr"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-gap="48px"
			>
				<Box justify-content="flex-start" flex-direction="column" display="flex" align-items="flex-start">
					<Box margin="0px 0px 16px 0px" border-radius="50%" padding="5px 5px 5px 5px" position="relative">
						<Box
							width="100%"
							height="100%"
							position="absolute"
							top="0px"
							left="0px"
							background="--color-indigo"
							opacity="0.5"
							border-radius="50%"
						/>
						<Icon
							category="md"
							icon={MdComputer}
							color="--indigo"
							size="48px"
							padding="6px 6px 6px 6px"
							position="static"
						/>
					</Box>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Responsive Layout
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex" align-items="flex-start">
					<Box margin="0px 0px 16px 0px" border-radius="50%" padding="5px 5px 5px 5px" position="relative">
						<Box
							width="100%"
							height="100%"
							position="absolute"
							top="0px"
							left="0px"
							background="--color-red"
							opacity="0.5"
							border-radius="50%"
						/>
						<Icon
							category="io"
							icon={IoIosStats}
							color="--red"
							size="48px"
							padding="6px 6px 6px 6px"
							position="static"
						/>
					</Box>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Saas Page Analysis
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex" align-items="flex-start">
					<Box margin="0px 0px 16px 0px" border-radius="50%" padding="5px 5px 5px 5px" position="relative">
						<Box
							width="100%"
							height="100%"
							position="absolute"
							top="0px"
							left="0px"
							background="--color-green"
							opacity="0.5"
							border-radius="50%"
						/>
						<Icon
							category="md"
							icon={MdTab}
							color="--green"
							size="48px"
							padding="6px 6px 6px 6px"
							position="static"
						/>
					</Box>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Collabration System
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex" align-items="flex-start">
					<Box margin="0px 0px 16px 0px" border-radius="50%" padding="5px 5px 5px 5px" position="relative">
						<Box
							width="100%"
							height="100%"
							position="absolute"
							top="0px"
							left="0px"
							background="--color-orange"
							opacity="0.5"
							border-radius="50%"
						/>
						<Icon
							category="md"
							icon={MdTimelapse}
							color="--orange"
							size="48px"
							padding="6px 6px 6px 6px"
							position="static"
						/>
					</Box>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Online Security
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex" align-items="flex-start">
					<Box margin="0px 0px 16px 0px" border-radius="50%" padding="5px 5px 5px 5px" position="relative">
						<Box
							width="100%"
							height="100%"
							position="absolute"
							top="0px"
							left="0px"
							background="--color-purple"
							opacity="0.5"
							border-radius="50%"
						/>
						<Icon
							category="md"
							icon={MdViewCarousel}
							color="--purple"
							size="48px"
							padding="6px 6px 6px 6px"
							position="static"
						/>
					</Box>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Easily Reach Out
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex" align-items="flex-start">
					<Box margin="0px 0px 16px 0px" border-radius="50%" padding="5px 5px 5px 5px" position="relative">
						<Box
							width="100%"
							height="100%"
							position="absolute"
							top="0px"
							left="0px"
							background="--color-primary"
							opacity="0.5"
							border-radius="50%"
						/>
						<Icon
							category="md"
							icon={MdToday}
							color="--primary"
							size="48px"
							padding="6px 6px 6px 6px"
							position="static"
						/>
					</Box>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Easy Communication
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="90px 0 100px 0" quarkly-title="List-4">
			<Text margin="0px 0px 90px 0px" text-align="center" font="normal 600 42px/1.2 --fontFamily-sans" md-margin="0px 0px 60px 0px">
				Reasons to choose our service
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="56px 34px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="36px 0"
				md-grid-gap="40px 25px"
			>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						1
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans">
							Quality
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#474a4d">
							Our production company specializes in providing cutting-edge technology solutions to businesses of all sizes.{" "}
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						2
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans">
							Support
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#474a4d">
							We work closely with our clients to understand their needs{" "}
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						3
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans">
							Flexibility
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#474a4d">
							Our services are designed to be flexible and scalable, so they can grow and evolve as our clients' businesses do.{" "}
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						4
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans">
							Experience
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#474a4d">
							We pride ourselves on our commitment to customer satisfaction and our ability to deliver results.{" "}
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						5
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans">
							Presents
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#474a4d">
							Our team is passionate about technology and stays up-to-date with the latest trends and developments in the industry.{"  "}
						</Text>
					</Box>
				</Box>
				<Box min-width="10px" min-height="10px" display="flex">
					<Text
						margin="0px 0 0px 0px"
						display="flex"
						align-items="center"
						justify-content="center"
						font="normal 500 20px/1.2 --fontFamily-sans"
						background="#cbcfd5"
						border-radius="50%"
						width="60px"
						height="60px"
						min-width="60px"
					>
						6
					</Text>
					<Box min-width="10px" min-height="10px" margin="0px 0px 0px 24px">
						<Text margin="0px 0px 15px 0px" font="normal 500 24px/1.2 --fontFamily-sans">
							Efficientcy
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#474a4d">
							Contact us today to learn more about our services and how we can help your business succeed.{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Partners
				</Text>
				<Text
					margin="25px 0px 0px 0px"
					font="--lead"
					display="block"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
					width="60%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box margin="40px 0px 0px 0px" display="flex" flex-direction="row" flex-wrap="wrap">
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2025.svg?v=2021-08-27T23:06:50.611Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2026.svg?v=2021-08-27T23:06:50.617Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2027.svg?v=2021-08-27T23:06:50.623Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2028.svg?v=2021-08-27T23:06:50.609Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2029.svg?v=2021-08-27T23:06:50.627Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2030.svg?v=2021-08-27T23:06:50.610Z" border-radius="16px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#0c1128" quarkly-title="Footer-11" md-padding="40px 0 40px 0">
			<Box
				display="flex"
				lg-width="100%"
				flex-direction="row"
				lg-flex-direction="row"
				justify-content="space-between"
				width="100%"
				padding="0 0px 0 0px"
				md-padding="0 0px 30px 0px"
				lg-padding="0 0px 50px 0px"
				sm-flex-direction="column"
				md-flex-direction="column"
				md-display="grid"
				md-grid-gap="54px"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					width="30%"
					display="flex"
					lg-width="50%"
					sm-width="100%"
					flex-direction="column"
					padding="0px 50px 0px 0px"
					sm-margin="0px 0px 0px 0px"
				>
					<LinkBox
						justify-content="center"
						border-radius="100%"
						width="36px"
						height="36px"
						align-items="center"
						display="flex"
						href="#"
					>
						<Icon
							category="gi"
							icon={GiFairyWings}
							color="#6d32ec"
							size="37px"
							margin="0px 0px 0 0px"
						/>
					</LinkBox>
					<Text
						margin="40px 0px 35px 0px"
						font="--base"
						color="#c3c8d0"
						sm-text-align="left"
						sm-margin="25px 0px 20px 0px"
					>
						It is the best way to improve your professional skills and become more valued
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="grid"
						grid-template-columns="repeat(5, 1fr)"
						grid-gap="16px 24px"
						md-align-self="flex-start"
						align-self="flex-start"
					>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaFacebook}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaInstagram}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaTwitterSquare}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaGithub}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
						<LinkBox href="/">
							<Icon
								category="fa"
								icon={FaYoutube}
								size="24px"
								color="#c3c8d0"
								hover-color="#a78bfa"
								transition="background-color 1s ease 0s"
							/>
						</LinkBox>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="36px 34px"
					lg-align-items="start"
					md-grid-template-columns="repeat(4, 1fr)"
					md-grid-gap="36px 34px"
					sm-grid-gap="36px 34px"
					sm-grid-template-columns="repeat(2, 1fr)"
				>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Solution
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Marketing
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Analytics
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Commerce
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Insights
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Support
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Pricing
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Documentation
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Guides
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							API status
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Company
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							About
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Blog
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Jobs
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Press
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Partners
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						lg-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Legal
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Claim
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Privacy
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Terms
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"663ae8956bbd2000236a6774"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});