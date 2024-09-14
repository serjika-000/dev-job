import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "./data.json";

interface DataFetchingProps {
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>;
  itemsPerPage: number;
}

const DataFetching: React.FC<DataFetchingProps> = ({
  setData,
  setFilteredData,
  itemsPerPage,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
        setFilteredData(response.data.slice(0, itemsPerPage));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [setData, setFilteredData, itemsPerPage]);

  return null; 
};

export default DataFetching;
