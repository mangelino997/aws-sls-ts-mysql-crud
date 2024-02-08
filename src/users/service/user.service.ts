import { UserRepository } from '../entity/user.repository';

export class UserService {
	constructor(private readonly userRepository: UserRepository) {}
	public findAll() {
		return this.userRepository.findAllMock();
	}
	public findById(id: number) {
		return this.userRepository.findByIdMock(id);
	}
}
