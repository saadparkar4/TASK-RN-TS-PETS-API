import axios from "axios";
import instance from ".";

const getAllPets = async () => {
	const response = await instance.get("/pets");
	return response.data;
};

const getOnePet = async (id: string) => {
	const response = await instance.get(`/pets/${id}`);
	return response.data;
};

const createPet = async (id: number, name: string, description: string, type: string, image: string, image2: string) => {
	// const create = axios.post(`/pets/${body}`);
	const response = await instance.post(`/pets/${id}`, {
		id: id,
		name: name,
		description: description,
		type: type,
		image: image,
		image2: image2,
	});
	return response.data;
};
export { getAllPets, getOnePet, createPet };
