class FetchClient {

	private API_URL = process.env.API_URL as string


	constructor(private defaultHeader: Record<string, string> = {}) {}

	async get<T>(
		path: string,
		headers?: Record<string, string>,
	): Promise<T> {
		return this.fetch( path, 'GET', undefined, headers)
	}

	async post<T>(
		path: string,
		body?: Record<string, any>,
		headers?: Record<string, string>
	): Promise<T> {
		return this.fetch( path, 'POST', body, headers)
	}

	private async fetch<T>(
		path: string,
		method: string,
		body: Record<string, any>,
		headers?: Record<string, string>,
	): Promise<T> {
		const url = `${this.API_URL}/${path}`
		try {
			const response = await fetch(
				url,
				{
					method,
					headers: {
						'Content-Type': 'application/json',
						...this.defaultHeader,
						...headers
					}, 
					body: body ? JSON.stringify(body) : null
				})

				const data = await response.json()

				if (!response.ok) {
					console.log('Fetch error',data)
					throw new Error('Fetch error: ' + JSON.stringify(data))
				} else {
					return data
				}
		} catch(error){
			console.log('Fetch error',error)
			throw error
		} 
	}
}

export const fetchGraphql = new FetchClient()