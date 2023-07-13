import { Course } from "@app/core/models/course";
import { Rating } from "@app/core/models/rating";
import { School } from "@app/core/models/school";

export interface Professor {
    id: number;
    firstName: string;
    lastName: string;
    school: School;
    courses: Course[];
    ratings: Rating[];
}
