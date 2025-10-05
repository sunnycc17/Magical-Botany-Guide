import { Plant } from "../types/plant";

export async function fetchPlants(): Promise<Plant[]> {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", import.meta.env.VITE_API_AUTH);

  const response = await fetch(
    "https://woocommerce-1181660-4488293.cloudwaysapps.com/wp-json/sunny/v1/botany",
    { method: "GET", headers: myHeaders, redirect: "follow", mode: "cors" }
  );

  if (!response.ok) throw new Error("Failed to fetch plants");
  return response.json();
}

export async function fetchPlantByQuery(
  query: string,
  signal?: AbortSignal
): Promise<Plant[]> {
  if (!query) return [];

  const myHeaders = new Headers();
  myHeaders.append("Authorization", import.meta.env.VITE_API_AUTH);

  const response = await fetch(
    `https://woocommerce-1181660-4488293.cloudwaysapps.com/wp-json/sunny/v1/botany/${query}`,
    { method: "GET", headers: myHeaders, redirect: "follow", mode: "cors", signal }
  );

  if (!response.ok) throw new Error("Failed to fetch plants");
  return response.json();
}
