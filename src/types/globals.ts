export type NextPageProps = {
  params: Object;
  searchParams: Object;
};

export type NextErrorProps = {
  message: string;
  error: string;
  statusCode: number;
};

export type Routes = {
  [key: string]: string;
};
