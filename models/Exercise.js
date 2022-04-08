export default class Exercise {
    constructor(id, categoryIds, title, description, thumbnailPath, videoPath) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.description = description;
        this.thumbnailPath = thumbnailPath;
        this.videoPath = videoPath;
    }
}