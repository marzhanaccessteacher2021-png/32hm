import { IsEnum, IsInt, IsString } from "class-validator";
import { TaskStatus} from "@prisma/client";

export class CreateTaskDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsEnum(TaskStatus)
    status: TaskStatus;

    @IsInt()
    boardId: number;

    @IsString()
    userId: string;
}
