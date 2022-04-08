import WorkoutCategory from '../models/WorkoutCategory';
import Exercise from '../models/Exercise';
 
export const WORKOUT_CATEGORIES = [
    new WorkoutCategory(100, "Neck", "test"),
    new WorkoutCategory(101, "Back", "test"),
    new WorkoutCategory(102, "Shoulders", "test"),
    new WorkoutCategory(103, "Hips", "test"),
    new WorkoutCategory(104, "Knees", "test"),
    new WorkoutCategory(105, "Ankles", "test"),
    new WorkoutCategory(106, "Wrists", "test")
];

export const EXERCISES = [
    new Exercise(200, {categoryIDs: [100, 101, 102, 103, 104, 105, 106]}, "Plank", "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.Keep your body straight and your neck parallel with the floor. Hold for as long as you can or until time is up.", require("../assets/exercise/placeholder.jpeg"), require("../assets/exercise-videos/test-video.mp4")),
    new Exercise(201, {categoryIDs: [100, 101, 102, 103, 104, 105, 106]}, "Ankle Rolls", "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", require("../assets/exercise/placeholder.jpeg"), require("../assets/exercise-videos/test-video.mp4")),
    new Exercise(202, {categoryIDs: [100, 101, 102, 103, 104, 105, 106]}, "Deep Squat", "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.Provident similique accusantium nemo autem Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!", require("../assets/exercise/placeholder.jpeg"), require("../assets/exercise-videos/test-video.mp4")),
    new Exercise(204, {categoryIDs: [100, 101, 102, 103, 104, 105, 106]}, "Plank2", "Keep your body straight and your neck parallel with the floor. Hold for as long as you can or until time is up.Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.", require("../assets/exercise/placeholder.jpeg"), require("../assets/exercise-videos/test-video.mp4")),
];