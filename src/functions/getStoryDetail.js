import axios from 'axios'

const getStoryDetail = async (storyId) => {
    try {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        formatStoryDetail(response.data)
        return response.data
    } catch (error) {
        alert(error)
    }
}

const formatStoryDetail = (story) => {
    delete story.by // We can delete keys which we dont need
    delete story.descendants
    delete story.kids
    delete story.score
    delete story.type
    story.time = new Date(story.time * 1000) // Multiply by 1000 so we have milliseconds instead of seconds
}

export const getStoriesDetail = async (stateVar, storiesId) => {
    for (const storyId of storiesId) {
        const storyDetail = await getStoryDetail(storyId)
        stateVar.push(storyDetail)
    }
}