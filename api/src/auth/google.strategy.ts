import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import {UsersService} from "../users/users.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(private usersService: UsersService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["email", "profile"]
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    let user = await this.usersService.findOneByEmailOrNull(profile.email)

    if(!user) {
      user = await this.usersService.createByIntegration({
        name: profile.displayName,
        email: profile.emails[0]
      })
    }

    done(null, user)
  }
}