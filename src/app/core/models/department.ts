import { School } from "@app/core/models/school";
import { Course } from "@app/core/models/course";

export interface Department {
    id: number;
    name: string;
    school: School;
    courses: Course[];
}
