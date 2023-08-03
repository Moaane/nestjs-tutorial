import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) {}

    async signup() {
        return {msg : 'I am sign up'}
    }

    async signin() {
        return {msg : 'I am sign in'}
    }
} 
