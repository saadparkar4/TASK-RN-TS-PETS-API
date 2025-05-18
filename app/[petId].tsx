import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import pets from "@/data/pets";
import { getAllPets } from "@/api/pets";
import { Pet } from "@/data/interface";

const PetDetails = () => {
	const [displayPets, setDisplayPets] = useState<Pet[]>([]);

	const handlePets = async () => {
		const data = await getAllPets();
		setDisplayPets(data);
	};
	const { PetId } = useLocalSearchParams();
	const pet = displayPets.find((item) => `${item.id}` === PetId);

	handlePets();
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{pet?.name}</Text>
			<Image source={{ uri: pet?.image }} style={styles.image} />
			<Text style={styles.description}> {pet?.description}</Text>
			<Text style={styles.type}>Type: {pet?.type}</Text>

			<View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PetDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f9e3be",
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	description: {
		fontSize: 16,
		marginTop: 10,
		textAlign: "center",
	},
	type: {
		fontSize: 16,
		marginTop: 10,
		textAlign: "center",
	},
	button: {
		backgroundColor: "black",
		padding: 10,
		borderRadius: 10,
		margin: 10,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
