import supabase from "./supabase";

export async function getBanner() {
	let { data: bannerItems, error } = await supabase.from("bannerItems").select("*");

	if (error) {
		console.error(error);
		throw new Error("Cannot load Banner items!");
	}

	return bannerItems;
}
