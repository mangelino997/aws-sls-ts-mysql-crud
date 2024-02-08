import { findAllMock } from '../mock/find.all.mock';

export class UserRepository {
	public findAllMock(): typeof findAllMock {
		return findAllMock;
	}

	public findByIdMock(userId: number): (typeof findAllMock)[0] | undefined {
		return findAllMock.find(user => user.id === userId);
	}
}
