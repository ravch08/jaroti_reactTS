import { Stack } from "@mui/material";
import { SidebarBody, SidebarFooter, SidebarHeader } from "../utils/helper";

const SidebarCart = () => {
	return (
		<Stack direction={"column"} alignItems={"flex-start"} justifyContent={"space-between"}>
			<SidebarHeader />
			<SidebarBody />
			<SidebarFooter />
		</Stack>
	);
};

export default SidebarCart;
