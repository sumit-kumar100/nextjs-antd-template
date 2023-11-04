import { TextFilter } from "@/components/ui/filters";
import { ColumnsType, FilterProps } from "@/components/ui/types";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export const getColumns = (props: FilterProps): ColumnsType<DataType> => {
  return [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <span>{text}</span>,
    },
    {
      title: (
        <div>
          <span>Title</span>
          <TextFilter
            filterName="title"
            onFilterChange={props.onFilterChange}
          />
        </div>
      ),
      dataIndex: "title",
      key: "title",
      render: (text) => <span>{text}</span>,
    },
    {
      title: (
        <div>
          <span>Body</span>
          <TextFilter filterName="body" onFilterChange={props.onFilterChange} />
        </div>
      ),
      dataIndex: "body",
      key: "body",
      render: (text) => <span>{text.slice(0, 100)}</span>,
    },
  ];
};
