export class UserDto{
    id: number
    username: string

    constructor(partial: Partial<UserDto>) {
        Object.assign(this, partial);
      }
}