export type NextErrorProps = {
  message: string;
  error: string;
  statusCode: number;
};

export type NextPageProps = {
  params: Record<string, any>;
  searchParams: Record<string, any>;
};
