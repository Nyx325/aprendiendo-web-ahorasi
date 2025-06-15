export interface ApiFieldError {
  field: String;
  error: String;
}

export interface ApiErrorResponse {
  message?: String;
  errors?: Array<ApiFieldError>;
}
