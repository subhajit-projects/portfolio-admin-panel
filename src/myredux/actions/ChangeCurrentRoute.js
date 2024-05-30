export const ChangeCurrentRoute = (new_url) => {
    return {
        type: 'change_url',
        new_url: new_url
    }
}