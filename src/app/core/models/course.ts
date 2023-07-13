import { School } from "@app/core/models/school";
import { Department } from "@app/core/models/department";

export interface Course {
    id: number;
    name: string;
    school: School;
    department: Department;
}
