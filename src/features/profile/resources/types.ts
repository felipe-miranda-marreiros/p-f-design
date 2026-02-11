export interface Profile {
	id: string;
	name: string;
	email: string;
	avatar?: string;
	createdAt: string;
	updatedAt: string;
}

export interface UpdateProfileRequest {
	name?: string;
	avatar?: string;
}

export interface UpdateProfileResponse {
	profile: Profile;
}

export interface GetProfileResponse {
	profile: Profile;
}
