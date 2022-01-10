import axios from 'axios'

export const getTop100StoriesId = async () => {
    try {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        return response.data.slice(0, 100) // We need only first 100 stories
    } catch (error) {
        alert(error)
    }
}