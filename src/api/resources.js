/**
 * An API that communicates with local storage.
 *
 * This is a synchronous API.
 */
import { name, random, internet } from 'faker'

/**
 * Updates the local storage resources with new resources.
 *
 * @param resources The new resources to be stored
 */
function updateLocalStorageResources(resources) {
  window.localStorage.resources = JSON.stringify(resources)
}

/**
 * Grabs our local storage resource.
 */
export function getResources() {
  return JSON.parse(window.localStorage.resources || '[]')
}

/**
 * Add a single resource to local storage.
 *
 * @param details The details of the resource being added
 */
export function add(details) {
  let resources = getResources()

  resources = [{
    id: random.uuid(),
    type: details.type.toLowerCase() === 'article' ? 'Article' : 'Video',

    // In reference to google material icons
    icon: details.type.toLowerCase() === 'article' ? 'book' : 'play_circle_outline',

    // Trying to give it a bit of life. A class could
    // have also been used but this gives the illusion
    // that the user was able to pick a color.
    color: random.arrayElement(['#4f99f7', '#f74f4f']),
    title: details.title,
    description: details.description,
    url: details.url,
    tags: details.tags
  }, ...resources]

  updateLocalStorageResources(resources)

  return resources
}

/**
 * Update an existing resource.
 *
 * @param id The id of the resource that is being edited
 * @param details The details that are being updated
 */
export function update(id, details) {
  console.log(details.type.toLowerCase(), 'asdasdasd')
  let resources = getResources()
  let newResources = resources.map(resource => {
    if (resource.id === id) {
      resource = {...resource, ...details, ...{
        type: details.type.toLowerCase() === 'article' ? 'Article' : 'Video',
        icon: details.type.toLowerCase() === 'article' ? 'book' : 'play_circle_outline',
      }}
    }

    return resource
  })

  updateLocalStorageResources(newResources)

  return newResources
}

/**
 * Remove a single resource by id from local storage.
 *
 * Note: delete would have been used but it's a reserved keyword.
 *
 * @param id The resource id
 */
export function remove(id) {
  let resources = getResources()
  let newResources = resources.filter(resource => resource.id !== id)

  updateLocalStorageResources(newResources)

  return newResources
}

/**
 * Removes the api stored in local storage for the library app.
 */
export function removeAll() {
  window.localStorage.removeItem('resources')
}

/**
 * Generates fake resources for our application.
 *
 * The fake data would generally be persistent
 * api that was brought back either on server
 * render or through ajax (most likely json).
 */
export function generateResources(generate = true) {
  let resources = getResources()

  if (generate) {
    for (let i = 0; i < random.number({ min: 1, max: 40 }); i++) {
      let data = {
        id: random.uuid(),
        type: i % 2 === 0 ? 'Article' : 'Video',

        // In reference to google material icons
        icon: i % 2 === 0 ? 'book' : 'play_circle_outline',

        // Trying to give it a bit of life. A class could
        // have also been used but this gives the illusion
        // that the user was able to pick a color.
        color: random.arrayElement(['#4f99f7', '#f74f4f']),
        title: random.word(),
        description: random.words(20),
        url: internet.url(),
        tags: []
      }

      for (let x = 0; x < random.number(5); x++) {
        data.tags = [...data.tags, random.word()]
      }

      resources = [...resources, data]
    }

    updateLocalStorageResources(resources)
  }

  return resources
}
