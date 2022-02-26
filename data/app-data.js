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
    new Exercise(200, {categoryIDs: [101, 103]}, "Plank", "Keep your body straight and your neck parallel with the floor. Hold for as long as you can or until time is up.", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(201, {categoryIDs: [105]}, "Ankle Rolls", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(202, {categoryIDs: [103, 104, 105]}, "Deep Squat", "Provident similique accusantium nemo autem Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(203, {categoryIDs: [100, 101, 102, 103, 106]}, "Cobra", "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.", require("../assets/exercise/placeholder.jpeg")), 
    new Exercise(204, {categoryIDs: [101, 103]}, "Plank2", "Keep your body straight and your neck parallel with the floor. Hold for as long as you can or until time is up.", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(205, {categoryIDs: [105]}, "Ankle Rolls2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(206, {categoryIDs: [103, 104, 105]}, "Deep Squat2", "Provident similique accusantium nemo autem Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(207, {categoryIDs: [100, 101, 102]}, "Cobra2", "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(208, {categoryIDs: [101, 103]}, "Plank3", "Keep your body straight and your neck parallel with the floor. Hold for as long as you can or until time is up.", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(209, {categoryIDs: [105]}, "Ankle Rolls3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(210, {categoryIDs: [103, 104, 105]}, "Deep Squat3", "Provident similique accusantium nemo autem Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(211, {categoryIDs: [100, 101, 102, 103, 106]}, "Cobra3", "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(212, {categoryIDs: [101, 103]}, "Plank4", "Keep your body straight and your neck parallel with the floor. Hold for as long as you can or until time is up.", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(213, {categoryIDs: [105]}, "Ankle Rolls4", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(214, {categoryIDs: [103, 104, 105]}, "Deep Squat4", "Provident similique accusantium nemo autem Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!", require("../assets/exercise/placeholder.jpeg")),
    new Exercise(215, {categoryIDs: [100, 101, 102, 103, 106]}, "Cobra4", "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam ecusandae alias error harum maxime adipisci amet laborum.", require("../assets/exercise/placeholder.jpeg")),
];