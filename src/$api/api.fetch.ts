class FetchClient {

	private url: string;
	private defaultHeader: Record<string, string>
	private API_URL = process.env.API_URL as string


	constructor(url: string, defaultHeader: Record<string, string> = {}) {
		this.url = this.API_URL + url
		this.defaultHeader = defaultHeader
	}

	async query<T>(
		query?: string,
		variables?: Record<string, any>,
		headers?: Record<string, string>,
	): Promise<T> {
		return this.fetch({ query, variables }, headers)
	}

	private async fetch(
		body: Record<string, any>,
		headers?: Record<string, string>,
	): Promise<any> {
		try {
			const response = await fetch(
				this.url,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						...this.defaultHeader,
						...headers
					},
					body: JSON.stringify(body)
				})
			
				const data = await response.json()

				if (data.errors) {
					console.log('Fetch error',data.errors)
					throw new Error('Fetch error: ' + JSON.stringify(data.errors))
				} else {
					return data.data
				}
		} catch(error){
			console.log('Fetch error',error)
			throw error
		} 
	}
}

export const fetchGraphql = new FetchClient()