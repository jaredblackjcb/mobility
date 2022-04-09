export default class Exercise {
    constructor(id, categoryIds, title, repetitions, duration, description, thumbnailPath, videoPath) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.repetitions = repetitions;
        this.duration = duration;
        this.description = description;
        this.thumbnailPath = thumbnailPath;
        this.videoPath = videoPath;
    }
}