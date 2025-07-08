export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface NewPost {
  title: string;
  body: string;
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}
