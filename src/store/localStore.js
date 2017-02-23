const W = window

function addLocalStory (story) {
  let storyIndex = W.localStorage.getItem(`${story.index}`)
  if (!story) {
    return
  } else if (storyIndex !== null) {
    return
  } else {
    W.localStorage.setItem(`${'' + story.index}`, JSON.stringify(story))
  }
  return `${story.id} is added`
}
function removeLocalStory (story) {
  W.localStorage.removeItem(`${'' + story.id}`)
  return `${story.id} is removed`
}
function totalLocalStoryNum () {
  return W.localStorage.length
}
function clearLocalStories () {
  W.localStorage.clear()
  return '清除完成'
}
export {addLocalStory, removeLocalStory, totalLocalStoryNum, clearLocalStories}
