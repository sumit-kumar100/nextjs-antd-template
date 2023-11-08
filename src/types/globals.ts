export type NextPageProps = {
  params: Record<string, any>;
  searchParams: Record<string, any>;
};

export type NextErrorProps = {
  message: string;
  error: string;
  statusCode: number;
};
