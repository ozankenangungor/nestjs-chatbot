import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateChatCompletionRequest {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChatCompletionMessageDto)
    messages: ChatCompletionMessageDto[];
}

export class ChatCompletionMessageDto {
    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
