export type NextComponent = any;

export type NextProps = any;

export type NextPageProps = {
  params: Params;
  searchParams: SearchParams;
};

export type NextErrorProps = {
  message: string;
  error: string;
  statusCode: number;
};

export type Params = {
  [key: string]: any;
};

export type SearchParams = any;

export type Routes = {
  [key: string]: string;
};

export type Range = {
  from: number | undefined;
  to: number | undefined;
};
