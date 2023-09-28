import supabase from "./supabase";

export async function getProducts() {
	let { data: productItems, error } = await supabase.from("productItems").select("*");

	if (error) {
		console.error(error);
		throw new Error("Cannot load Product Items!");
	}

	return productItems;
}
