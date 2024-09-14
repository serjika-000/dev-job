
import { useState } from "react";

const PaginationHandler = ({
  data,
  itemsPerPage,
  setFilteredData,
  children,
}: {
  data: any[];
  itemsPerPage: number;
  setFilteredData: (data: any[]) => void;
  children: (handleLoadMore: () => void) => JSX.Element;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = nextPage * itemsPerPage;
    const newItems = data.slice(startIndex, endIndex);

    setFilteredData((prevData) => [...prevData, ...newItems]);
    setCurrentPage(nextPage);
  };

  return children(handleLoadMore);
};

export default PaginationHandler;
