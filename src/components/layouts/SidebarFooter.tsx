import { useState } from "react";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SidebarFooterProps } from "../../types/types";

const SidebarFooter = (props: SidebarFooterProps) => {
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckboxChange = (e) => setIsChecked(e.target.checked);

	return (
		<div className="sidebar-footer">
			<Stack mb={"1rem"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
				<span>Sub Total</span>
				<span>${props.price}</span>
			</Stack>

			<Stack gap={"1rem"} direction={"row"} alignItems={"center"} justifyContent={"flex-start"}>
				<input
					type="checkbox"
					name="checkBox"
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				<span>
					I agree with the{" "}
					<a href="#!" className="terms">
						Terms & Conditions
					</a>
				</span>
			</Stack>

			<Link to={!isChecked ? "#!" : "cart"} className="btn-disabled">
				<button disabled={!isChecked} className="btn btn-dark" onClick={() => props.closeSidebar()}>
					View Cart
				</button>
			</Link>
		</div>
	);
};

export default SidebarFooter;
