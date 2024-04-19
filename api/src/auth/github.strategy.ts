import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import { Strategy } from 'passport-github2';
import {UsersService} from "../users/users.service";
import {VerifyCallback} from "passport-google-oauth20";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(private usersService: UsersService) {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"]
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {

    let user = await this.usersService.findOneByEmailOrNull(profile.email)

    // if(!user) {
    //   user = await this.usersService.createByIntegration({
    //     name: profile.displayName,
    //     email: profile.emails[0]?.value
    //   })
    // }

    done(null, profile)
  }
}