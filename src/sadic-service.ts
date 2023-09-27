const API_URL: string = "https://api.adviceslip.com/advice";

export default class SadicService {
	constructor() {

	}

	teste() {
		fetch(API_URL).then((result) => {
			console.log(result)
		})
	}

	async get(advice_id: number | undefined): Promise<any> {
		let url = API_URL;

		if (advice_id !== undefined) {
			url = url + `/${advice_id}`
		}

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status}`)
			}

			const data = await response.json();
			return data;

		} catch (error) {
			throw new Error(`Error fetch data: ${error}`)
		}
	}
}
