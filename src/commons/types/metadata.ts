export type Metadata<T> = {
	meta: {
		offset: number;
		limit: number;
		next_offset: number;
		previous_offset: number;
		is_last_page: boolean;
		is_first_page: boolean;
		page: number;
		total_pages: number;
	};
	data: T[];
};
