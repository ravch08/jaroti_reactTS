import supabase from "./supabase";

export async function getTeams() {
	let { data: teamItems, error } = await supabase.from("teamItems").select("*");

	if (error) {
		console.error(error);
		throw new Error("Cannot load Team Items!");
	}

	return teamItems;
}
