import React from "react";

export type ProductProps = {
	id?: number;
	imgSrc: string;
	title: string;
	badge: string;
	price: number;
	category?: string;
	discount?: number;
	quantity?: number;
	featured?: boolean;
	inWishlist: boolean;
	priceCrossed?: number;
	addToCart: () => void;
	addToWishlist: () => void;
	deleteFromWishlist: () => void;
};

export type CompanyFeatureProps = {
	id?: number;
	title: string;
	svg: React.JSX.Element;
};

export type TeamProps = {
	id?: number;
	imgSrc: string;
	title: string;
	designation: string;
};

export type SidebarHeaderProps = {
	quantity: number;
	closeSidebar: () => void;
};

export type SidebarBodyProps = {
	cart: ProductProps[];
	add: () => void;
	delete: () => void;
	subtract: () => void;
};

export type SidebarFooterProps = {
	price: number;
	closeSidebar: () => void;
};

export type InitialStateProps = {
	cart: ProductProps[];
	totalPrice: number;
	items: ProductProps;
	totalCartQuantity: number;
};
