import { Stack, Typography } from "@mui/material";
import { SidebarHeaderProps } from "../../types/types";

const SidebarHeader = (props: SidebarHeaderProps) => {
	return (
		<Stack
			width={"100%"}
			p={"2rem 2rem"}
			direction={"row"}
			alignItems={"center"}
			className="sidebar-header"
			justifyContent={"space-between"}
		>
			<Typography variant="h4" component={"h2"}>
				Shopping Cart (<span>{props.quantity}</span>)
			</Typography>
			<button className="sidebar-close" onClick={() => props.closeSidebar()}>
				<svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 36 36">
					<g fill="#212121" className="nc-icon-wrapper">
						<path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
					</g>
				</svg>
			</button>
		</Stack>
	);
};

export default SidebarHeader;
