import { IsString, IsNotEmpty } from 'class-validator';

export class LoginRequestDto {

    @IsString()
    @IsNotEmpty({ message: "Filed username is required" })
    phoneNumber: string;

    @IsString()
    @IsNotEmpty({ message: "Filed password is required" })
    password: string;
}

export class SignUpDto{

    @IsString()
    @IsNotEmpty({message: "Please enter your phoneNumber"})
    phoneNumber: string;

    @IsString()
    @IsNotEmpty({message: "Password must be longer than 8 characters"})
    password  : string;

    @IsString()
    @IsNotEmpty({message: 'Please select a role'})
    role      : string;
}
