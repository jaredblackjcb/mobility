export default class Exercise {
    constructor(id, categoryIds, title, description, imagePath) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
    }
}