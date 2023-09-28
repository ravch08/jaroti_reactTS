import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarCart = () => {
	return (
		<Stack direction={"column"} alignItems={"flex-start"} justifyContent={"space-between"}>
			<div className="cart-sidebar-content">
				<Stack p={"2rem 2rem"} direction={"row"} alignItems={"center"} className="sidebar-header" justifyContent={"space-between"}>
					<Typography variant="h4" component={"h2"}>
						Shopping Cart (<span>4</span>)
					</Typography>
					<button className="sidebar-close">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 36 36">
							<title>close</title>
							<g fill="#212121" className="nc-icon-wrapper">
								<path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
							</g>
						</svg>
					</button>
				</Stack>

				<div className="sidebar-body">
					<div className="cart-info">
						<div className="cart-progress-bar">
							<span className="bar"></span>
							<div className="truck">
								<svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M18.8015 6.61104L17.711 5.59952C17.6367 5.53058 17.5796 5.44506 17.5446 5.34991L16.6882 3.0245C16.5657 2.69678 16.3463 2.41417 16.0591 2.21432C15.772 2.01448 15.4307 1.90691 15.0809 1.90594H13.7833V1.54193C13.7833 1.38539 13.7212 1.23526 13.6105 1.12457C13.4998 1.01388 13.3496 0.951691 13.1931 0.951691H5.35161C5.23493 0.950317 5.12232 0.9945 5.03771 1.07485C4.9531 1.1552 4.90316 1.26538 4.89851 1.38197C4.89743 1.44025 4.90796 1.49816 4.92951 1.55232C4.95106 1.60648 4.98319 1.65581 5.02402 1.69741C5.06485 1.73901 5.11356 1.77206 5.16731 1.79462C5.22106 1.81718 5.27876 1.8288 5.33705 1.8288H12.9062V5.63436C12.9062 5.7909 12.9684 5.94103 13.0791 6.05172C13.1898 6.16242 13.3399 6.2246 13.4964 6.2246H17.061L18.1197 7.17734V10.7313H17.1599C17.0643 10.3131 16.8296 9.93972 16.4942 9.6723C16.1587 9.40487 15.7424 9.25924 15.3134 9.25924C14.8845 9.25924 14.4682 9.40487 14.1327 9.6723C13.7973 9.93972 13.5626 10.3131 13.467 10.7313H10.5136C10.4181 10.3131 10.1833 9.93972 9.84791 9.6723C9.51247 9.40487 9.09619 9.25924 8.66719 9.25924C8.2382 9.25924 7.82191 9.40487 7.48648 9.6723C7.15104 9.93972 6.91633 10.3131 6.82075 10.7313H5.35157C5.23488 10.7299 5.12226 10.7741 5.03765 10.8545C4.95305 10.9349 4.90313 11.0451 4.89851 11.1617C4.89743 11.22 4.90796 11.2779 4.92951 11.332C4.95106 11.3862 4.98319 11.4355 5.02402 11.4771C5.06485 11.5187 5.11357 11.5518 5.16731 11.5743C5.22106 11.5969 5.27876 11.6085 5.33705 11.6085H6.82814C6.92972 12.0194 7.16602 12.3845 7.49933 12.6455C7.83265 12.9064 8.24376 13.0482 8.66707 13.0482C9.09038 13.0482 9.5015 12.9064 9.83481 12.6455C10.1681 12.3845 10.4044 12.0194 10.506 11.6085H13.4745C13.576 12.0194 13.8123 12.3845 14.1457 12.6455C14.479 12.9064 14.8901 13.0482 15.3134 13.0482C15.7367 13.0482 16.1478 12.9064 16.4811 12.6455C16.8144 12.3845 17.0507 12.0194 17.1523 11.6085H18.4066C18.5631 11.6085 18.7133 11.5463 18.824 11.4356C18.9346 11.325 18.9968 11.1748 18.9968 11.0183V7.04972C18.9968 6.967 18.9794 6.88521 18.9457 6.80965C18.9121 6.73409 18.8629 6.66642 18.8015 6.61104ZM13.7833 5.34759V2.78302H15.0809C15.2517 2.78348 15.4183 2.836 15.5585 2.93358C15.6987 3.03116 15.8059 3.16915 15.8656 3.32917L16.6132 5.34759H13.7833ZM8.66709 12.171C8.46588 12.171 8.26919 12.1113 8.10189 11.9995C7.9346 11.8877 7.8042 11.7288 7.72721 11.543C7.65021 11.3571 7.63007 11.1525 7.66932 10.9552C7.70858 10.7578 7.80547 10.5766 7.94775 10.4343C8.09003 10.292 8.2713 10.1951 8.46864 10.1559C8.66598 10.1166 8.87053 10.1368 9.05642 10.2138C9.24231 10.2908 9.40119 10.4212 9.51297 10.5885C9.62475 10.7558 9.68441 10.9525 9.68441 11.1537C9.6841 11.4234 9.57682 11.682 9.3861 11.8727C9.19538 12.0634 8.9368 12.1707 8.66709 12.171ZM15.3134 12.171C15.1122 12.171 14.9155 12.1113 14.7482 11.9995C14.5809 11.8877 14.4505 11.7289 14.3735 11.543C14.2965 11.3571 14.2764 11.1525 14.3156 10.9552C14.3549 10.7578 14.4518 10.5766 14.594 10.4343C14.7363 10.292 14.9176 10.1951 15.1149 10.1559C15.3123 10.1166 15.5168 10.1368 15.7027 10.2138C15.8886 10.2908 16.0475 10.4212 16.1593 10.5885C16.271 10.7558 16.3307 10.9525 16.3307 11.1537C16.3304 11.4234 16.2231 11.682 16.0324 11.8727C15.8417 12.0634 15.5831 12.1707 15.3134 12.171Z"
										strokeWidth="0.3"
									></path>
									<path
										d="M3.46986 4.28249H8.44355C8.55988 4.28249 8.67144 4.23628 8.7537 4.15403C8.83595 4.07177 8.88216 3.96021 8.88216 3.84388C8.88216 3.72756 8.83595 3.61599 8.7537 3.53374C8.67144 3.45148 8.55988 3.40527 8.44355 3.40527H3.46986C3.35353 3.40527 3.24197 3.45148 3.15972 3.53374C3.07746 3.61599 3.03125 3.72756 3.03125 3.84388C3.03125 3.96021 3.07746 4.07177 3.15972 4.15403C3.24197 4.23628 3.35353 4.28249 3.46986 4.28249Z"
										strokeWidth="0.3"
									></path>
									<path
										d="M8.87579 6.27994C8.87579 6.16361 8.82958 6.05205 8.74732 5.96979C8.66507 5.88754 8.55351 5.84133 8.43718 5.84133H1.43472C1.3768 5.84081 1.31934 5.85177 1.26567 5.87358C1.21201 5.89539 1.16319 5.92761 1.12204 5.96839C1.0809 6.00917 1.04824 6.05769 1.02595 6.11116C1.00366 6.16463 0.992188 6.22199 0.992188 6.27992C0.992188 6.33785 1.00366 6.3952 1.02595 6.44867C1.04824 6.50214 1.0809 6.55067 1.12204 6.59145C1.16319 6.63223 1.21201 6.66445 1.26567 6.68626C1.31934 6.70807 1.3768 6.71903 1.43472 6.71851H8.43718C8.5535 6.71851 8.66506 6.6723 8.74731 6.59006C8.82957 6.50781 8.87578 6.39626 8.87579 6.27994Z"
										strokeWidth="0.3"
									></path>
									<path
										d="M6.10138 8.71641C6.10138 8.65881 6.09003 8.60178 6.06799 8.54857C6.04595 8.49536 6.01365 8.44701 5.97292 8.40629C5.9322 8.36556 5.88385 8.33326 5.83064 8.31122C5.77743 8.28918 5.7204 8.27783 5.6628 8.27783H2.61437C2.49873 8.27887 2.38818 8.32553 2.30677 8.40767C2.22536 8.48981 2.17969 8.60078 2.17969 8.71642C2.17969 8.83207 2.22536 8.94304 2.30677 9.02518C2.38818 9.10732 2.49873 9.15398 2.61437 9.15502H5.6628C5.77912 9.15501 5.89068 9.10879 5.97292 9.02654C6.05517 8.94428 6.10138 8.83273 6.10138 8.71641Z"
										strokeWidth="0.3"
									></path>
								</svg>
							</div>
						</div>
						<p>Congratulations! You`ve got free Shipping!</p>
					</div>

					<div className="cart-product-list">
						{/* {carts.map(item => {

              const productSubtotal = parseFloat((item.price * item.cartQuantity).toFixed(2));

              return (
                <React.Fragment key={item.id}>
                  <Stack
                    direction={'row'}
                    className="cart-products"
                    justifyContent={'space-between'}
                  >
                    <Stack direction={"row"} justifyContent={'space-between'} className="cart-product-item">
                      <figure><img src={item.imgSrc1} alt={item.title} /></figure>

                      <Stack direction={'column'} justifyContent={'center'}>
                        <Typography variant='h5' component={'h2'}>{item.title}</Typography>
                        <p className='price'><span>Price:</span> ${item.price}</p>
                        <p className='price'><span>SubTotal:</span> ${productSubtotal}</p>

                        <Stack
                          spacing={'2rem'}
                          direction={'row'}
                          className="quantity"
                          alignItems={'center'}
                          sx={{ fontSize: '1.5rem', mt: '1rem' }}
                        >
                          <p className='quantity-label'><span>Quantity:</span> {item.quantity}</p>

                          <Stack
                            direction={'row'}
                            alignItems={'center'}
                            className="quantity-item"
                            justifyContent={'space-around'}
                          >
                            <div className="subtract-quantity" onClick={() => { dispatch(decrementQuantity(item.id)) }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                            </div>
                            <label htmlFor="product_quantity">Product Quantity</label>
                            <input type="text" name="product_quantity" value={item.cartQuantity} onChange={() => null} />
                            <div className="add-quantity" onClick={() => { dispatch(incrementQuantity(item.id)) }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                            </div>
                          </Stack>

                        </Stack>
                      </Stack>
                    </Stack>
                    <div className="btn-delete" onClick={() => dispatch(deleteProduct(item.id))}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={'14'} viewBox="0 0 448 512"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" /></svg>
                    </div>
                  </Stack>
                  <hr className='cart-hr' />
                </React.Fragment>
              )
            })} */}
					</div>
				</div>
			</div>

			<div className="sidebar-footer">
				<Stack mb={"1rem"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
					<span>Sub Total</span>
					<span>$5</span>
				</Stack>

				<Stack gap={"1rem"} direction={"row"} alignItems={"center"} justifyContent={"flex-start"}>
					<input type="checkbox" name="checkBox" />
					<span>
						I agree with the{" "}
						<a href="#!" className="terms">
							Terms & Conditions
						</a>
					</span>
				</Stack>

				<Link to="cart" className="btn btn-dark">
					View Cart
				</Link>
			</div>
		</Stack>
	);
};

export default SidebarCart;
