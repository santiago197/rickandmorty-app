import CardPersonaje from '@/components/CardPersonaje';

const fetchCapitulos = () => {
	return fetch('https://rickandmortyapi.com/api/character').then((resp) =>
		resp.json()
	);
};
export default async function Character() {
	const { results } = await fetchCapitulos();
	return (
		<>
			{results.map((result) => (
				<CardPersonaje personaje={result} />
			))}
		</>
	);
}
