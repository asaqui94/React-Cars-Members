const  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IiIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE3IDAzOjIxOjAzLjk0NjYzOVwiIn0.QPTnpo0tiqGNDkD61l7FG6U4ayQ9lK2zadNxwSV-Z-c'
export const server_calls = {
    get: async () => {
        const response = await fetch(`/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data from server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch(`/cars`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    }
}
