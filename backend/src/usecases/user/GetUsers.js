export class GetUsers {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async execute({ page, limit, search }) {
    return this.userRepo.findAll({ page, limit, search });
  }
}
