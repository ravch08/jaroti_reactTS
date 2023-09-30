import supabase from "./supabase";

export async function getCategory() {
	let { data: categoryItems, error } = await supabase.from("categoryItems").select("*");

	if (error) {
		console.error(error);
		throw new Error("Cannot load Category Item!");
	}

	return categoryItems;
}
